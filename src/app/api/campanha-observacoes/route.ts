import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type Body = {
  tipo: "observacao" | "promocao" | "data_sazonal";
  mensagem: string;
  data?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Body;
    const { tipo, mensagem, data } = body;

    if (!tipo || !mensagem?.trim()) {
      return NextResponse.json(
        { error: "tipo e mensagem são obrigatórios" },
        { status: 400 }
      );
    }

    const tipoLabel =
      tipo === "observacao"
        ? "Observação"
        : tipo === "promocao"
          ? "Promoção"
          : "Data sazonal";

    /* Aqui você pode:
       - Enviar e-mail (Resend, Nodemailer, etc.) para você/gestor
       - Salvar em banco de dados
       - Enviar para um webhook (Slack, Zapier, etc.)
       Use a variável de ambiente EMAIL_GESTOR ou CONTATO_CAMPANHA para o destinatário.
    */
    const emailGestor = process.env.EMAIL_GESTOR || process.env.EMAIL || "contato@odontoneo.com";

    // Exemplo de payload para envio por e-mail (implemente com seu provedor):
    const payload = {
      to: emailGestor,
      subject: `[OdontoNeo Campanha] ${tipoLabel} – ${new Date().toLocaleDateString("pt-BR")}`,
      text: [
        `Tipo: ${tipoLabel}`,
        data ? `Data: ${data}` : "",
        `Mensagem:\n${mensagem.trim()}`,
      ]
        .filter(Boolean)
        .join("\n"),
    };

    // TODO: descomente e configure quando tiver serviço de e-mail
    // await sendEmail(payload);

    return NextResponse.json({
      ok: true,
      message: "Observação enviada. Você receberá no e-mail configurado.",
    });
  } catch (e) {
    console.error("campanha-observacoes:", e);
    return NextResponse.json(
      { error: "Erro ao enviar. Tente novamente." },
      { status: 500 }
    );
  }
}
