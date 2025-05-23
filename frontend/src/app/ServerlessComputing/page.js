import Benefits from "./Benefits";
import ServerlessComputing from "./ServerlessComputing";
import ServerlessComputingBanner from "./ServerlessComputingBanner";

export default function Home() {
  return (
   <div>
   <ServerlessComputingBanner/>
   <ServerlessComputing/>
   <Benefits/>
   </div>  );
}
