import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#DFC8A5]">
      <div className="rounded-t-3xl bg-[#CAA369] py-10 lg:px-20 px-10 space-y-5 text-gray-800">
        <div >
          <img src="./image/logo1.png" className="h-16 max-[450px]:mx-auto " alt="" />
        </div>
        <div className="grid max-[450px]:text-[14px] min-[850px]:grid-cols-5 min-[650px]:grid-cols-4 min-[450px]:grid-cols-2 grid-cols-1 gap-y-10 ">
          <div className="space-y-4 ">
            <p className="text-justify max-[450px]:text-center">
              This growth plan will help you reach your resolutions and achieve
              the goals you have been striving towards.
            </p>
            <div className="flex gap-x-3 text-white max-[450px]:justify-center">
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
          <div className="flex flex-col items-center min-[450px]:max-[650px]:items-start">
            <p className="font-bold mb-4">Resources</p>
            <p>About Us</p>
            <p>Event</p>
            <p>Tutorial</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold mb-4 ">Company</p>
            <p>Media</p>
            <p>Blog</p>
            <p>Pricing</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold max-[450px]:text-center">You can be one step ahead.</p>
            <p className="text-justify max-[450px]:text-center">Sign up to hear about our updates on the dot.</p>
            <input type="text" className="bg-white rounded-lg shadow-md  w-full py-1 px-3 focus:outline-none" placeholder="Your email address.." />
            <input type="submit" value="submit" className="cursor-pointer shadow-[inset_0_0_4px_gray]  bg-white px-2 py-1 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
