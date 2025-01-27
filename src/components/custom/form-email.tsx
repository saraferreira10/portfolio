"use client";

import {
  Box,
  Button,
  Fieldset,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Field } from "../ui/field";
import { contactEmail } from "@/lib/email-action";
import { Toaster, toaster } from "../ui/toaster";
import { useActionState, useEffect } from "react";

interface StateType {
  errorsValidation: {
    name?: string[] | null;
    email?: string[] | null;
    subject?: string[] | null;
    text?: string[] | null;
  } | null;
  errorEmail: { name: string; message: string; statusCode: number } | null;
  success: boolean | null;
}

const initialState: StateType = {
  errorsValidation: {
    name: null,
    email: null,
    subject: null,
    text: null,
  },
  errorEmail: null,
  success: null,
};

export default function FormEmail() {
  const [state, formAction] = useActionState(contactEmail, initialState);

  function showErrorToast() {
    if (
      state?.errorEmail?.statusCode === 422 ||
      state?.errorEmail?.statusCode === 400
    ) {
      toaster.create({
        description: state.errorEmail.message,
        type: "error",
      });
    } else {
      toaster.create({
        description: "Houve um erro ao enviar seu email. Tente novamente!",
        type: "error",
      });
    }
  }

  useEffect(() => {
    if (state?.errorsValidation) return;

    if (state?.errorEmail) {
      showErrorToast();
    }

    if (state?.success) {
      toaster.create({
        description: "Email enviado com sucesso!",
        type: "success",
      });
    }
  }, [state?.errorEmail]);

  return (
    <form action={formAction}>
      <Toaster />
      <Fieldset.Root width="100%" md={{ width: "50%" }}>
        <VStack gap="1rem">
          <Field label="Nome">
            <Input
              outline="none"
              name="name"
              placeholder="Jonh Doe"
              borderColor={state?.errorsValidation?.name ? "red" : ""}
            />
            <Text fontSize="sm" color="red">
              {state?.errorsValidation?.name}
            </Text>
          </Field>

          <Field label="Email">
            <Input
              outline="none"
              placeholder="jonh@gmail.com"
              borderColor={state?.errorsValidation?.email ? "red" : ""}
              name="email"
            />
            <Text fontSize="sm" color="red">
              {state?.errorsValidation?.email}
            </Text>
          </Field>

          <Field label="Assunto">
            <Input
              outline="none"
              name="subject"
              placeholder="Want to build a website"
              borderColor={state?.errorsValidation?.subject ? "red" : ""}
            />
            <Text fontSize="sm" color="red">
              {state?.errorsValidation?.subject}
            </Text>
          </Field>

          <Field label="Mensagem">
            <Textarea
              rows={5}
              outline="none"
              placeholder="Looking for a software developer skilled in React for a specific project"
              name="text"
              borderColor={state?.errorsValidation?.text ? "red" : ""}
            />
            <Text fontSize="sm" color="red">
              {state?.errorsValidation?.text}
            </Text>
          </Field>

          <Box width="100%" display="flex" gap="2rem">
            <Button type="submit">Enviar</Button>
            <Button variant="outline" type="reset">Limpar</Button>
          </Box>
        </VStack>
      </Fieldset.Root>
    </form>
  );
}
