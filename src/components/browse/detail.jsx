import { useState } from "react";
import { useLocation } from "react-router";
import { FiMenu, FiSearch } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import { BsCartPlus, BsCartDash } from "react-icons/bs";

import TabPanel from "./tabs/tabPanel";
import Tab0 from "./tabs/tab0";
import Tab1 from "./tabs/tab1";
import Tab2 from "./tabs/tab2";
import Tab3 from "./tabs/tab3";
import Tab4 from "./tabs/tab4";
import Tab5 from "./tabs/tab5";
import { bolts } from "../../utility/contents/browse";
import { getValue } from "../../utility/functions/getValue";

const Detail = () => {
  const kitId = useLocation().pathname.slice(16, -7);

  const bolt = bolts.list.filter((bolt) => bolt.id === kitId)[0];

  const [tab, setTab] = useState(1);

  const changeTab = (id) => {
    setTab(id);
  };

  return (
    <>
      <nav className="w-[360px] h-full bg-[#E6E6E6] mobile:hidden">
        <div className="w-full h-32 p-2 bg-[#3E3E3E] flex justify-between items-stretch justify-items-stretch border-b border-normalGray">
          <button className="w-10 h-10 rounded-full bg-white self-end justify-self-start">
            <span className="flex justify-center text-xl">
              <FiMenu />
            </span>
          </button>
          <a href="/">
            <img
              src="/assets/logo.png"
              alt=""
              className="justify-self-center h-20 object-contain self-start"
            />
          </a>
          <button className="w-10 h-10 rounded-full bg-white self-end justify-self-end">
            <span className="flex justify-center text-xl">
              <FiSearch />
            </span>
          </button>
        </div>

        <div className="w-full border-b border-normalGray py-1 text-center bg-black">
          <span className="text-[#A0A0A0]">
            {"Browse"}&nbsp;{">"}&nbsp;{"Rod Bolts"}
          </span>
        </div>

        <div className="w-full px-8 py-4 flex flex-col justify-items-center gap-3 mobile:hidden">
          <a
            href="/browse/results"
            className="mx-auto text-center flex items-center"
          >
            <GoArrowLeft />
            &nbsp;{"Back to list"}
          </a>
          <span className="text-[#ED1B25] text-3xl mx-auto">{`ARP-${kitId}`}</span>
          <img
            src={getValue(bolt.part, "Image")}
            alt=""
            className="h-96 px-6 py-2"
          />

          <button className="text-lg py-1 mx-6 rounded-md text-[#D3D3D3] bg-[#818181] text-center">
            {"Rod Bolt FAQ"}
          </button>
          <button className="text-lg py-1 mx-6 rounded-md text-[#D3D3D3] bg-[#818181] text-center">
            {"Rod Bolt Tech"}
          </button>
          <button className="text-lg py-1 mx-6 rounded-md text-[#D3D3D3] bg-[#818181] text-center">
            {"Tech Videos"}
          </button>
        </div>
      </nav>

      <nav className="hidden h-full bg-[#4B4A4A] mobile:h-[110px] mobile:w-full mobile:block">
        <div className="w-full h-20 p-2 bg-[#3E3E3E] flex justify-between items-center justify-items-stretch border-b border-normalGray">
          <button className="w-10 h-10 rounded-full bg-white justify-self-start">
            <span className="flex justify-center text-xl">
              <FiMenu />
            </span>
          </button>
          <a href="/" className="justify-self-center h-full">
            <img
              src="/assets/mobile_logo.png"
              alt=""
              className="h-full object-contain"
            />
          </a>
          <a href="/browse/results" className="w-10 h-10 rounded-full bg-white justify-self-end flex items-center justify-center">
            <span className="text-xl">
              <FiSearch />
            </span>
          </a>
        </div>

        <div className="w-full border-b border-normalGray py-0.5 text-center">
          <span className="text-[#A0A0A0]">
            {"Browse"}&nbsp;{">"}&nbsp;{"Rod Bolts"}
          </span>
        </div>
      </nav>


      <div className="p-8 xsm:w-[calc(100%-360px)] xsm:h-[calc(100%-80px)] mobile:w-full mobile:flex mobile:flex-col">
        <div className="w-full xsm:h-40 flex justify-between mobile:gap-2 mobile:flex-col mb-2">
          <div>
            <h3 className="text-3xl text-[#ED1B25] mobile:text-center mobile:text-2xl">{`ARP-${kitId}`}</h3>
            <h4 className="text-2xl mt-2 mobile:text-center mobile:text-xl">{getValue(bolt.part, "Material")}</h4>
          </div>
          <div className="w-[40%] mobile:w-full mobile:mt-2">
            <h4 className="bg-[#626262] text-xl text-white text-center py-1">
              {"FITS"}
            </h4>
            <h4 className="text-2xl text-center mt-2 mobile:text-xl mobile:text-center">{bolts.series}</h4>
          </div>
          <div className="flex flex-col w-80 gap-2 mobile:w-full mobile:mt-2 mobile:mb-4">
            <h4 className="bg-[#626262] text-xl text-white text-center py-1">
              {"JOBBER PRICE"}
            </h4>
            <div className="flex justify-between items-center px-4">
              <div className="flex flex-col justify-items-center">
                <img
                  src="https://flagsapi.com/US/shiny/64.png"
                  alt=""
                  className="w-8 mx-auto"
                />
                <span className="text-sm">{"Change currency"}</span>
              </div>
              <span className="text-2xl">{"$ 89.45"}</span>
            </div>
            <div className="flex justify-between items-stretch px-16">
              <button className="bg-[#E6E6E6] text-[#505050] border border-[#505050] self-start rounded-full text-2xl p-2">
                <BsCartDash />
              </button>
              <button className="bg-[#E6E6E6] text-[#505050] border border-[#505050] self-end rounded-full text-2xl p-2">
                <BsCartPlus />
              </button>
            </div>
          </div>
        </div>

        <TabPanel id={tab} setId={changeTab} />

<div className="mobile:hidden">
        {tab === 1 ? (
          <Tab1 data={bolt.kit} />
        ) : tab === 2 ? (
          <Tab2 data={bolt.part} images={bolt.images} />
        ) : tab === 3 ? (
          <Tab3 data={bolt.installation} />
        ) : tab === 4 ? (
          <Tab4 data={bolt.related} />
        ) : (
          <Tab5 data={bolt.replacement} />
        )}
</div>
<div className="hidden mobile:block">
        {
        tab === 1 ? (
          <Tab0 imageSet={getValue(bolt.part, 'Image')} images={bolt.images} />
        ) : tab === 2 ? (
          <Tab1 data={bolt.kit} />
        ) : tab === 3 ? (
          <Tab2 data={bolt.part} images={bolt.images} />
        ) : tab === 4 ? (
          <Tab3 data={bolt.installation} />
        ) : tab === 5 ? (
          <Tab4 data={bolt.related} />
        ) : (
          <Tab5 data={bolt.replacement} />
        )}
</div>
      </div>
    </>
  );
};

export default Detail;
