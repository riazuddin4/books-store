import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import ReviewSection from "@/components/ReviewSection";
import TopGenerations from "@/components/TopGenerations";
import Silders from "@/components/Silders";




export default function Home() {
  return (
    <div >
      <Banner/>
      <Silders/>
      <TopGenerations/>
      <ReviewSection/>
      <Contact />
   
    </div>
  );
}
