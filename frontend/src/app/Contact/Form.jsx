"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:p-8">
        {/* Left: Contact Form */}
        <div className="bg-white  ">
        <h2 className="text-[#FEC63F] text-xl font-semibold mb-2">SEND US EMAIL</h2>

          <h2 className="text-5xl font-bold mb-6">Feel free to write</h2>
          <form className=" rounded-lg shadow-2xl  p-5">
            <div className="border border-gray-400 p-5 space-y-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="border border-gray-300 p-3  w-full"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 p-3  w-full"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address*"
              className="border border-gray-300 p-3  w-full"
            />

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="border border-black px-4 py-2  font-medium"
              >
                Click here to verify your Email
              </button>
              <input
                type="text"
                placeholder="Verify Code (required)"
                className="border border-gray-300 p-3  w-full"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 p-3  w-full"
            />

            <textarea
              rows={7}
              placeholder="Write a Message"
              className="border border-gray-300 p-3  w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-[#FEC63F] text-black px-4 py-3 rounded-lg hover:bg-yellow-500 transition-all font-semibold text-xl"
            >
              Send Message
            </button>
            </div>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="">
        <h2 className="text-[#FEC63F] text-xl font-semibold mb-2">NEED ANY HELP?</h2>

<h2 className="text-5xl font-bold mb-8">Get in touch with us</h2>
          <p className="text-gray-600 mb-14 text-xl font-semibold">
            Please call or email contact form and we will be happy to assist you.
          </p>

          <div className="space-y-16">
            <div className="flex items-start gap-8">
              <FaPhone className="text-6xl bg-black text-white p-2 " />
              <div>
                <h4 className="font-semibold text-xl mb-2">Have any question?</h4>
                <p className="text-gray-700">+91 7877554499</p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <FaEnvelope className="text-6xl bg-black text-white p-2 " />
              <div>
                <h4 className="font-semibold text-xl mb-2">Write email</h4>
                <p className="text-gray-700">info@vm3techsolution.com</p>
              </div>
            </div>

            <div className="flex items-start gap-12">
              <FaMapMarkerAlt className="text-7xl bg-black text-white p-2 " />
              <div>
                <h4 className="font-semibold text-xl mb-2">Location</h4>
                <p className="text-gray-700">
                  VM3 Tech Solutions LLP, Office no 202 & 203, Second floor, Udav Chamber, Wagholi, Pune - 412207
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
