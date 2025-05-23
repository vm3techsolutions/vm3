import Counter from "./Counter";
import GetToKnow from "./GetToKnow";
import OurStoryBanner from "./OurStoryBanner";
import OurVision from "./OurVision";
import WHTChoose from "./WHTChoose";


export default function Home() {
  return (
   <div>
   <OurStoryBanner/>
   <GetToKnow/>
   <OurVision/>
   <Counter/>
   <WHTChoose/>
   </div>  );
}
