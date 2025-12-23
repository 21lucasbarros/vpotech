import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  message: z.string().min(8, "Mensagem deve ter no mínimo 8 caracteres"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // validacao dos dados com zod
    const validatedData = contactSchema.parse(body);

    // envia email usando Resend
    const { data, error } = await resend.emails.send({
      from: "VPO Tech <onboarding@resend.dev>", // email de teste do Resend
      to: ["devlucasbarros@gmail.com"], // nosso email
      subject: `Novo contato de ${validatedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
              .content { background: #f7f7f7; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: 600; color: #374151; margin-bottom: 5px; }
              .value { color: #1f2937; }
              .message-box { background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #3b82f6; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">Novo Contato - VPO Tech</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nome:</div>
                  <div class="value">${validatedData.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${validatedData.email}">${
        validatedData.email
      }</a></div>
                </div>
                <div class="field">
                  <div class="label">Mensagem:</div>
                  <div class="message-box">${validatedData.message.replace(
                    /\n/g,
                    "<br>"
                  )}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Erro ao enviar email:", error);
      return NextResponse.json(
        { error: "Erro ao enviar mensagem" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!", data },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Dados inválidos", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Erro inesperado:", error);
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}
