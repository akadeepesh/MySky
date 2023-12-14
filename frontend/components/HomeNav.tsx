import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const LandingNav = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = `${totalScroll / windowHeight}`;

    setScroll(Number(scrollPercent));
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className="flex">
    <nav className="flex md:mt-2 justify-between h-20 items-center w-screen">
      <div
        onClick={handleLogoClick}
        className="font-bold text-xl md:text-2xl mx-1 md:mx-4 hover:text-slate-200 duration-200 cursor-pointer"
      >
        The Sky
      </div>
      <div className="flex justify-end items-center gap-3">
        <ThemeToggle className="" />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
    //  <Progress className="h-2" value={33} />
    // </div>
  );
};

export default LandingNav;
