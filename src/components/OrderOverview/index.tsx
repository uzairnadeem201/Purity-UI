import { Timeline, Image, Flex } from "@chakra-ui/react";
import bell from "../../assets/timeline/bell.svg";
import html from "../../assets/timeline/html.svg";
import card from "../../assets/timeline/card.svg";
import box from "../../assets/timeline/box.svg";
import cart from "../../assets/timeline/cart.svg";
import xd from "../../assets/timeline/xd.svg";

interface Order {
  title: string;
  date: string;
  icon: string;
}

const OrderOverview = () => {
  const orders: Order[] = [
    { title: "$2400, Design changes", date: "22 DEC 7:20 PM", icon: bell },
    { title: "New order #4219423", date: "22 DEC 7:20 PM", icon: html },
    { title: "Server Payments for April", date: "22 DEC 7:20 PM", icon: cart },
    {
      title: "New card added for order #3210145",
      date: "22 DEC 7:20 PM",
      icon: card,
    },
    {
      title: "Unlock packages for Development",
      date: "22 DEC 7:20 PM",
      icon: box,
    },
    { title: "New order #9851258", date: "22 DEC 7:20 PM", icon: xd },
  ];

  return (
    <Timeline.Root
      gap="0"
      padding="0"
      width="100%"
      display="flex"
      flexDirection="column"
    >
      {orders.map((order, idx) => (
        <Timeline.Item key={idx}>
          <Flex direction="column" align="center">
            <Timeline.Connector>
              <Image src={order.icon} alt="icon" boxSize="24px" />
              <div
                style={{
                  width: "2px",
                  height: "1rem",
                  backgroundColor: "lightgray",
                  margin: "2px auto",
                  borderRadius: "4px",
                }}
              ></div>
            </Timeline.Connector>
          </Flex>

          <Timeline.Content padding={"0"} gap="0">
            <Timeline.Title
              fontSize=".75rem"
              fontWeight="semibold"
              color="black"
            >
              {order.title}
            </Timeline.Title>
            <Timeline.Description fontSize=".5rem">
              {order.date}
            </Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline.Root>
  );
};

export default OrderOverview;
