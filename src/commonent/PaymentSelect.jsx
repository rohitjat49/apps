import React from 'react'
import { useNavigate } from 'react-router-dom';

const PaymentSelect = () => {
    const navigate = useNavigate(); 

    const handlePaymentSelection = (paymentMethod) => {
      if (paymentMethod === 'credit') {
        navigate('/credit-card-payment'); 
      } else if (paymentMethod === 'debit') {
        navigate('/debit-card-payment'); // Navigate to the Debit Card page
      }
    };
  return (
    <div className='max-w-md mx-auto bg-white p-6 shadow-md rounded-lg'>
       
        <div>Select a Payment Method</div>
        <div className=' border-2 my-5'>
       <div className='font-bold p-4'>$ 50.00 </div>

        </div>

         <div>
      <div>Choose Payment Method</div>

      {/* Credit Card Section */}
      <div
        className="bg-card-bg p-2 cursor-pointer hover:bg-gray-200 transition"
        onClick={() => handlePaymentSelection('credit')}
      >
        <div>Credit Card</div>
      </div>

      {/* Debit Card Section */}
      <div
        className="bg-card-bg p-2 mt-4 cursor-pointer hover:bg-gray-200 transition"
        onClick={() => handlePaymentSelection('debit')}
      >
        <div>Debit Card</div>
      </div>
    </div>

    </div>
  )
}

export default PaymentSelect