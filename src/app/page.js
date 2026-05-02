import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import ReviewSection from "@/components/ReviewSection";
import TopGenerations from "@/components/TopGenerations";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner/>

      <TopGenerations/>
      <ReviewSection/>
      <Contact />
   
    </div>
  );
}
