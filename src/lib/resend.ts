import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  name: string,
  email: string,
  subject: string,
  text: string
) {

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "devsaraferreira@gmail.com",
    replyTo: email,
    subject,
    text: `
          Nome: ${name}
          E-mail: ${email}
          Mensagem: ${text}
        `,
  });

  if (error) {
    console.log("ERROR", error);
  }

  console.log("DATA", data);
  return { data, error };
}
