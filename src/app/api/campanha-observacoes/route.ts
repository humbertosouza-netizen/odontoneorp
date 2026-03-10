import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase-client";

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

    // Salvar no Supabase para aparecer no painel /gestor
    if (supabase) {
      const { error } = await supabase.from("campanha_observacoes").insert({
        tipo,
        mensagem: mensagem.trim(),
        data_sazonal: data || null,
      });
      if (error) {
        console.error("Erro ao salvar campanha_observacoes no Supabase:", error);
      }
    }

    /* Opcional: além de salvar no Supabase, você pode enviar e-mail
       para o gestor usando EMAIL_GESTOR / EMAIL. Mantido como comentário.
    */
    // const emailGestor = process.env.EMAIL_GESTOR || process.env.EMAIL || "odontoneoriopreto@gmail.com";
    // const payload = { ... };
    // await sendEmail(payload);

    return NextResponse.json({
      ok: true,
      message: "Observação registrada com sucesso.",
    });
  } catch (e) {
    console.error("campanha-observacoes:", e);
    return NextResponse.json(
      { error: "Erro ao enviar. Tente novamente." },
      { status: 500 }
    );
  }
}
