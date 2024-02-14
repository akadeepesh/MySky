import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

interface CardProps {
  id: number;
  title: string;
  description: string;
  content: string;
}

const CardComponent: React.FC<CardProps> = ({
  id,
  title,
  description,
  content,
}) => {
  return (
    <Card className="w-screen">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </CardContent>
      <CardFooter className="justify-between">
        <p>
          <i>~Deepesh</i>
        </p>
      </CardFooter>
    </Card>
  );
};

const Home: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}`
        );
        setCards(response.data.reverse());
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <div
      className={`flex my-20 flex-wrap flex-row gap-20 ${
        error ? "justify-center" : ""
      } items-center mx-10 lg:mx-60 md:mx-40 sm:mx-20`}
    >
      {isLoading ? (
        <>
          <Skeleton className="w-screen h-80" />
          <Skeleton className="w-screen h-80" />
        </>
      ) : error ? (
        <div className="bg-muted-foreground rounded-lg">
          <div className="text-bold m-2">
            Please have patience. The database has expired. We apologize for the
            inconvenience.
          </div>
        </div>
      ) : (
        cards.map((card) => <CardComponent key={card.id} {...card} />)
      )}
    </div>
  );
};

export default Home;
