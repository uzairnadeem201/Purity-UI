import buttonIcon from "../assets/profile/profilebuttons/Icon.svg"
import buttonIcon2 from "../assets/profile/profilebuttons/Icon3.svg"
import buttonIcon3 from "../assets/profile/profilebuttons/Icon2.svg"
import avatar from "../assets/profile/conversationavatars/Image.svg"
import avatar2 from "../assets/profile/conversationavatars/Image1.svg"
import avatar1 from "../assets/profile/conversationavatars/Image2.svg"
import avatar3 from "../assets/profile/conversationavatars/Image3.svg"
import projectImage from "../assets/profile/projectimg.svg"


export const buttons = [{
    text: "OVERVIEW",
    icon:buttonIcon
 },
{
    text: "TEAMS",
    icon:buttonIcon2
 },
{
    text: "PROJECTS",
    icon:buttonIcon3
 },]

 export const platformSettings=[{
    Text:"Account",
    Account:["Email me when someone follows me","Email me when someone answers on my post","Email me when someone mentions me"]
 },
 {
    Text:"Application",
    Account:["New launches and projects","Monthly product updates","Subscribe to newsletter"]
 },
]

export const user =[
    {
        fullName: "Alec.M Thompson",
        mobile: "(44) 123 1234 123",
        email: "alecthompson@gmail.com",
        location:"america"

    }
]

export const conversations = [{
    icon: avatar3,
    username: "Alina Rai",
    text:"Hi! I need more information...",
},
{
    icon: avatar1,
    username: "Sophie Dee",
    text:"Hi! I need more information...",
},
{
    icon: avatar2,
    username: "Esthera Jackson",
    text:"Hi! I need more information...",
},
{
    icon: avatar,
    username: "Robert Ali",
    text:"Hi! I need more information...",
},]

export const profileProjects=[
    {
        no: "Project #1",
        name: "Moderm",
        description:"a project which handles the uber",
        image: projectImage
    },
    {
        no: "Project #2",
        name: "Beta",
        description:"a project which handles the uber",
        image: projectImage
    },
    {
        no: "Project #3",
        name: "Alpha",
        description:"a project which handles the uber",
        image: projectImage
    },
    {
        no: "Project #4",
        name: "Purity",
        description:"a project which handles the uber",
        image: projectImage
    },
]