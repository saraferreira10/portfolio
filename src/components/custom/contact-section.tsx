import { Text } from "@chakra-ui/react";
import ContainerSection from "./container-section";
import FormEmail from "./form-email";

export default function ContactSection() {
  return (
    <ContainerSection id="contact" heading="Vamos conversar?">
      <Text>Eu adoraria te ajudar com soluções incríveis! </Text>
      <br />
      <FormEmail/>
    </ContainerSection>
  );
}
