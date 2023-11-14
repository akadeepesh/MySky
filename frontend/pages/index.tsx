import HomeNav from "@/components/HomeNav";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Head from "next/head";
const HomePage = () => {
  return (
    <div className="">
      <Head>
        <title>The Sky</title>
      </Head>
      <div className="flex justify-center items-center border-b border-gray-600 mx-2">
        <HomeNav />
      </div>
      <Home />
      <div className="flex justify-center items-center border-t border-gray-600 mx-2">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
