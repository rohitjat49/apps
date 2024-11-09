import React, { useState } from 'react';

function DonationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        apartment: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        cardNumber: '',
        cvv: '',
        expiryDate: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "cardNumber") {
            // Remove any non-numeric characters and format as 4-4-4-4
            let formattedValue = value.replace(/\D/g, "");
            if (formattedValue.length > 4) {
                formattedValue = formattedValue.match(/.{1,4}/g).join(" ").substring(0, 19);
            }
            setFormData({ ...formData, cardNumber: formattedValue });
        } else if (name === "expiryDate") {
            // Automatically add "/" after entering two digits for the month
            let formattedValue = value.replace(/\D/g, ""); // Remove non-numeric characters
            if (formattedValue.length >= 2) {
                formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4);
            }
            setFormData({ ...formData, expiryDate: formattedValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.pincode) newErrors.pincode = 'Pincode is required';
        if (!formData.cardNumber) newErrors.cardNumber = 'Card Number is required';
        if (!formData.cvv) newErrors.cvv = 'CVV is required';
        if (!formData.expiryDate) newErrors.expiryDate = 'Expiry Date is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-center mb-6">Complete Donation</h2>
            <form onSubmit={handleSubmit} noValidate>
                {/* First Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                {/* Last Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Address */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>

                {/* Apartment */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Apartment, suite, etc. (optional)</label>
                    <input
                        type="text"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Country */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Country</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                </div>

                {/* State */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">State</label>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>

                {/* City */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>

                {/* Pincode */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Pincode</label>
                    <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.pincode ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                </div>

                {/* Card Number */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        maxLength="19" // Maximum length to support the 4-4-4-4 format
                        placeholder="1234 5678 9012 3456"
                        className={`w-full px-4 py-2 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                </div>

                {/* CVV */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        maxLength="3"
                        className={`w-full px-4 py-2 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                </div>

                {/* Expiry Date */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Expiry Date (MM/YY)</label>
                    <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        maxLength="5"
                        placeholder="MM/YY"
                        className={`w-full px-4 py-2 border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                    Donate Now
                </button>
            </form>
        </div>
    );
}

export default DonationForm;
