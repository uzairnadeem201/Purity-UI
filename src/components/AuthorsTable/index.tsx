import { Flex, Text, Table, Image, Button } from "@chakra-ui/react";
import { authors } from "../../data/table";
const AuthorsTable = () => {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      padding={"1rem"}
      backgroundColor={"white"}
      direction={"column"}
      overflow={"auto"}
      rounded={"lg"}
    >
      <Text fontWeight={"bold"} fontSize="1rem" color="black">
        Authors Table
      </Text>
      <Table.Root size={"sm"} height={"100%"}>
        <Table.Header>
          <Table.Row bgColor="transparent">
            <Table.ColumnHeader
              borderBottomWidth="1px"
              borderColor="gray.200"
              fontWeight="bold"
              color="gray"
            >
              Author
            </Table.ColumnHeader>
            <Table.ColumnHeader
              borderBottomWidth="1px"
              borderColor="gray.200"
              fontWeight="bold"
              color="gray"
            >
              Function
            </Table.ColumnHeader>
            <Table.ColumnHeader
              borderBottomWidth="1px"
              borderColor="gray.200"
              fontWeight="bold"
              color="gray"
            >
              Status
            </Table.ColumnHeader>
            <Table.ColumnHeader
              borderBottomWidth="1px"
              borderColor="gray.200"
              fontWeight="bold"
              color="gray"
            >
              Employed
            </Table.ColumnHeader>
            <Table.ColumnHeader
              borderBottomWidth="1px"
              borderColor="gray.200"
              fontWeight="bold"
              color="gray"
            ></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {authors.map((author) => (
            <Table.Row bgColor="transparent">
              <Table.Cell borderBottomWidth="1px" borderColor="gray.200">
                <Flex alignItems={"center"}>
                  <Image src={author.author.icon}></Image>
                  <Flex direction={"column"}>
                    <Text color="black">{author.author.name}</Text>
                    <Text color="gray">{author.author.email}</Text>
                  </Flex>
                </Flex>
              </Table.Cell>
              <Table.Cell borderBottomWidth="1px" borderColor="gray.200">
                <Flex direction={"column"} justifyContent={"center"}>
                  <Text color={"black"} fontWeight={"bold"}>
                    {author.function.designation}
                  </Text>
                  <Text color="gray">{author.function.skill}</Text>
                </Flex>
              </Table.Cell>
              <Table.Cell
                borderBottomWidth="1px"
                borderColor="gray.200"
                fontWeight={"bold"}
                color={"black"}
              >
                <Flex
                  width="50%"
                  padding=".15rem"
                  borderRadius={".75rem"}
                  bgColor={
                    author.status.toLowerCase() === "online"
                      ? "green.400"
                      : "gray"
                  }
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text color="white">{author.status}</Text>
                </Flex>
              </Table.Cell>
              <Table.Cell borderBottomWidth="1px" borderColor="gray.200">
                <Text color="black">{author.date}</Text>
              </Table.Cell>
              <Table.Cell borderColor={"gray.200"}>
                <Button variant="plain" color="gray.400" fontWeight={"bold"}>
                  Edit
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};

export default AuthorsTable;
