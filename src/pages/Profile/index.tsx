import {Box} from "@chakra-ui/react"
import ProfileProjects from "@/components/ProfileProjects";
import ProfileBanner from "@/components/ProfileBanner";
import ProfileCards from "@/components/ProfileCards";
const Profile = () => {
  
  return (
    <Box width={"100%"} height={"100vh"}>
      <ProfileBanner/>
      <ProfileCards/>
      <ProfileProjects/>
    </Box>
  );
};

export default Profile;
