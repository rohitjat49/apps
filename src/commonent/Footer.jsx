import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-navBar-bg justify-center text-center p-6 text-white'>
        {/* Center the logo */}
        <div className="flex justify-center mb-4">
          <img src='/img/logo.avif' alt="Logo" width='8%' />
        </div>
        
        {/* Text Section with margin between them */}
        <div className="mb-4">Alianah Welfare | Registered Charity No: 1160076</div>
        <div className="mb-4">175 Evington Road, Leicester, LE21QL</div>
        <div className="mb-4">Terms - Support - Privacy</div>
        <div>Marketing by Digiclimb</div>
      </div>
    </>
  )
}

export default Footer;
