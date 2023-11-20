import { useUser } from "@clerk/nextjs";

const LandingNav = () => {
  const { user } = useUser();

  return (
    <nav className="flex md:mb-2 justify-center h-20 items-center w-screen">
      <div className="font-bold text-base md:text-lg hover:text-slate-200 duration-200">
        Thank you so much {user?.firstName?.toLocaleLowerCase()}, for reading
        this far.
        <i className="flex text-sm justify-center">
          <br /> Hope you liked it
        </i>
      </div>
    </nav>
  );
};

export default LandingNav;
