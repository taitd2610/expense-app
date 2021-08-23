import { useState } from "react";
const Budget = () => {
  const [budget, setBudget] = useState(0);
  return (
    <div className="">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex justify-between items-center bg-[#E1E3E4] p-2 rounded-lg">
          <p>Budget:{`${budget}đ`}</p>
          <button
            className="bg-blue-500 rounded-md px-3 py-1.5 text-white"
            onClick={() => {
              setBudget(100);
            }}
          >
            Edit
          </button>
        </div>
        <div className="bg-[#D5EDDB] p-2 rounded-lg">
          <p>Remaining</p>
        </div>
        <div className="bg-[#CBE5FF] p-2 rounded-lg">
          <p>Spent so far</p>
        </div>
      </div>
    </div>
  );
};

export default Budget;
