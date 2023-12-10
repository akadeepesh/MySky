import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

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
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/favorites/${user?.id}/${id}/`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
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
              <p>Remove From Favourites</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

const Favorites: React.FC = () => {
  const { user } = useUser();
  const [cards, setCards] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/favorites/?user_id=${user?.id}`
        );
        setCards(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, [user?.id]);

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

export default Favorites;
