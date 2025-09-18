import {Flex,Text,Table,Image,Box,Button} from "@chakra-ui/react"
import author1 from "../../assets/authors/author1.svg"
import author2 from "../../assets/authors/author2.svg"
import author3 from "../../assets/authors/author3.svg"
import author4 from "../../assets/authors/author4.svg"
import author5 from "../../assets/authors/author5.svg"
import author6 from "../../assets/authors/author6.svg"

interface Author {
  author: {
    name: string;
    email: string;
    icon: string;
  };
  function: {
    designation: string;
    skill: string;
  };
  status: string;
  date: string;
}

const authors: Author[] = [
  {
    author: {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      icon: author1,
    },
    function: {
      designation: "Frontend Developer",
      skill: "React.js",
    },
    status: "Online",
    date: "23/09/2025",
  },
  {
    author: {
      name: "Michael Smith",
      email: "michael.smith@example.com",
      icon: author2,
    },
    function: {
      designation: "Backend Developer",
      skill: "Node.js",
    },
    status: "Offline",
    date: "20/09/2025",
  },
  {
    author: {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      icon: author3,
    },
    function: {
      designation: "UI/UX Designer",
      skill: "Figma",
    },
    status: "Online",
    date: "18/09/2025",
  },
  {
    author: {
      name: "James Wilson",
      email: "james.wilson@example.com",
      icon: author4,
    },
    function: {
      designation: "Project Manager",
      skill: "Agile",
    },
    status: "Offline",
    date: "15/09/2025",
  },
  {
    author: {
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      icon: author5,
    },
    function: {
      designation: "Data Analyst",
      skill: "Python",
    },
    status: "Online",
    date: "10/09/2025",
  },
  {
    author: {
      name: "William Brown",
      email: "william.brown@example.com",
      icon: author6,
    },
    function: {
      designation: "DevOps Engineer",
      skill: "AWS",
    },
    status: "Offline",
    date: "05/09/2025",
  },
];
const AuthorsTable = () => {
  return (
    <Flex width={"100%"} height={"100%"} padding={"1rem"} backgroundColor={"white"} direction={"column"} overflow={"auto"} rounded={"lg"}>
        <Text fontWeight={"bold"} fontSize="1rem" color="black">
            Authors Table
        </Text>
        <Table.Root size={"sm"} height={"100%"} >
                <Table.Header>
                  <Table.Row bgColor="transparent">
                    <Table.ColumnHeader borderBottomWidth="1px" borderColor="gray.200" fontWeight="bold" color="gray">
                      Author
                    </Table.ColumnHeader>
                    <Table.ColumnHeader borderBottomWidth="1px" borderColor="gray.200" fontWeight="bold" color="gray">
                      Function
                    </Table.ColumnHeader>
                    <Table.ColumnHeader borderBottomWidth="1px" borderColor="gray.200" fontWeight="bold" color="gray">
                      Status
                    </Table.ColumnHeader>
                    <Table.ColumnHeader borderBottomWidth="1px" borderColor="gray.200" fontWeight="bold" color="gray">
                      Employed
                    </Table.ColumnHeader>
                    <Table.ColumnHeader borderBottomWidth="1px" borderColor="gray.200" fontWeight="bold" color="gray">
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {authors.map((author) => (
                    <Table.Row
                      bgColor="transparent"
                    >
                      <Table.Cell borderBottomWidth="1px" borderColor="gray.200" >
                        <Flex alignItems={"center"}>
                            <Image src={author.author.icon}></Image>
                            <Flex direction={"column"}>
                                <Text color="black">
                                    {author.author.name}
                                </Text>
                                <Text color="gray">
                                    {author.author.email}
                                </Text>
                            </Flex>
                        </Flex>
                      </Table.Cell>
                      <Table.Cell borderBottomWidth="1px" borderColor="gray.200">
                        <Flex direction={"column"} justifyContent={"center"}>
                            <Text color={"black"} fontWeight={"bold"}>
                                {author.function.designation}
                            </Text>
                            <Text color="gray">
                                {author.function.skill}
                            </Text>
                        </Flex>
                      </Table.Cell >
                      <Table.Cell borderBottomWidth="1px" borderColor="gray.200" fontWeight={"bold"} color={"black"}>
                        <Flex width="50%" padding=".15rem"borderRadius={".75rem"} bgColor={author.status.toLowerCase()=== "online"?"green.400":"gray"} alignItems={"center"} justifyContent={"center"}>
                            <Text color="white">
                                {author.status}
                            </Text>
                        </Flex>
                      </Table.Cell>
                      <Table.Cell borderBottomWidth="1px" borderColor="gray.200">
                        <Text color="black">
                            {author.date}
                        </Text>
                      </Table.Cell>
                      <Table.Cell borderColor={"gray.200"}>
                        <Button variant="plain" color="gray.400" fontWeight={"bold"} >
                            Edit
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
    </Flex>
  )
}

export default AuthorsTable