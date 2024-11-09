import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const DonationForm = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/Payment-Select'); // Navigates to the donate page
  };

  const [selectedPlan, setSelectedPlan] = useState("oneTime");
  const [customAmount, setCustomAmount] = useState("");

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    setCustomAmount(""); // Clear the custom amount when switching plans
  };

  const handleAmountClick = (amount) => {
    setCustomAmount(amount.toString()); // Set the clicked amount in the input field
  };

  return (
    <div className="max-w-md  p-4 bg-white rounded-md shadow-md mt-4">
      {/* One Time / Monthly Toggle */}
      <div className="flex justify-between mb-4">
        <button
          className={`flex-1 py-2 ${
            selectedPlan === "oneTime" ? "bg-blue-100" : "bg-white"
          } border border-gray-300 rounded-l-md text-center ${
            selectedPlan === "oneTime" ? "text-blue-600" : "text-gray-600"
          }`}
          onClick={() => handlePlanChange("oneTime")}
        >
          One Time
        </button>
        <button
          className={`flex-1 py-2 ${
            selectedPlan === "monthly" ? "bg-blue-100" : "bg-white"
          } border border-gray-300 rounded-r-md text-center ${
            selectedPlan === "monthly" ? "text-blue-600" : "text-gray-600"
          }`}
          onClick={() => handlePlanChange("monthly")}
        >
          Monthly
        </button>
      </div>

      {/* Preset Amount Buttons */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[25, 50, 100, 250].map((amount) => (
          <button
            key={amount}
            className={`py-2 border rounded-md text-center ${
              customAmount == amount
                ? "bg-blue-100 border-blue-600 text-blue-600"
                : "border-gray-300"
            }`}
            onClick={() => handleAmountClick(amount)}
          >
            ${amount}
          </button>
        ))}
      </div>

      {/* Custom Amount Input */}
      <div className="relative mb-4">
        <input
          type="text"
          className="w-full pl-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          placeholder="Enter custom amount"
        />
        <span className="absolute left-2 top-2 text-gray-600">$</span>
        <span className="absolute right-2 top-2 text-gray-600">USD</span>
      </div>

      {/* Dedicate This Gift */}
      <button className="w-full py-2 mb-4 border border-gray-300 rounded-md text-gray-600 flex justify-center items-center">
        <span>❤️</span>
        <span className="ml-2">Dedicate This Gift</span>
      </button>

      {/* Donate Button */}
      <button className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      onClick={handleDonateClick} >
        DONATE
      </button>
    </div>
  );
};

export default DonationForm;
