// import React, { useState } from 'react';
// import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

// const countryList = [
//   "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria",
//   "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
// ];

// const FormPage = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [errors, setErrors] = useState({
//     contact: [],
//     billing: [],
//     payment: []
//   });

//   const handleCardNumberChange = (e) => {
//     let input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
//     input = input.substring(0, 16); // Limit to 16 digits
//     const formattedInput = input.match(/.{1,4}/g)?.join(' ') || ''; // Add spaces every 4 digits
//     setCardNumber(formattedInput);
//   };

//   const validatePaymentInfo = (cardNumber, expiry, cvv) => {
//     const cardRegex = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
//     const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
//     const cvvRegex = /^[0-9]{3,4}$/;

//     const errors = [];
//     if (!cardRegex.test(cardNumber)) errors.push('Card Number must be 16 digits');
//     if (!expiryRegex.test(expiry)) errors.push('Expiry must be in MM/YY format');
//     if (!cvvRegex.test(cvv)) errors.push('CVV must be 3 or 4 digits');
//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let contactErrors = [];
//     let billingErrors = [];
//     let paymentErrors = [];

//     // Contact Information Validation
//     if (!e.target.firstName.value) contactErrors.push('First Name is required');
//     if (!e.target.lastName.value) contactErrors.push('Last Name is required');
//     if (!e.target.email.value) contactErrors.push('Email is required');

//     // Billing Information Validation
//     if (!e.target.address.value) billingErrors.push('Address is required');
//     if (!e.target.country.value) billingErrors.push('Country is required');
//     if (!e.target.state.value) billingErrors.push('State is required');
//     if (!e.target.city.value) billingErrors.push('City is required');
//     if (!e.target.pincode.value) billingErrors.push('Pincode is required');

//     // Payment Information Validation
//     paymentErrors = validatePaymentInfo(
//       cardNumber,
//       e.target.expiry.value,
//       e.target.cvv.value
//     );

//     setErrors({ contact: contactErrors, billing: billingErrors, payment: paymentErrors });
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
//       <div className="bg-white rounded-lg shadow-md w-full max-w-2xl p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">Complete Donation</h1>
//         <hr className="mb-6 border-gray-300" />

//         <form onSubmit={handleSubmit}>
//           {/* Contact Information */}
//           <div className="mb-6">
//             <h2 className="text-gray-600 font-semibold mb-2">CONTACT INFORMATION</h2>
//             {errors.contact.length > 0 && (
//               <ul className="text-red-500 text-sm mb-4 list-disc border-2 border-red-500 p-4 pl-6">
//                 {errors.contact.map((error, index) => (
//                   <li key={index}>{error}</li>
//                 ))}
//               </ul>
//             )}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <TextField label="First Name" name="firstName" fullWidth />
//               <TextField label="Last Name" name="lastName" fullWidth />
//             </div>
//             <div className="mt-4">
//               <TextField label="Email" name="email" fullWidth />
//             </div>
//           </div>

//           {/* Billing Information */}
//           <div className="mb-6">
//             <h2 className="text-gray-600 font-semibold mb-2">BILLING INFORMATION</h2>
//             {errors.billing.length > 0 && (
//               <ul className="text-red-500 text-sm mb-4 list-disc border-2 border-red-500 p-4 pl-6">
//                 {errors.billing.map((error, index) => (
//                   <li key={index}>{error}</li>
//                 ))}
//               </ul>
//             )}
//             <div className="grid grid-cols-1 gap-4">
//               <TextField label="Address" name="address" fullWidth />
//               <TextField label="Apartment, Suite, etc. (optional)" name="apartment" fullWidth />
//               <FormControl fullWidth>
//                 <InputLabel>Country</InputLabel>
//                 <Select name="country" label="Country">
//                   {countryList.map(country => (
//                     <MenuItem key={country} value={country}>{country}</MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//               <TextField label="State" name="state" fullWidth />
//               <TextField label="City" name="city" fullWidth />
//               <TextField label="Pincode" name="pincode" fullWidth />
//             </div>
//           </div>

//           {/* Payment Information */}
//           <div className="mb-6">
//             <h2 className="text-gray-600 font-semibold mb-2">PAYMENT INFORMATION</h2>
//             {errors.payment.length > 0 && (
//               <ul className="text-red-500 text-sm mb-4 list-disc border-2 border-red-500 p-4 pl-6">
//                 {errors.payment.map((error, index) => (
//                   <li key={index}>{error}</li>
//                 ))}
//               </ul>
//             )}
//             <div className="grid grid-cols-1 gap-4">
//               <TextField
//                 label="Card Number"
//                 name="cardNumber"
//                 value={cardNumber}
//                 onChange={handleCardNumberChange}
//                 fullWidth
//                 maxLength="19"
//               />
//               <div className="grid grid-cols-2 gap-4">
//                 <TextField label="Expiry Date (MM/YY)" name="expiry" fullWidth />
//                 <TextField label="CVV" name="cvv" fullWidth />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ padding: '12px', fontSize: '16px' }}
//           >
//             Complete Donation
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormPage;


