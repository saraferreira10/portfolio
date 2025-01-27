import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { FaCode, FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdTimeline } from "react-icons/md";
import { RiBookFill, RiHome5Fill } from "react-icons/ri";
import CustomLink from "./custom-link";
import { useColorModeValue } from "../ui/color-mode";

export default function FixedMenu() {
  const [activeSection, setActiveSection] = useState<string>("/");
  const bg = useColorModeValue("#BFB1B1", "#443E3E");
  const color = useColorModeValue("#635B5B", "#D9D9D9");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      bgColor={bg}
      rounded="full"
      paddingY="5px"
      paddingX="40px"
      marginBottom="2rem"
      position="fixed"
      gap="10px"
      textAlign="center"
      width="fit-content"
      bottom={0}
      left="50%"
      transform="translateX(-50%)"
    >
      <CustomLink href="/" isActive={activeSection === "/"}>
        <RiHome5Fill color={activeSection === "/" ? "white" : color} />
      </CustomLink>

      <CustomLink href="#about" isActive={activeSection === "about"}>
        <FaUser color={activeSection === "about" ? "white" : color} />
      </CustomLink>

      <CustomLink href="#my-journey" isActive={activeSection === "my-journey"}>
        <MdTimeline color={activeSection === "my-journey" ? "white" : color} />
      </CustomLink>

      <CustomLink href="#knowledge" isActive={activeSection === "knowledge"}>
        <RiBookFill color={activeSection === "knowledge" ? "white" : color} />
      </CustomLink>

      <CustomLink href="#projects" isActive={activeSection === "projects"}>
        <FaCode color={activeSection === "projects" ? "white" : color} />
      </CustomLink>

      <CustomLink href="#contact" isActive={activeSection === "contact"}>
        <IoMail color={activeSection === "contact" ? "white" : color} />
      </CustomLink>
    </Flex>
  );
}
