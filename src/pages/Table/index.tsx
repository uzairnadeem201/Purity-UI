import {Flex,Box} from "@chakra-ui/react"
import AuthorsTable from "@/components/AuthorsTable"
import ProjectsTable from "@/components/Projects"

const Table = () => {
  return (
   <Flex direction={"column"} width={"100%"} height={"100vh"} gap="1rem">
    <Box height={"45vh"}>
      <AuthorsTable />
    </Box>
    <Box height={"45vh"}>
      <ProjectsTable isTablePage={true}/>
    </Box>

   </Flex>
  )
}

export default Table