import React, { useState } from 'react';
import TextField from '@mui/material/TextField'; // Assuming you have MUI integrated

const countryList = [
 "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
  "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
  "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
  "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
  "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
  "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
  "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
  "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru",
  "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
  "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
  "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
  "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
  "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const FormPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [errors, setErrors] = useState({
    contact: [],
    billing: [],
    payment: []
  });

  const handleCardNumberChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    input = input.substring(0, 16); // Limit to 16 digits
    const formattedInput = input.match(/.{1,4}/g)?.join(' ') || ''; // Add spaces every 4 digits
    setCardNumber(formattedInput);
  };

  const validatePaymentInfo = (cardNumber, expiry, cvv) => {
    const cardRegex = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    const cvvRegex = /^[0-9]{3,4}$/;

    const errors = [];
    if (!cardRegex.test(cardNumber)) errors.push('Card Number must be 16 digits');
    if (!expiryRegex.test(expiry)) errors.push('Expiry must be in MM/YY format');
    if (!cvvRegex.test(cvv)) errors.push('CVV must be 3 or 4 digits');
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let contactErrors = [];
    let billingErrors = [];
    let paymentErrors = [];

    // Contact Information Validation
    if (!e.target.firstName.value) contactErrors.push('First Name is required');
    if (!e.target.lastName.value) contactErrors.push('Last Name is required');
    if (!e.target.email.value) contactErrors.push('Email is required');

    // Billing Information Validation
    if (!e.target.address.value) billingErrors.push('Address is required');
    if (!e.target.country.value) billingErrors.push('Country is required');
    if (!e.target.state.value) billingErrors.push('State is required');
    if (!e.target.city.value) billingErrors.push('City is required');
    if (!e.target.pincode.value) billingErrors.push('Pincode is required');

    // Payment Information Validation
    paymentErrors = validatePaymentInfo(
      cardNumber,
      e.target.expiry.value,
      e.target.cvv.value
    );

    setErrors({ contact: contactErrors, billing: billingErrors, payment: paymentErrors });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="bg-white rounded-lg shadow-md w-full max-w-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Complete Donation</h1>
        <hr className="mb-6 border-black" />

        <form onSubmit={handleSubmit}>
          {/* Contact Information */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-gray-600 font-semibold uppercase mr-2">CONTACT INFORMATION</h2>
              <div className="flex-grow h-px bg-black"></div>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  name="firstName"
                />
              </div>
              <div>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  name="lastName"
                />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="col-span-1">
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  type="email"
                />
              </div>
            </div>
            {errors.contact.length > 0 && (
              <ul className="text-red-500 text-sm mb-4 list-disc border-2 border-red-500 p-4 pl-6">
                {errors.contact.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Billing Information */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-gray-600 font-semibold uppercase mr-2">BILLING INFORMATION</h2>
              <div className="flex-grow h-px bg-black"></div>
            </div>
           
            <div className="grid grid-cols-1 gap-4">
              <div>
                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  name="address"
                />
              </div>
              <div>
                <TextField
                  label="Apartment, Suite, etc. (optional)"
                  variant="outlined"
                  fullWidth
                  name="apartment"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <select name="country" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                  {countryList.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div>
                <TextField
                  label="State"
                  variant="outlined"
                  fullWidth
                  name="state"
                />
              </div>
              <div>
                <TextField
                  label="City"
                  variant="outlined"
                  fullWidth
                  name="city"
                />
              </div>
              <div>
                <TextField
                  label="Pincode"
                  variant="outlined"
                  fullWidth
                  name="pincode"
                />
              </div>
            </div>
            {errors.billing.length > 0 && (
              <ul className="text-red-500 text-sm mb-4 list-disc border-2 border-red-500 p-4 pl-6">
                {errors.billing.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Payment Information */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-gray-600 font-semibold uppercase mr-2">PAYMENT INFORMATION</h2>
              <div className="flex-grow h-px bg-black"></div>
            </div>
           
            <div className="grid grid-cols-1 gap-4">
              <div>
                <TextField
                  label="Card Number"
                  variant="outlined"
                  fullWidth
                  name="cardNumber"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  maxLength="19"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 ">
              <div>
                <TextField
                  label="Expiry Date (MM/YY)"
                  variant="outlined"
                  fullWidth
                  name="expiry"
                />
              </div>
              <div>
                <TextField
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  name="cvv"
                />
              </div>
            </div>
            {errors.payment.length > 0 && (
              <ul className="text-red-500 text-sm mb-4 list-disc border-2 border-red-500 p-4 pl-6">
                {errors.payment.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white p-3 font-bold text-xl rounded-md hover:bg-black transition-colors"
          >
           Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
