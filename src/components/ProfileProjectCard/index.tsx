import { Flex,Box,Image,Text,Button } from "@chakra-ui/react"
import projectimg from "../../assets/profile/projectimg.svg"
import type {FC} from "react"
interface ProjectProps{
    project:{
        no:string,
        name:string,
        description:string,
        image:string
    }
}
const ProfileProjectCard:FC <ProjectProps> = ({project}) => {
  return (
    <Box width={"23%"} marginTop={"1rem"} height={"100%"}>
        <Box width={"100%"} height={"50%"}>
            <Image width={"100%"} height={"100%"} src={project.image} alt="img"></Image>
        </Box>
        <Flex gap=".5rem" direction={"column"}>
            <Text color="gray" fontSize=".75rem">
            {project.no}
        </Text>
        <Text fontWeight="bold" color="black">{project.name}</Text>
        <Text color="gray" fontSize={".75rem"}>
            {project.description}
        </Text>
        <Button width={"50%"} borderRadius="10px" border="solid 1px" borderColor="teal.400" color="teal.400">
            VIEW ALL
        </Button>
        </Flex>
    </Box>
  )
}

export default ProfileProjectCard