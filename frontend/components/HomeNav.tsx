import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";

const LandingNav = () => {
  return (
    <nav className="flex md:mt-2 justify-between h-20 items-center w-screen">
      <div className="font-bold text-xl md:text-2xl mx-1 md:mx-4 hover:text-slate-200 duration-200 cursor-pointer">
        The Sky
      </div>
      <div className="flex justify-end items-center gap-3">
        <ThemeToggle className="" />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default LandingNav;
