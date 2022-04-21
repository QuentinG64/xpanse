import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import SelectBox from "./SelectBox";

const titles = [
  "Active",
  "Retired",
  "In-Training",
  "Lost In Flight",
  "Lost In Training",
  "Died While In Active Service",
  "Dismissed",
  "Resigned during Training",
  "Deceased",
];

const FilterRecruiter = ({ status, setStatus }) => {
  return (
    <div className="border-2 rounded-xl h-auto px-4 py-2 fixed">
      <h1 className="font-title text-main-2 text-lg">
        SELECT YOUR NEXT PARTNER
      </h1>
      <div className="mt-7">
        <h2 className="font-title text-main-2 text-sm">
          FILTER BY PARTNERS STATUS
        </h2>
      </div>
      <div className="text-main-2 font-primary text-sm py-1">
        {titles.map((title, index) => (
          <Checkbox
            key={index}
            value={index + 1}
            status={status}
            title={title}
            type="radio"
            setStatus={setStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterRecruiter;
