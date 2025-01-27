"use client";

import Menu from "@/components/custom/main-header";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import AnimatedCursor from "react-animated-cursor";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <AnimatedCursor
            innerSize={8}
            outerSize={8}
            color="193, 11, 111"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />

          <ChakraProvider value={defaultSystem}>
            <ColorModeProvider>
              <Menu />
              {children}
            </ColorModeProvider>
          </ChakraProvider>
        </motion.div>
      </body>
    </html>
  );
}
