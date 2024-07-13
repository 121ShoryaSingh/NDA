import HeroBanner from "@/components/HeroBanner";
import FeaturePanal from "@/components/FeaturePanal";
import CommentPanal from "@/components/CommentPanal";
import PricePanal from "@/components/PricePanal";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="bg-offwhite">
        <HeroBanner/>
      </div>
      <div className="bg-white w-full">
        <FeaturePanal/>
      </div>
      <div className="bg-white w-full">
        <CommentPanal/>
      </div>
      <div className="bg-offwhite w-full">
        <PricePanal/>
      </div>
      <div className="w-full">
       <Footer/>
      </div>
    </div>
  );
}
