"use server";

import { z } from "zod";

import { sendEmail } from "./resend";
import { ErrorResponse } from "resend";

const schema = z.object({
  name: z
    .string({
      invalid_type_error: "Nome deve ser um texto",
      required_error: "Nome é obrigatório!",
    })
    .nonempty({
      message: "Nome não pode ser nulo!",
    }),
  email: z
    .string({
      invalid_type_error: "Email deve ser um texto",
      required_error: "Email é obrigatório!",
    })
    .nonempty({
      message: "Email não pode ser nulo!",
    }),
  subject: z
    .string({
      invalid_type_error: "Assunto deve ser um texto",
      required_error: "Assunto é obrigatório!",
    })
    .nonempty({
      message: "Assunto não pode ser nulo!",
    }),
  text: z
    .string({
      invalid_type_error: "Mensagem deve ser um texto",
      required_error: "Mensagem é obrigatório!",
    })
    .nonempty({
      message: "Mensagem não pode ser nula!",
    }),
});

export async function contactEmail(prevState: any, form: FormData) {
  console.log(`Enviando email de ${form.get("email")}`);

  const validatedFields = schema.safeParse({
    name: form.get("name"),
    email: form.get("email"),
    subject: form.get("subject"),
    text: form.get("text"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errorsValidation: validatedFields.error.flatten().fieldErrors,
      errorEmail: null,
      success: false,
    };
  }

  const response = await sendEmail(
    form.get("name") as string,
    form.get("email") as string,
    form.get("subject") as string,
    form.get("text") as string
  );

  if (response.error) {
    return {
      errorEmail: response.error as {
        name: string;
        message: string;
        statusCode: number;
      },
      errorsValidation: null,
      success: false,
    };
  } else {
    return {
      errorEmail: null,
      errorsValidation: null,
      success: true,
    };
  }
}
