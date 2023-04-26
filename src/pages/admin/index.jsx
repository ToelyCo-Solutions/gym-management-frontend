import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./dashboard";
import dashboardOptions from "../../data/adminDashboardOptions.json";
import TraineeMain from "./trainee";
import Trainee from "../../api/trainee";

const Admin = () => {
  const [subModule, setSubModule] = useState("dashboard");
  const [traineeData, setTraineeData] = useState();

  const location = useLocation();
  return (
    <div className="flex min-h-screen">
      <div className="bg-gray-800 text-white flex flex-col w-64">
        <div className="h-16 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Sleek-Hardcore</h1>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <nav className="px-4 pt-6">
            {dashboardOptions.map((option, index, arr) => {
              return option.subOptions ? (
                <React.Fragment key={`dashboard-select-${index}`}>
                  <select className="bg-gray-800 border-0 text-gray-400 hover:text-white hover:bg-gray-700  w-full p-3 outline-0">
                    <option>{option.label}</option>
                    {option.subOptions.map((item, index, arr) => (
                      <option
                        key={`dashboard-select-sub-option-${index}`}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </React.Fragment>
              ) : (
                <React.Fragment key={`dashboard-option-${index}`}>
                  <span
                    onClick={() => {
                      setSubModule(option.value);
                      option.value === "trainee"
                        ? Trainee.getAll().then((result) =>
                            setTraineeData(result.data)
                          )
                        : "";
                    }}
                    className="cursor-pointer block py-2 px-4 text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {option.label}
                  </span>
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="flex-1 bg-gray-100">
        <div className="px-8 py-6">
          {
            {
              dashboard: (
                <>
                  <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
                  <Dashboard />
                </>
              ),

              trainee: (
                <>
                  <h2 className="text-2xl font-bold mb-2">Trainee</h2>
                  <TraineeMain traineeData={traineeData} />
                </>
              ),
            }[subModule]
          }
        </div>
      </div>
    </div>
  );
};

export default Admin;
