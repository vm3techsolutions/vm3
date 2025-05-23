import QualityAssurance from "./QualityAssurance";
import QualityAssuranceBanner from "./QualityAssuranceBanner";
import Testing from "./Testing";


export default function Home() {
  return (
   <div>
    <QualityAssuranceBanner/>
   <QualityAssurance/>
   <Testing/>
   </div>  );
}
