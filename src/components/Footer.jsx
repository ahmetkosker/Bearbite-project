const Footer = () => {
  return (
    <div className="bg-black flex flex-col justify-center gap-y-6">
      <div className="max-w-full mx-32 flex text-white gap-x-12 font-semibold items-star border-b-2 border-[#D9D9D9] border-opacity-50 pb-6">
        <div>
          <img
            src="/images/Logo.png"
            alt="Logo"
            className="w-16 relative bottom-2.5"
          />
        </div>
        <div className="hover:text-gray-500 transition-colors cursor-pointer font-normal">
          CAREERS
        </div>
        <div className="hover:text-gray-500 transition-colors cursor-pointer font-normal">
          ABOUT
        </div>
        <div className="hover:text-gray-500 transition-colors cursor-pointer font-normal">
          SUPPORT
        </div>
        <div className="hover:text-gray-500 transition-colors cursor-pointer font-normal">
          CONTACT US
        </div>
        <div className="hover:text-gray-500 transition-colors cursor-pointer font-normal">
          SUBSCRIBE
        </div>
      </div>
      <div className="flex justify-between mx-32 items-center text-white font-semibold mt-6">
        <div className="opacity-40 text-[#D9D9D9]">
          All Rights Reserved @CompanyName
        </div>
        <div className="font-normal">
          PRIVACY POLICY | TERMS OF SERVICES | CODE OF CONDUCT
        </div>
      </div>
    </div>
  );
};

export default Footer;
