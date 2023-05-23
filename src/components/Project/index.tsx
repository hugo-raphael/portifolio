import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
  CardLinksProjects,
  ImageCardLinksProjects,
  DivLinksProjectRender,
  DivCardsLinksProjectRender,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

import imagemKenzieHub from "../../public/static/img/logo/imagemKenzieHub.png"
import imagemBurgerKenzie from "../../public/static/img/logo/imagemBurgerKenzie.png"

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json = await data.json();

      setRepositories(json);

      return json;
    };

    fetchData();
  }, []);

  return (
    <>
      {repositories &&
        repositories?.map?.((repository) => (
          <ProjectWrapper key={repository.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {repository.name}
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Primary Language:
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    Primary language not identified
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href={repository.html_url}>
                <FaGithub /> Github Code
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink
                  target="_blank"
                  href={`https://${repository.homepage}`}
                >
                  <FaShare /> See demo
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
        <DivLinksProjectRender>
          <Text as="h2" type="heading3" color="grey5">Links to my projects in Vercel</Text>
          <DivCardsLinksProjectRender>
            <CardLinksProjects>
            <ImageCardLinksProjects src={imagemKenzieHub} alt="foto da KenzieHub" />
              <Text as="p" color={"grey5"}>Kenzie Hub</Text>
              <Text as="a" color={"brand1"} target="_blank"
                  href={"https://kenzie-hub-hugo-raphael.vercel.app/"}>https://kenzie-hub-hugo-raphael.vercel.app</Text>
            </CardLinksProjects>

            <CardLinksProjects>
              <ImageCardLinksProjects src={imagemBurgerKenzie} alt="foto da KenzieHub" />
              <Text as="p" color={"grey5"}>Burger Kenzie</Text>
              <Text as="a" color={"brand1"} target="_blank"
                  href={"https://react-hamburgueria-hugo-raphael.vercel.app"}>https://react-hamburgueria-hugo-raphael.vercel.app</Text>
            </CardLinksProjects>
          </DivCardsLinksProjectRender>
        </DivLinksProjectRender>

    </>
  );
};
