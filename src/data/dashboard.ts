import wallet from "../assets/dashboardicons/dashboardstats/wallet.svg";
import cart from "../assets/dashboardicons/dashboardstats/cart.svg";
import document from "../assets/dashboardicons/dashboardstats/document.svg";
import globe from "../assets/dashboardicons/dashboardstats/globe.svg";
import rocket from "../assets/userChart/rocket.svg";
import wrench from "../assets/userChart/wrench.svg";
import userWallet from "../assets/userChart/wallet.svg";
import userCart from "../assets/userChart/cart.svg";
import {useRef} from "react"



interface stat {
  id: number;
  text: string;
  value: number;
  percentage: string;
  icon: string;
  color: string;
}

export const stats: stat[] = [
    {
      id: 1,
      text: "Today's Money",
      value: 50000,
      percentage: "5%",
      icon: wallet,
      color: "white",
    },
    {
      id: 2,
      text: "Today's User",
      value: 24000,
      percentage: "10%",
      icon: cart,
      color: "white",
    },
    {
      id: 3,
      text: "New Clients",
      value: 5,
      percentage: "15%",
      icon: document,
      color: "white",
    },
    {
      id: 4,
      text: "Total Sales",
      value: 2403,
      percentage: "2%",
      icon: globe,
      color: "white",
    },
  ];
  export const previousStats: stat[] =[
    {
      id: 1,
      text: "Today's Money",
      value: 30000,
      percentage: "5%",
      icon: wallet,
      color: "white",
    },
    {
      id: 2,
      text: "Today's User",
      value: 260000,
      percentage: "10%",
      icon: cart,
      color: "white",
    },
    {
      id: 3,
      text: "New Clients",
      value: 15,
      percentage: "15%",
      icon: document,
      color: "white",
    },
    {
      id: 4,
      text: "Total Sales",
      value: 200,
      percentage: "2%",
      icon: globe,
      color: "white",
    },
  ];

  export const userChartData = [
    {
      title: "User",
      img: userWallet,
      value: "32,294",
    },
    {
      title: "Sales",
      img: rocket,
      value: "32,294$",
    },
    {
      title: "Clicks",
      img: userCart,
      value: "32m",
    },
    {
      title: "Items",
      img: wrench,
      value: "320",
    },
  ];