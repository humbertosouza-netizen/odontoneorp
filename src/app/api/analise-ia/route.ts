import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type Body = {
  leadsHoje: number;
  faturamentoHoje: number;
  periodo: string;
  observacoes?: string;
};

/* Resumo com base em métricas do painel + leads + faturamento.
   Para usar IA real (OpenAI), configure OPENAI_API_KEY e descomente o bloco. */
function gerarResumoMock(body: Body): string {
  const { leadsHoje, faturamentoHoje, periodo, observacoes } = body;
  const fat = faturamentoHoje.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const ticket = leadsHoje > 0 ? faturamentoHoje / leadsHoje : 0;
  const ticketFmt = ticket.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  let resumo = `**Resumo de performance (${periodo})**\n\n`;
  resumo += `• Leads hoje: ${leadsHoje}\n`;
  resumo += `• Faturamento hoje: ${fat}\n`;
  if (leadsHoje > 0) resumo += `• Ticket médio (hoje): ${ticketFmt}\n\n`;
  resumo += `Use as métricas do painel (sessões, conversões) para comparar com resultados em dinheiro. `;
  resumo += `Alta de leads com faturamento estável pode indicar conversão em consultas futuras.\n\n`;
  if (observacoes?.trim()) {
    resumo += `**Observações registradas:**\n${observacoes.trim()}\n\n`;
  }
  resumo += `Recomendação: mantenha anúncios em períodos de boa conversão e invista em datas sazonais que você cadastrar.`;

  return resumo;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Body;
    const { leadsHoje = 0, faturamentoHoje = 0, periodo = "30 dias", observacoes } = body;

    // Opcional: chamar OpenAI para análise em linguagem natural
    // const apiKey = process.env.OPENAI_API_KEY;
    // if (apiKey) { ... }

    const resumo = gerarResumoMock({
      leadsHoje: Number(leadsHoje) || 0,
      faturamentoHoje: Number(faturamentoHoje) || 0,
      periodo: String(periodo).slice(0, 50),
      observacoes,
    });

    return NextResponse.json({ resumo });
  } catch (e) {
    console.error("analise-ia:", e);
    return NextResponse.json(
      { error: "Erro ao gerar análise. Tente novamente." },
      { status: 500 }
    );
  }
}
