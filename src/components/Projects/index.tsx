import { Flex, Text, Table, Image, Progress } from "@chakra-ui/react";
import { EllipsisVertical } from "lucide-react";
import type { FC } from "react";
import Avatar1 from "../../assets/avatars/Avatar1.svg";
import Avatar2 from "../../assets/avatars/Avatar2.svg";
import Avatar3 from "../../assets/avatars/Avatar3.svg";
import Avatar4 from "../../assets/avatars/Avatar4.svg";
import Avatar5 from "../../assets/avatars/Avatar5.svg";
import Spotify from "../../assets/companies/spotify.svg";
import Stremio from "../../assets/companies/stremio.svg";
import ALT from "../../assets/companies/alt.svg";
import IN from "../../assets/companies/in.svg";
import Slack from "../../assets/companies/slack.svg";
import XD from "../../assets/companies/xd.svg";

type projectProps = {
  isTablePage?: Boolean;
};

type Company = {
  name: string;
  icon: string;
};

interface Project {
  company: Company;
  members: string[];
  budget: string;
  completion: number;
}
const Projects: Project[] = [
  {
    company: {
      name: "Spotify",
      icon: Spotify,
    },
    members: [Avatar1, Avatar4, Avatar5],
    budget: "$24,000",
    completion: 75,
  },
  {
    company: {
      name: "Stremio",
      icon: Stremio,
    },
    members: [Avatar2],
    budget: "$18,500",
    completion: 60,
  },
  {
    company: {
      name: "ALT",
      icon: ALT,
    },
    members: [Avatar5, Avatar2, Avatar4],
    budget: "$32,750",
    completion: 85,
  },
  {
    company: {
      name: "IN",
      icon: IN,
    },
    members: [Avatar4, Avatar1, Avatar5],
    budget: "$15,200",
    completion: 40,
  },
  {
    company: {
      name: "Slack",
      icon: Slack,
    },
    members: [Avatar4, Avatar2, Avatar3],
    budget: "$42,900",
    completion: 95,
  },
];

const ProjectsTable: FC<projectProps> = ({ isTablePage }) => {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      rounded={"lg"}
      bgColor={"white"}
      padding={"1rem"}
      direction={"column"}
      gap=".75rem"
    >
      <Flex direction={"column"}>
        <Text color="black" fontWeight={"bold"} fontSize={"1rem"}>
          Active User
        </Text>
        <Text fontSize=".75rem" color="gray">
          <Text as="span" color="green" fontWeight={"bold"}>
            (+23) more{" "}
          </Text>{" "}
          since last week
        </Text>
      </Flex>
      <Table.Root size={"sm"}>
        <Table.Header>
          <Table.Row bgColor="transparent">
            <Table.ColumnHeader
              borderBottomWidth="1px"
              borderColor="gray.200"
              fontWeight="bold"
              color="gray"
            >
              Companies
            </Table.ColumnHeader>
            <Table.ColumnHeader
              borderBottomWidth="1px"
              borderColor="gray.200"
              fontWeight="bold"
              color="gray"
            >
              Member
            </Table.ColumnHeader>
            <Table.ColumnHeader
              borderBottomWidth="1px"
              borderColor="gray.200"
              fontWeight="bold"
              color="gray"
            >
              Budget
            </Table.ColumnHeader>
            <Table.ColumnHeader
              borderBottomWidth="1px"
              borderColor="gray.200"
              fontWeight="bold"
              color="gray"
            >
              Completion
            </Table.ColumnHeader>
            {isTablePage && (
              <Table.ColumnHeader
                borderBottomWidth="1px"
                borderColor="gray.200"
                fontWeight="bold"
                color="gray"
              ></Table.ColumnHeader>
            )}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Projects.map((project) => (
            <Table.Row bgColor="transparent">
              <Table.Cell borderBottomWidth="1px" borderColor="gray.200">
                <Flex gap=".5rem">
                  <Image src={project.company.icon}></Image>{" "}
                  <Text fontWeight={"bold"} color={"black"}>
                    {project.company.name}
                  </Text>
                </Flex>
              </Table.Cell>
              <Table.Cell borderBottomWidth="1px" borderColor="gray.200">
                <Flex alignItems={"center"}>
                  {project.members.map((member, index) => (
                    <Image
                      key={index}
                      src={member}
                      alt={`Member ${index + 1}`}
                      ml={index === 0 ? "0" : "-.75rem"}
                    />
                  ))}
                </Flex>
              </Table.Cell>
              <Table.Cell
                borderBottomWidth="1px"
                borderColor="gray.200"
                fontWeight={"bold"}
                color={"black"}
              >
                {project.budget}
              </Table.Cell>
              <Table.Cell borderBottomWidth="1px" borderColor="gray.200">
                <Flex direction={"column"}>
                  <Text fontWeight={"bold"} color={"teal.400"}>
                    {project.completion}%
                  </Text>
                  <Progress.Root
                    size="xs"
                    value={project.completion}
                    width={"70%"}
                  >
                    <Progress.Track bg="lightgray">
                      <Progress.Range bg="teal.400" />
                    </Progress.Track>
                  </Progress.Root>
                </Flex>
              </Table.Cell>
              {isTablePage && (
                <Table.Cell borderBottomWidth="1px" borderColor="gray.200">
                  <EllipsisVertical color={"lightgray"}></EllipsisVertical>
                </Table.Cell>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};

export default ProjectsTable;
