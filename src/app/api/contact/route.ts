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
      to: ["lucasweacked21@gmail.com"], // email onde você recebe os contatos
      subject: `Novo contato de ${validatedData.name}`,
      html: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif}.container{max-width:600px;margin:0 auto;padding:40px 20px;background:#0f0f0f;border-radius:16px}.header{text-align:left;margin-bottom:24px}.logo{font-size:28px;font-weight:600;color:#f7f7f7;margin-bottom:8px;letter-spacing:-0.02em}.subtitle{font-size:14px;color:rgba(247,247,247,0.6);text-transform:uppercase;letter-spacing:0.1em}.card{background:#1a1a1a;border-radius:12px;padding:32px;margin-bottom:24px}.field{margin-bottom:24px}.field:last-child{margin-bottom:0}.label{font-size:12px;font-weight:600;color:rgba(247,247,247,0.5);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px}.value{font-size:16px;color:#f7f7f7;line-height:1.5}.email-link{color:#3b82f6;text-decoration:none}.email-link:hover{color:#60a5fa;text-decoration:underline}.message-box{background:rgba(59,130,246,0.05);border-left:4px solid #3b82f6;padding:20px;border-radius:6px;color:rgba(247,247,247,0.9);line-height:1.6}.footer{text-align:center;margin-top:32px;padding-top:24px;border-top:1px solid rgba(0,0,0,0.1)}.footer-text{font-size:12px;color:#6b7280;line-height:1.5}.badge{display:inline-block;background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%);color:white;padding:8px 16px;border-radius:6px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:20px}</style></head><body><div class="container"><div class="header"><div class="logo">VPO Tech</div><div class="subtitle">Nova Mensagem de Contato</div></div><div class="badge">Novo Lead</div><div class="card"><div class="field"><div class="label">Nome do Contato</div><div class="value">${
        validatedData.name
      }</div></div><div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${
        validatedData.email
      }" class="email-link">${
        validatedData.email
      }</a></div></div><div class="field"><div class="label">Mensagem</div><div class="message-box">${validatedData.message.replace(
        /\n/g,
        "<br>"
      )}</div></div></div><div class="footer"><div class="footer-text">Este email foi enviado através do formulário de contato do site VPO Tech<br>© ${new Date().getFullYear()} VPO Tech. Todos os direitos reservados.</div></div></div></body></html>`,
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
