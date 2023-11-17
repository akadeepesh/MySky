import axios from "axios";
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
  const [isStarred, setIsStarred] = useState(is_fav);
  const handleStarClick = async () => {
    setIsStarred(!isStarred);
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}+${id}/`,
        {
          is_fav: false,
        }
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
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}`
        );
        setCards(response.data.filter((card: CardProps) => card.is_fav));
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="flex my-20 flex-wrap flex-row gap-20 items-center mx-10 lg:mx-60 md:mx-40 sm:mx-20">
      {cards.map((card) => (
        <CardComponent key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Favorites;
