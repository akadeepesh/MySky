import HomeNav from "@/components/HomeNav";
import Home from "@/components/Home";
import Head from "next/head";
const HomePage = () => {
  return (
    <div className="">
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex justify-center items-center border-b border-gray-600 mx-2">
        <HomeNav />
      </div>
      <Home />
    </div>
  );
};

export default HomePage;
