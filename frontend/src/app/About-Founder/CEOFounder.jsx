import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const FounderCard = () => {
  return (
    <div className="bg-white max-w-6xl mx-auto py-20 px-4">
      {/* Top Section: Image and Introduction */}
      <div className="flex flex-col md:flex-row overflow-hidden  pb-1">
        {/* Image */}
        <div className="md:w-1/3 p-4 flex justify-center items-center border-b-2 md:border-b-2 md:border-r-2 border-yellow-500">
          <Image
            src="/assets/CEO.png"
            alt="Vasanti Mulajkar"
            width={300}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-2/3 p-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Vasanti Mulajkar</h2>
          <h3 className="text-[#FEC63F] text-xl font-semibold mb-4">CEO / Founder</h3>

          <p className="text-gray-700 mb-4">
            Vasanti Mulajkar is the visionary founder of VM3 Tech Solutions LLP, bringing a wealth
            of expertise in SEO and Digital Marketing. With multiple certifications from Google and
            credentials from SEMrush and Boston Business Analysis, her skills span from competitor
            analysis to advanced keyword tools.
          </p>

          <p className="text-gray-700 mb-4">
            Since 2015, she has led VM3 Tech Solutions LLP to a team of 50+ employees. Her
            leadership is defined by core values:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>People Focused:</strong> Emphasizing relationships and personal growth.</li>
            <li><strong>Accountability:</strong> Delivering excellence in every commitment.</li>
            <li><strong>Integrity:</strong> Using modern tech and trends to provide real insights.</li>
            <li><strong>Security:</strong> Protecting customer and employee data with utmost care.</li>
          </ul>

          <p className="text-gray-700 mt-4">
            Mrs. Mulajkar holds multiple certifications including Google Ads Search, YouTube
            Creative Essentials, and SEMrush.
          </p>
        </div>
      </div>

      {/* Bottom Section: Achievements */}
      <div className="mt-5 sm:pl-10 px-5">
        <p  className="text-gray-700 mt-4 mb-4">She is an authorized talent partner for YouTube, Google, Facebook and LinkedIn. Expert in business consulting and strategically managing customers’ digital presence with a focus on security Known for exceptional networking skills and building strong client relationships Over 9 years of experience in SEO, digital marketing, and leadership Successfully grew the company to 50 employees and over 350 clients</p>
        <h3 className="text-xl font-semibold  mb-4">Achievements</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Winner of “International Business Star Award 2023.”</li>

          <p  className="text-gray-700 mt-4 mb-4">This award was given to him by renowned actor and entrepreneur Sunil Shetty at the International Business Growth Summit organized by Gulf Maharashtra Business Forum in Dubai in November 2023.</p>
          <li>Member of Lexicon Centre of MSME Excellence and Lexicon Management Institute of Leadership & Excellence Advisory Board.</li>

          <li>Business Pride Award 2021- for Women empowerment from Hon. Chief Guest</li>
          <p  className="text-gray-700 mt-4 mb-4">Mr. Ajay Thakur BSE MSME head.</p>
          <li>Winner of Women Entrepreneur Award 2022 by Great Companies.</li>
          <li>Additionally recognised in the event – Konnichiwa Pune 2024 for contributing to strengthening bilateral relations between India and Japan.</li>
          <li>Awarded by Digital Impact Award 2024.</li>
        </ul>
        <p className="text-gray-700 mt-4">
        Till date, along with this business, she has provided career counselling to more than 5000 students and also helped more than 100 women to get job opportunities again in the IT sector after a gap in their careers. For this, she has been felicitated as a Woman Entrepreneur for Women Empowerment by Ajay Thakur, Chairman, MSME Group, Bombay Stock Exchange.
        </p>

        {/* Social Links */}
        <p className="text-gray-800 font-bold text-2xl mt-6">For more details, visit her LinkedIn profile.</p>
        <div className="flex gap-4 mt-2 text-2xl">
  <a
    href="https://www.facebook.com/mulajkar.vasanti" // Replace with actual link
    target="_blank"
    rel="noopener noreferrer"
    className=" hover:text-blue-800  bg-black rounded-full p-2 text-[#FEC63F]"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQF96bKwmQjSLwAAAZaumtmQVgwtha1mHrmauopbtRBFmm2Grq1ki-4-6fqBhiMeQUYBVOx-UWa9vqxOqi7eGlK1RXf6wTDCw9eHxllLJ6WRn6i-Nzmo75kgSgUa_erf1mkeWvo=&original_referer=https://vm3techsolution.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fvasanti-mulajkar-244151157%2F" // Replace with actual link
    target="_blank"
    rel="noopener noreferrer"
    className=" hover:text-blue-900 bg-black rounded-full p-2 text-[#FEC63F]"
  >
    <FaLinkedinIn />
  </a>
</div>
      </div>
    </div>
  );
};

export default FounderCard;
