import { Grid, HStack, Link, Text } from "@chakra-ui/react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import { Tooltip } from "@/components/ui/tooltip";
import {
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript, IoSchool } from "react-icons/io5";
import { DiJqueryLogo, DiMysql } from "react-icons/di";
import {
  SiExpress,
  SiSpring,
  SiThymeleaf,
  SiTypeorm,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { GiAchievement } from "react-icons/gi";
import { MdWork } from "react-icons/md";

export default function MyTimeline() {
    return (
      <TimelineRoot>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={4}
          marginX="2rem"
        >
          <TimelineItem>
            <TimelineConnector>
              <IoSchool />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>
                Curso Técnico em Desenvolvimento de Sistemas - Senac
              </TimelineTitle>
              <TimelineDescription>
                Março de 2022 - Fevereiro de 2024
              </TimelineDescription>
              <HStack textStyle="sm">
                <Tooltip content="Java">
                  <FaJava />
                </Tooltip>
                <Tooltip content="Javascript">
                  <IoLogoJavascript />
                </Tooltip>
                <Tooltip content="Jquery">
                  <DiJqueryLogo />
                </Tooltip>
                <Tooltip content="Spring">
                  <SiSpring />
                </Tooltip>
                <Tooltip content="Bootstrap">
                  <FaBootstrap />
                </Tooltip>
                <Tooltip content="Mysql">
                  <DiMysql />
                </Tooltip>
                <Tooltip content="HTML">
                  <FaHtml5 />
                </Tooltip>
                <Tooltip content="CSS">
                  <FaCss3Alt />
                </Tooltip>
                <Tooltip content="Figma">
                  <FiFigma />
                </Tooltip>
                <Tooltip content="Thymeleaf">
                  <SiThymeleaf />
                </Tooltip>
              </HStack>
            </TimelineContent>
          </TimelineItem>
  
          <TimelineItem>
            <TimelineConnector>
              <IoSchool />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle textStyle="sm">
                Graduação em Análise e Desenvolvimento de Sistemas - Centro
                Universitário Senac
              </TimelineTitle>
              <TimelineDescription>
                Abril de 2024 - Atualmente (cursando)
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
  
          <TimelineItem>
            <TimelineConnector>
              <MdWork />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle textStyle="sm">
                Estágio em Desenvolvimento Back End - CompassUOL
              </TimelineTitle>
              <TimelineDescription>
                Agosto de 2024 - Janeiro de 2025
              </TimelineDescription>
              <HStack textStyle="sm">
                <Tooltip content="Javascript">
                  <IoLogoJavascript />
                </Tooltip>
                <Tooltip content="Typescript">
                  <SiTypescript />
                </Tooltip>
                <Tooltip content="NodeJS">
                  <FaNodeJs />
                </Tooltip>
                <Tooltip content="Express">
                  <SiExpress />
                </Tooltip>
                <Tooltip content="Github">
                  <FaGithub />
                </Tooltip>
                <Tooltip content="Git">
                  <FaGitAlt />
                </Tooltip>
                <Tooltip content="Typeorm">
                  <SiTypeorm />
                </Tooltip>
                <Tooltip content="Zod">
                  <SiZod />
                </Tooltip>
                <Tooltip content="Mysql">
                  <DiMysql />
                </Tooltip>
                <Tooltip content="AWS">
                  <FaAws />
                </Tooltip>
              </HStack>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector>
              <GiAchievement />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>AWS Certified Cloud Practitioner</TimelineTitle>
              <TimelineDescription>
                Setembro de 2024 - Setembro de 2027
              </TimelineDescription>
              <Text>
                <Link
                  variant="underline"
                  href="https://www.credly.com/badges/fbbe9393-66ae-42e1-8530-a0abd64d68f8"
                  fontSize="x-small"
                >
                  View my badge
                </Link>
              </Text>
            </TimelineContent>
          </TimelineItem>
  
          <TimelineItem>
            <TimelineConnector>
              <GiAchievement />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>AWS Certified Developer Associate</TimelineTitle>
              <TimelineDescription>
                Janeiro de 2025 - Janeiro de 2028
              </TimelineDescription>
              <Text>
                <Link
                  variant="underline"
                  href="https://www.credly.com/badges/352f4cad-0864-44fe-a4f1-1e11be9f9ea1"
                  fontSize="x-small"
                >
                  View my badge
                </Link>
              </Text>
            </TimelineContent>
          </TimelineItem>
        </Grid>
      </TimelineRoot>
    );
  }
  