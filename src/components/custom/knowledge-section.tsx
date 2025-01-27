import { Badge, List } from "@chakra-ui/react";
import ContainerSection from "./container-section";
import { Tooltip } from "../ui/tooltip";

export default function KnowledgeSection() {
  const skills = [
    "Javascript",
    "Typescript",
    "Java",
    "Spring",
    "NodeJS",
    "React",
    "TailwindCSS",
    "ChakraUI",
  ];

  return (
    <ContainerSection id="knowledge" heading="Conhecimentos">
      <List.Root
        listStyle="none"
        flexDirection="row"
        gap="2rem"
        flexWrap="wrap"
      >
        {skills.map((skill) => (
          <List.Item key={skill}>
            <Badge padding="2rem">{skill}</Badge>
          </List.Item>
        ))}

        <List.Item key="AWS CLF-C02">
          <Tooltip content="Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.">
            <Badge padding="2rem">🎖️ AWS CLF-C02</Badge>
          </Tooltip>
        </List.Item>

        <List.Item key="AWS DVA-C02">
          <Tooltip content="Earners of this certification have a comprehensive understanding of application life-cycle management. They demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices.">
            <Badge padding="2rem">🎖️ AWS DVA-C02</Badge>
          </Tooltip>
        </List.Item>
      </List.Root>
    </ContainerSection>
  );
}

