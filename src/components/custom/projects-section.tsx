import {
  FaAngular,
  FaBootstrap,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import ContainerSection from "./container-section";
import { Badge, Card, Flex, Image, Link } from "@chakra-ui/react";
import CardProject from "./card-project";
import {
  SiChakraui,
  SiExpress,
  SiJquery,
  SiReactrouter,
  SiSpring,
  SiThymeleaf,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { DiJavascript, DiMysql } from "react-icons/di";

export default function ProjectSection() {
  return (
    <ContainerSection id="projects" heading="Projetos">
      <Flex gap="1rem" justifyContent="space-between" flexWrap="wrap">
        <CardProject
          title="E-commerce product page"
          src="/images/ecommerce-product-page.png"
          stack={[
            { element: <FaReact />, tooltip: "React" },
            { element: <RiTailwindCssFill />, tooltip: "Tailwind" },
            { element: <SiVite />, tooltip: "Vite" },
          ]}
        >
          <Link
            fontSize="sm"
            href="https://ecommerce-product-page-eight-iota.vercel.app/"
          >
            Deploy
          </Link>
          <Link
            fontSize="sm"
            href="https://github.com/saraferreira10/ecommerce-product-page"
          >
            Repositório
          </Link>
        </CardProject>

        <CardProject
          title="Interactive card details form"
          src="/images/interactive-card.png"
          stack={[
            { element: <FaAngular />, tooltip: "Angular" },
            { element: <RiTailwindCssFill />, tooltip: "Tailwind" },
            { element: <SiTypescript />, tooltip: "Typescript" },
          ]}
        >
          <Link
            fontSize="sm"
            href="https://interactive-card-challenge-one.vercel.app/"
          >
            Deploy
          </Link>
          <Link
            fontSize="sm"
            href="https://github.com/saraferreira10/interactive-card-challenge"
          >
            Repositório
          </Link>
        </CardProject>
        <CardProject
          title="Pizza Palette"
          src="/images/pizza-palette.png"
          stack={[
            { element: <FaReact />, tooltip: "React" },
            { element: <RiTailwindCssFill />, tooltip: "Tailwind" },
            { element: <SiVite />, tooltip: "Vite" },
            { element: <SiReactrouter />, tooltip: "React Router" },
            { element: <FaJava />, tooltip: "Java" },
            { element: <SiSpring />, tooltip: "Spring" },
          ]}
        >
          <Link
            fontSize="sm"
            href="https://github.com/saraferreira10/pizza-palette-back"
          >
            Back End
          </Link>
          <Link
            fontSize="sm"
            href="https://github.com/saraferreira10/pizza-palette-react-query"
          >
            Front End
          </Link>
          <Link
            fontSize="sm"
            href="https://www.linkedin.com/posts/saraferreira10_ol%C3%A1-rede-durante-os-%C3%BAltimos-dias-activity-7183902508145115137-a0EV?utm_source=share&utm_medium=member_desktop"
          >
            Post Linkedin
          </Link>
        </CardProject>

        <CardProject
          title="Filmes Thymeleaf"
          src="/images/filmes-thymeleaf.png"
          stack={[
            { element: <FaJava />, tooltip: "Java" },
            { element: <DiJavascript />, tooltip: "Javascript" },
            { element: <SiSpring />, tooltip: "Spring" },
            { element: <SiThymeleaf />, tooltip: "Thymeleaf" },
            { element: <FaBootstrap />, tooltip: "Bootstrap" },
            { element: <SiJquery />, tooltip: "JQuery" },
            { element: <DiMysql />, tooltip: "MySQL" },
          ]}
        >
          <Link
            fontSize="sm"
            href="https://github.com/saraferreira10/filmes-thymeleaf"
          >
            Repositório
          </Link>

          <Link
            fontSize="sm"
            href="https://www.linkedin.com/posts/saraferreira10_java-springframework-mysql-activity-7156322339608047616-oTf2?utm_source=share&utm_medium=member_desktop"
          >
            Post Linkedin
          </Link>
        </CardProject>

        <CardProject
          title="Compasscar - API de aluguel de carros"
          src="/images/api-nodejs.png"
          stack={[
            { element: <DiJavascript />, tooltip: "Javascript" },
            { element: <FaNodeJs />, tooltip: "NodeJS" },
            { element: <SiExpress />, tooltip: "Express" },
            { element: <DiMysql />, tooltip: "MySQL" },
          ]}
        >
          <Link
            fontSize="sm"
            href="https://github.com/saraferreira10/compasscar"
          >
            Repositório
          </Link>
        </CardProject>

        <CardProject
          title="Portfólio"
          src="/images/portfolio.png"
          stack={[
            { element: <FaReact />, tooltip: "React" },
            { element: <RiNextjsFill />, tooltip: "NextJS" },
            { element: <SiTypescript />, tooltip: "Typescript" },
            { element: <SiChakraui />, tooltip: "ChakraUI" },
          ]}
        >
          <Link
            fontSize="sm"
            href="https://github.com/saraferreira10/compasscar"
          >
            Repositório
          </Link>
        </CardProject>
      </Flex>
      <Link marginTop="2rem" href="https://github.com/saraferreira10">
        <FaGithub /> All my projects
      </Link>
    </ContainerSection>
  );
}
