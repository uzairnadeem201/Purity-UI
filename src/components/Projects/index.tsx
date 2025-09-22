import { Flex, Text, Table, Image, Progress } from "@chakra-ui/react";
import { EllipsisVertical } from "lucide-react";
import type { FC } from "react";
import { Projects } from "@/data/table";

type projectProps = {
  isTablePage?: Boolean;
};

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
