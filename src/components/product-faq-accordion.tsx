"use client";

import { FC, useState, SetStateAction, Dispatch } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { Collapse } from "react-collapse";
import { type ProductFaq } from "../types/nav.types";

type AccordionProps = {
  section: {
    question: string;
    answer: string;
  };
  isActiveSection: boolean;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
  sectionIndex: number;
};

type Faq = Omit<ProductFaq, "title" | "desc">;

const AccordionSection: FC<AccordionProps> = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div className=" flex flex-col rounded-md border border-gray-300 ">
      <div
        onClick={() => toggleSection()}
        className={`flex items-center cursor-pointer p-5
        rounded-md
       `}
      >
        <h3 className="font-bold">{section.question}</h3>
        <div className="text-xl md:text2xl  ml-auto">
          {isActiveSection ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </div>
      </div>

      <Collapse isOpened={isActiveSection}>
        <div className="pl-5 pr-[3rem] md:pr-[5rem] pb-5 rounded-b-lg">
          <p className="">{section.answer}</p>
        </div>
      </Collapse>
    </div>
  );
};

const FaqProductAccordion: FC<Faq> = ({ qa }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-2">
      {qa?.map((section, index) => (
        <AccordionSection
          key={index}
          section={section}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default FaqProductAccordion;
