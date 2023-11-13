import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

interface CardProps {
  title: string;
  content: string;
  footer: string;
}

const CardComponent: React.FC<CardProps> = ({ title, content, footer }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
    <CardFooter>
      <p>{footer}</p>
    </CardFooter>
  </Card>
);

const Home: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: "Card Title 1",
      content: "Card Content 1",
      footer: "Card Footer 1",
    },
    {
      title: "Card Title 2",
      content: "Card Content 2",
      footer: "Card Footer 2",
    },
  ];

  return (
    <div className="flex my-20 flex-row gap-x-20 items-center mx-60">
      {cards.map((card, index) => (
        <CardComponent key={index} {...card} />
      ))}
    </div>
  );
};

export default Home;
