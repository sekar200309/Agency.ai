import React from "react";
import { company_logos } from "../assets/assets";
const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-12 sm-px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80">
      <h3 className="font-semibold">Trusted by Leading Companies</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
        {company_logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6"
          >
            <img src={logo} alt="Company Logo" className="h-8 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
