import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function ButtonLink({
  children,
  linkTo,
}: {
  children: React.ReactNode;
  linkTo: string;
}) {
  return (
    <Link href={linkTo} target="_blank">
      <Button
        bgGradient="to-r"
        gradientFrom="#FB5AF7"
        gradientTo="#920BFD"
        border="none"
        color="white"
        _hover={{
          bgGradient: "to-b",
          gradientFrom: "#fb5af8c5",
          gradientTo: "#900bfdb5",
        }}
        transition="background 0.3s ease-in-out"
      >
        {children}
      </Button>
    </Link>
  );
}
