import React from "react";
import { DescriptionData } from "../types/VillaType";

interface DescriptionSectionProps {
  desc: DescriptionData;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ desc }) => {
  return (
    <div className="flex flex-col mt-[60px]">
      <h1 className="font-mulish font-bold text-left text-[24px] my-">
        Description:
      </h1>

      <ol className="list-decimal text-[#737b7d] pl-4">
        {desc.description.map((text, index) => (
          <li key={index} className="py-4 font-mulish text-left text-[18px] text-[#737b7d]">
            {text}
          </li>
        ))}
      </ol>

      <section>
        <article className="flex flex-col items-start justify-start w-full">
          <div className="text-left py-2">
            <span className="font-mulish font-bold text-[24px] text-[#373f41]">
              Address: 
            </span>
            <p className="font-mulish font-semibold text-[20px] text-[#737b7d] inline">
              {desc.Address}
            </p>
          </div>
          <hr className="w-full border-t border-[#eaeaea]" />
        </article>

        <article className="flex flex-col items-start justify-start w-full">
          <div className="text-left py-2">
            <span className="font-mulish font-bold text-[24px] text-[#373f41]">
              Contact No.: 
            </span>
            <p className="font-mulish font-semibold text-[20px] text-[#737b7d] inline">
              {desc.Contact}
            </p>
          </div>
          <hr className="w-full border-t border-[#eaeaea]" />
        </article>

        <article className="flex flex-col items-start justify-start w-full">
          <div className="text-left py-2">
            <span className="font-mulish font-bold text-[24px] text-[#373f41]">
              Beds: 
            </span>
            <p className="font-mulish font-semibold text-[20px] text-[#737b7d] inline">
              {desc.Beds} Beds
            </p>
          </div>
          <hr className="w-full border-t border-[#eaeaea]" />
        </article>

        <article className="flex flex-col items-start justify-start w-full">
          <div className="text-left py-2">
            <span className="font-mulish font-bold text-[24px] text-[#373f41]">
              Check-In: 
            </span>
            <p className="font-mulish font-semibold text-[20px] text-[#737b7d] inline">
              {desc.Check_In}
            </p>
          </div>
          <hr className="w-full border-t border-[#eaeaea]" />
        </article>

        <article className="flex flex-col items-start justify-start w-full">
          <div className="text-left py-2">
            <span className="font-mulish font-bold text-[24px] text-[#373f41]">
              Check-Out: 
            </span>
            <p className="font-mulish font-semibold text-[20px] text-[#737b7d] inline">
              {desc.Check_Out}
            </p>
          </div>
          <hr className="w-full border-t border-[#eaeaea]" />
        </article>
      </section>
    </div>
  );
};

export default DescriptionSection;
