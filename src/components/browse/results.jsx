import { useLocation } from "react-router";
import { GoArrowLeft } from "react-icons/go";

import Info from "./info";
import { bolts } from "../../utility/contents/browse";
import { getValue } from "../../utility/functions/getValue";

const Results = () => {
  const kitId = useLocation().pathname.substr(16);

  const bolt = bolts.list.filter((bolt) => bolt.id === kitId)[0];

  return (
    <div className="p-8 w-[calc(100%-360px)] h-[calc(100%-80px)] mobile:w-full mobile:h-[calc(100%-110px)] mobile:p-4">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold text-black mobile:text-xl">{bolts.series}</h3>
        {kitId !== "" && (<>
          <a href="/browse/results" className="text-xl mr-16 flex items-center mobile:hidden">
            <GoArrowLeft />
            &nbsp;{"Back to list"}
          </a>
          <a href="/browse/results" className="hidden mobile:flex mobile:items-center mobile:text-base mobile:mr-2">
            <GoArrowLeft />
            &nbsp;{"Back"}
          </a>
          </>
        )}
      </div>
      {kitId !== "" ? (
        <Info
          image={getValue(bolt.part, "Image")}
          id={bolt.id}
          series={bolts.series}
          bolt={bolt.part}
        />
      ) : (
        <div className="grid grid-cols-3 mobile:grid-cols-2 grid-rows-2 gap-8 mobile:gap-2 w-full">
          {bolts.list.map((bolt, id) => (
            <a
              href={`/browse/results/${bolt.id}`}
              className="p-8 mobile:p-2 flex flex-col border border-normalGray justify-center"
              key={`bolt-${id}`}
            >
              <span className="font-bold text-3xl text-center mobile:text-xl">{bolt.id}</span>
              <span className="font-bold text-3xl text-center mobile:text-base">
                {getValue(bolt.part, "Model")}
              </span>
              <br />
              <span className="text-xl text-center mobile:text-base">
                {getValue(bolt.part, "Tensile Strength")}
              </span>
              <span className="text-xl text-center mobile:text-base">
                {getValue(bolt.part, "Material")}
              </span>
              <span className="text-xl text-center mobile:text-base">
                {getValue(bolt.part, "Shank Type")}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
