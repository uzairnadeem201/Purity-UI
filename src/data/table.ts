import author1 from "../assets/authors/author1.svg";
import author2 from "../assets/authors/author2.svg";
import author3 from "../assets/authors/author3.svg";
import author4 from "../assets/authors/author4.svg";
import author5 from "../assets/authors/author5.svg";
import author6 from "../assets/authors/author6.svg";
import Avatar1 from "../assets/avatars/Avatar1.svg";
import Avatar2 from "../assets/avatars/Avatar2.svg";
import Avatar3 from "../assets/avatars/Avatar3.svg";
import Avatar4 from "../assets/avatars/Avatar4.svg";
import Avatar5 from "../assets/avatars/Avatar5.svg";
import Spotify from "../assets/companies/spotify.svg";
import Stremio from "../assets/companies/stremio.svg";
import ALT from "../assets/companies/alt.svg";
import IN from "../assets/companies/in.svg";
import Slack from "../assets/companies/slack.svg";


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
export const Projects: Project[] = [
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

export const authors: Author[] = [
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
