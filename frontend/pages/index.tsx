import HomeNav from "@/components/HomeNav";
import Head from "next/head"
const HomePage = () => {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex justify-center items-center border-b border-gray-600 mx-2">
        <HomeNav />
      </div>
    </div>
  );
}

export default HomePage;
