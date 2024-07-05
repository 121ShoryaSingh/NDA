import {HeroBanner} from "@/components/HeroBanner";
import FeaturePanal from "@/components/FeaturePanal";
import CommentPanal from "@/components/CommentPanal";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="bg-offwhite">
        <HeroBanner/>
      </div>
      <div className="bg-white w-full h-[80%]">
        <FeaturePanal/>
      </div>
      <div className="bg-white w-full h-[80%]">
        <CommentPanal/>
      </div>
    </div>
  );
}
