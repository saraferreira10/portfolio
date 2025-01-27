"use client";

import "./globals.css";
import AboutSection from "@/components/custom/about-section";
import ContactSection from "@/components/custom/contact-section";
import FixedMenu from "@/components/custom/fixed-menu";
import KnowledgeSection from "@/components/custom/knowledge-section";
import MainSection from "@/components/custom/main-section";
import MyJourneySection from "@/components/custom/my-journey-section";
import ProjectSection from "@/components/custom/projects-section";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import ScrollSpy from "react-ui-scrollspy";

export default function Page() {
  return (
    <ScrollSpy>
      <MainSection />
      <AboutSection />
      <MyJourneySection />
      <KnowledgeSection />
      <ProjectSection />
      <ContactSection />
      <FixedMenu />
      <Text textAlign="center" paddingBottom=".5rem" paddingTop="7rem">
        Made with ❤️ by{" "}
        <Link
          href="https://www.linkedin.com/in/saraferreira10/"
          style={{ textDecoration: "underline", color: "#FB5AF7" }}
        >
          Sara Ferreira
        </Link>
      </Text>
    </ScrollSpy>
  );
}
