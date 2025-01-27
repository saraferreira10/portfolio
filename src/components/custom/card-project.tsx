import { Badge, Card, Flex, Image, Link } from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";

export default function CardProject({
  title,
  src,
  stack,
  children,
}: {
  title: string;
  src: string;
  stack: { element: React.ReactElement; tooltip: string }[];
  children: React.ReactNode;
}) {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={src} alt={title} />
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          <Flex gap="1rem">
            {stack.map((s) => (
              <Tooltip content={s.tooltip} key={s.tooltip}>
                <Badge>{s.element}</Badge>
              </Tooltip>
            ))}
          </Flex>
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">{children}</Card.Footer>
    </Card.Root>
  );
}
