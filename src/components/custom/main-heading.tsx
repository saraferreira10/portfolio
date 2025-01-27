import { Heading } from "@chakra-ui/react";

export default function MainHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Heading
      size="2xl"
      bgClip="text"
      bgGradient="to-b"
      gradientFrom="#FB5AF7"
      gradientTo="#920BFD"
      fontWeight="bold"
    >
      {children}
    </Heading>
  );
}
