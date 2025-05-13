import Deployment from "./Deployment";
import Hosting from "./Hosting";
import HostingBanner from "./HostingBanner";


export default function Home() {
  return (
   <div>
   
   <HostingBanner/>
   <Hosting/>
   <Deployment/>
   </div>  );
}
