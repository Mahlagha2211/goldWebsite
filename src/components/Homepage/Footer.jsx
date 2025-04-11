import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#DFC8A5]">
      <div className="rounded-t-3xl bg-[#CAA369] py-10 px-20 space-y-5 text-gray-800">
        <div>
          <img src="./image/logo1.png" className="h-16" alt="" />
        </div>
        <div className="grid grid-cols-5 ">
          <div className="space-y-4">
            <p className="text-justify">
              This growth plan will help you reach your resolutions and achieve
              the goals you have been striving towards.
            </p>
            <div className="flex gap-x-3 text-white">
              <FaTwitter className="text-xl" />
              <FaLinkedin className="text-xl" />
              <FaFacebook className="text-xl" />
              <FaGithub className="text-xl" />
              <FaInstagram className="text-xl" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold mb-4">Marketplace</p>
            <p>Buy Product</p>
            <p>Sell Product</p>
            <p>Our Creator</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold mb-4">Resources</p>
            <p>About Us</p>
            <p>Event</p>
            <p>Tutorial</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold mb-4">Company</p>
            <p>Media</p>
            <p>Blog</p>
            <p>Pricing</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold">You can be one step ahead.</p>
            <p className="text-justify ">Sign up to hear about our updates on the dot.</p>
            <input type="text" className="bg-white rounded-lg shadow-md  w-full py-1 px-3 focus:outline-none" placeholder="Your email address.." />
          </div>
        </div>
      </div>
    </div>
  );
}
