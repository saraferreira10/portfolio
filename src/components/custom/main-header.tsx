import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { ColorModeButton } from "../ui/color-mode";

export default function Menu() {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      paddingX="50px"
      paddingY="10px"
      position="fixed"
      zIndex={1}
      top={0}
      bgColor="bg"
      boxShadow="xs"
    >
      <Box>
        <Image
          src="/images/notion-face.png"
          alt="Notion face"
          width="60"
          height="60"
        />
      </Box>
      <Box>
        <ColorModeButton
          rounded="full"
          height="50px"
          width="50px"
          bgGradient="to-b"
          gradientFrom="#FB5AF7"
          gradientTo="#920BFD"
          color="white"
          border="none"
          _hover={{
            bgGradient: "to-b",
            gradientFrom: "#fb5af8c5",
            gradientTo: "#900bfdb5",
          }}
          transition="background 0.3s ease-in-out"
        />
      </Box>
    </Flex>
  );
}
