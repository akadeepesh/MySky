import HomeNav from "@/components/HomeNav";
import Footer from "@/components/Footer";
import Favorites from "@/components/Favorites";
import { useUser } from "@clerk/nextjs";
import Head from "next/head";
const HomePage = () => {
  const { user } = useUser();
  return (
    <div className="">
      <Head>
        <title>{user?.firstName} | Favorites</title>
      </Head>
      <div className="flex justify-center items-center border-b border-gray-600 mx-2">
        <HomeNav />
      </div>
      <Favorites />
    </div>
  );
};

export default HomePage;
