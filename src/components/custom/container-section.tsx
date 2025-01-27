import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import MainHeading from "./main-heading";

export default function ContainerSection({
  id,
  heading,
  children,
  props,
}: {
  id: string;
  heading?: string;
  children: ReactNode;
  props?: React.HTMLProps<HTMLElement>;
}) {
  return (
    <section id={id} {...props}>
      <Box marginX="2rem" paddingTop="6rem" lg={{ marginX: "5rem" }}>
        {heading && (
          <>
            <MainHeading>{heading}</MainHeading>
            <br />
          </>
        )}
        {children}
      </Box>
    </section>
  );
}
