import Banner from "@/components/home/Banner";
import Cta from "@/components/home/Cta";
import CustomerReview from "@/components/home/CustomerReview";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import Trending from "@/components/home/Trending";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Trending />
      <Stats />
      <CustomerReview />
      <Faq />
      <Cta />
    </div>
  );
};

export default HomePage;
