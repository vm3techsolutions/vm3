import Deployment from "./Deployment";
import DevOps from "./DevOps";
import DevOpsBanner from "./DevOpsBanner";


export default function Home() {
  return (
   <div>
    <DevOpsBanner/>
    <DevOps/>
    <Deployment/>
   
   </div>  );
}
