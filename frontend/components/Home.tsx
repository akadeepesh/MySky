import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Star } from "lucide-react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@clerk/nextjs";

interface CardProps {
  id: number;
  title: string;
  description: string;
  content: string;
  is_fav: boolean;
}

const CardComponent: React.FC<CardProps> = ({
  id,
  title,
  description,
  content,
  is_fav,
}) => {
  const { user } = useUser();
  const [isStarred, setIsStarred] = useState(is_fav);

  const handleStarClick = async () => {
    setIsStarred(!isStarred);
    if (!isStarred) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/favorites/`,
          {
            user: user?.id,
            card: id,
            is_fav: !isStarred,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="rounded-sm hover:bg-secondary p-2"
              onClick={handleStarClick}
            >
              <Star
                size={25}
                color={isStarred ? "black" : "white"}
                fill={isStarred ? "white" : ""}
                strokeWidth={1}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{isStarred ? "Remove From" : "Add To"} Favourites</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

const Home: React.FC = () => {
  const { user } = useUser();
  const [cards, setCards] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/cards`
        );
        setCards(response.data.reverse());
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    const createUser = async () => {
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/`, {
          clerk_id: user?.id,
          first_name: user?.firstName,
          last_name: user?.lastName,
          email: user?.emailAddresses[0]?.emailAddress,
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (user) {
      createUser();
    }

    fetchCards();
  }, [user]);

  return (
    <div className="flex my-20 flex-wrap flex-row gap-20 items-center mx-10 lg:mx-60 md:mx-40 sm:mx-20">
      {isLoading ? (
        <>
          <Skeleton className="w-screen h-80" />
          <Skeleton className="w-screen h-80" />
        </>
      ) : (
        cards.map((card) => <CardComponent key={card.id} {...card} />)
      )}
    </div>
  );
};

export default Home;
