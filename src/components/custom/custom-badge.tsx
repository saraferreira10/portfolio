import { Badge } from "@chakra-ui/react";

export default function CustomBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Badge bgColor="#F0EAE4" color="#2A0D3D" height="35px" paddingX="20px">
      {children}
    </Badge>
  );
}
