import React from 'react'
import {Flex} from "@chakra-ui/react"
import PlatformSettingCard from '../PlatformSettingCard'
import ProfileInformation from "../ProfileInformation"
import ProfileConversation from '../ProfileConversations'
const ProfileCards = () => {
  return (
    <Flex width={"100%"} height={"fit-content"} marginTop="1rem" justifyContent={"space-between"}>
        <PlatformSettingCard/>
        <ProfileInformation/>
        <ProfileConversation/>
    </Flex>
  )
}

export default ProfileCards