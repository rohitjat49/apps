// import React from 'react'
// import MainPage from './MainPage'
// import DonationForm from './DonationForm'

// const HomePage = () => {
//   return (
//     <>
//     <div className='bg-main-bg'>
//         <div className='flex justify-between mx-4'>
//             <div>1</div>
//             <div className='mr-7'>
//   <button type='' className="btn btn-buy-now place-btn w-100 p-1 border-2 my-3 px-4 py-2 rounded-xl bg-donnet-btn text-white font-semibold text-xl"  >
//                   Donate
//                 </button>
//             </div>

//         </div>

//         <div className='grid grid-cols-2 gap-6 py-10 container mx-auto'>
//             <div  className='text-white text-left'>
//              <div className='font-bold text-3xl mt-14'>America’s Charities</div>
//              <div className='my-10'>Make a difference for your favourite charity by starting a GoFundMe for your birthday, a marathon, or just because you care.  </div>
//              <div className='mr-7'>
//              <a href="/src/commonent/DonationForm.jsx" target="_blank" rel="noopener noreferrer">
//   <button type='' className="btn btn-buy-now place-btn w-100 p-1 border-2 my-3 px-4 py-2 rounded-full bg-donnet-btn text-white font-semibold text-xl"  >
//                   Donate
//                 </button>
//                 </a>
//                 </div>
//             </div>
//             <div className='rounded-full'>
//             <img src='/img/donate_img.webp' className='rounded-2xl' />
//             </div>

//         </div>

//     </div>

//     <div>
//       {/* <MainPage/> */}
//       <DonationForm/>
//     </div>
//     </>
//   )
// }

// export default HomePage

import React from 'react';
import { useNavigate } from 'react-router-dom';
import DonationForm from './DonationForm';

const DonateComponent = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donate-page'); // Navigates to the donate page
  };

  return (
    <>
    <div className='bg-main-bg'>
      <div className='flex justify-between mx-4'>
        <div>1</div>
        <div className='mr-7'>
          <button
            className="btn btn-buy-now place-btn w-100 p-1 border-2 my-3 px-4 py-2 rounded-xl bg-donnet-btn text-white font-semibold text-xl"
            onClick={handleDonateClick} // Handle button click
          >
            Donate
          </button>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-6 py-10 container mx-auto'>
        <div className='text-white text-left'>
          <div className='font-bold text-3xl mt-14'>America’s Charities</div>
          <div className='my-10'>
            Make a difference for your favorite charity by starting a GoFundMe for your birthday, a marathon, or just because you care.
          </div>
          <div className='mr-7'>
            <button
              className="btn btn-buy-now place-btn w-100 p-1 border-2 my-3 px-4 py-2 rounded-full bg-donnet-btn text-white font-semibold text-xl"
              onClick={handleDonateClick} // Handle button click for another donate button
            >
              Donate
            </button>
          </div>
        </div>
        <div className='rounded-full'>
          <img src='/img/donate_img.webp' className='rounded-2xl' alt='Donate' />
        </div>
      </div>
    </div>
    <DonationForm/>
    </>
  );
};

export default DonateComponent;
