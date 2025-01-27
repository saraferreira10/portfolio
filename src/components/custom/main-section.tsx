import { Badge, Box, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import ButtonLink from "./button-link";
import CustomBadge from "./custom-badge";
import ContainerSection from "./container-section";

export default function MainSection() {
  return (
    <ContainerSection id="/">
      <Flex paddingY="4rem" alignItems="center" direction="column" gap="40px">
        <Box>
          <CustomBadge>Hello World 🌍</CustomBadge>
        </Box>
        <Flex
          direction="column"
          textAlign="center"
          gap="20px"
          letterSpacing="tight"
        >
          <Heading size="4xl" fontFamily="monospace">
            <Highlight
              query="Sara"
              styles={{
                bgClip: "text",
                bgGradient: "to-b",
                gradientFrom: "#FB5AF7",
                gradientTo: "#920BFD",
                fontWeight: "bold",
              }}
            >
              👋 Eu sou a Sara!
            </Highlight>
          </Heading>
          <Text>
            Desenvolvedora de Software apaixonada por criar soluções inovadoras.
          </Text>
        </Flex>
        <Box>
          <ButtonLink linkTo="https://www.linkedin.com/in/saraferreira10">
            <FaLinkedin /> Conecte-se comigo
          </ButtonLink>
        </Box>
      </Flex>
    </ContainerSection>
  );
}
