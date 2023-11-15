import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { useRouter } from "next/router";

const LandingNav = () => {
  const router = useRouter();

  const handleclick = () => {
    if (router.pathname === "/") {
      router.push("/favorites");
    } else if (router.pathname === "/favorites") {
      router.push("/");
    }
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <nav className="flex md:mt-2 justify-between h-20 items-center w-screen">
      <div
        onClick={handleLogoClick}
        className="font-bold text-xl md:text-2xl mx-1 md:mx-4 hover:text-slate-200 duration-200 cursor-pointer"
      >
        The Sky
      </div>
      <div className="flex justify-end items-center gap-3">
        <span className="mr-6 md:mr-8 sm:mr-6 lg:mr-10">
          <Button variant="outline" onClick={handleclick}>
            {router.pathname === "/" ? "Favorites" : "Home"}
          </Button>
        </span>
        <ThemeToggle className="" />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default LandingNav;
