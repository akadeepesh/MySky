import { ThemeToggle } from "./ThemeToggle";
import { useUser } from "@clerk/nextjs";

const LandingNav = () => {
  const { user } = useUser();

  return (
    <nav className="flex md:mb-2 justify-center h-20 items-center w-screen">
      <div className="font-bold text-base md:text-lg hover:text-slate-200 duration-200">
        <u>Thank you so much {user?.firstName}, For reading this far.</u>
      </div>
    </nav>
  );
};

export default LandingNav;
