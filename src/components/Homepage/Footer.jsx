import React from "react";
import { footerData } from "../../assets/data/footer";
import NITlogo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-stone-700 text-white w-full p-4 lg:w-11/12 mb-10">
      <div className="flex flex-col gap-4 mb-7 items-start justify-start md:flex-row md:justify-between md:gap-8 md:text-[18px]">
        
        <div className="text-lime-400 flex flex-col">
          <p>© 2024 NIT Jamshedpur</p>
          <img src={NITlogo} alt="" className="h-14 w-12" />
        </div>
        
        <div className=" flex flex-row justify-between flex-wrap gap-6 lg:px-4">
          {footerData.map((ele, idx) => {
            return (
              <div key={idx}>
                <h1 className="text-green-400 text-[18px] font-semibold">{ele.title}</h1>
                <div className="text-sky-400 flex flex-col gap-2 mt-2">
                  {ele.links.map((link, index) => {
                    return (
                      <div key={index}>
                        <Link to={link.link}>{link.title}</Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
