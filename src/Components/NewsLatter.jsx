import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";
export default function NewsLatter() {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Manohar Kumar singh Manohar Kumar singh Manohar Kumar singh Manohar
          Kumar singh
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@email.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Manohar Kumar singh Manohar Kumar singh Manohar Kumar singh Manohar
          Kumar singh
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload your resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
}
