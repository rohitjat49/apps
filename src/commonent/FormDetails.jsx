import React, { useState } from 'react';

const PaymentForm = () => {
  // States for each form field
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Centered form container */}
      <div className="max-w-md w-full bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Your Details</h2>
        <form className="text-left">
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Country Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select your country</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
            </select>
          </div>

          {/* State */}
          <div className="mb-4">
            <label className="block text-gray-700">State</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          {/* Address Line 1 */}
          <div className="mb-4">
            <label className="block text-gray-700">Address Line 1</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter address line 1"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
            />
          </div>

          {/* Address Line 2 */}
          <div className="mb-4">
            <label className="block text-gray-700">Address Line 2</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter address line 2"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
            />
          </div>

          {/* Zip Code */}
          <div className="mb-4">
            <label className="block text-gray-700">Zip Code</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your zip code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>

          

          <h2 className="text-xl font-semibold mb-4 text-left">Pay by Card</h2>

          {/* Card Number */}
          <div className="mb-4">
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              maxLength="16"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="1234 5678 1234 5678"
            />
          </div>

          {/* Expiry and CVC */}
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <label className="block text-gray-700">MM/YY</label>
              <input
                type="text"
                maxLength="5"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="MM/YY"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700">CVC</label>
              <input
                type="text"
                maxLength="3"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="CVC"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
