import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function CustomLink({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link href={`${href}`} data-to-scrollspy-id={href}>
      <Button
        border="none"
        height="40px"
        width="40px"
        bgGradient="to-r"
        bgColor="transparent"
        gradientFrom={isActive ? "#FB5AF7" : ""}
        gradientTo={isActive ? "#920BFD" : ""}
        _hover={{
          bgColor: "gray.contrast",
        }}
        transition="background 0.3s ease-in-out"
      >
        {children}
      </Button>
    </Link>
  );
}
