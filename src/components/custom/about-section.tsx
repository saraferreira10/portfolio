import { Box, Card, Highlight, Image, Text } from "@chakra-ui/react";
import React from "react";
import ContainerSection from "./container-section";

export default function AboutSection() {
  return (
    <ContainerSection id="about">
      <Card.Root
        flexDirection="column"
        paddingY="2rem"
        paddingX="1rem"
        alignItems="center"
        borderColor="#E357DE"
        borderWidth="1.5px"
        lg={{
          flexDirection: "row",
          paddingY: "1rem",
          paddingX: "5rem",
          gap: "2rem",
        }}
      >
        <Box>
          <Image
            src="/images/profile.jpeg"
            objectFit="cover"
            maxW="200px"
            rounded="full"
          />
        </Box>
        <Box>
          <Card.Body>
            <Box textAlign="justify" lineHeight="20px">
              <Text>Oi :)</Text>
              <br />
              <Text>Eu sou a Sara!</Text>
              <br />
              <Text>
                Estou construindo minha carreira na área de tecnologia e adoro a
                ideia de criar soluções que facilitam a vida das pessoas.
              </Text>
              <br />
              <Highlight
                query={["Javascript", "Typescript", "Git", "Node", "AWS"]}
                styles={{ px: "0.5", bg: "#8F5CF1", color: "whiteAlpha.800" }}
              >
                Mesmo no início da minha trajetória, já tive a oportunidade de
                aprender e aplicar tecnologias como Javascript, Typescript, Git,
                Node e AWS.
              </Highlight>
              <br />
              <br />
              <Text>
                Estou sempre em busca de novos conhecimentos e desafios que me
                ajudem a crescer como profissional. Gosto de encarar problemas
                como oportunidades de aprendizado, e acredito que colaborar em
                equipe é essencial para alcançar grandes resultados.
              </Text>
              <br />
              <Text>
                Meu objetivo é continuar desenvolvendo habilidades, contribuindo
                para projetos incríveis e deixando minha marca no mundo da
                tecnologia.
              </Text>
              <br />
              <Text>Vamos crescer juntos e transformar ideias em realidade?</Text>
            </Box>
          </Card.Body>
        </Box>
      </Card.Root>
    </ContainerSection>
  );
}
