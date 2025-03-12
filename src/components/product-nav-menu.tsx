// import { ProductNavMenuItem } from "../types/nav.types";
import Link from "next/link";
import { Tab, TabPanel, TabPanels, TabGroup, TabList } from "@headlessui/react";
import { HiArrowLongRight } from "react-icons/hi2";
import { productNavMenuConfigData } from "@/config/nav.config";

type TProductNavMenuProps = {
  // productNav?: ProductNavMenuItem;
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProductNavMenu({
  showDropdown,
  setShowDropdown,
}: TProductNavMenuProps) {
  return (
    <>
      {showDropdown && (
        <TabGroup
          as="div"
          onMouseLeave={() => setShowDropdown(false)}
          onMouseOver={() => setShowDropdown(true)}
          className="bg-white border rounded-md absolute top-[90%] left-[1%] lg:left-[15%] xl:left-[20%] w-[850px] hidden md:grid grid-cols-[40%_60%]"
        >
          <TabList as="div" className="flex flex-col p-[2rem] bg-gray-100">
            {Object?.keys(productNavMenuConfigData).map((item, i) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  `${
                    selected ? "bg-[#8A40F5] text-white" : "text-black"
                  } flex p-3 mr-3 md:pr-[3rem] outline-none rounded`
                }
              >
                {item}
              </Tab>
            ))}
          </TabList>
          <TabPanels as="div" className=" flex flex-col p-[2rem]">
            {Object?.values(productNavMenuConfigData).map((item, i) => (
              <TabPanel
                key={i}
                className="flex flex-col h-full justify-between items-start"
              >
                <p className="text-start">{item.desc}</p>

                {/* <div className="flex text-darkPurple pt-[1rem] border-t w-full items-center bg-pink"> */}
                <Link
                  href={`/product/${item.href}`}
                  onClick={() => setShowDropdown(false)}
                  className="flex items-center border-t gap-2 hover:translate-x-2 ease-in-out duration-300  w-full py-5 text-[#8A40F5] hover:underline"
                >
                  <span className="">
                    {`Lihat selengkapnya tentang  ${item.title}`}
                  </span>
                  <span className="text-lg ml-[-5px]">
                    <HiArrowLongRight />
                  </span>
                </Link>
                {/* </div> */}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      )}
    </>
  );
}
