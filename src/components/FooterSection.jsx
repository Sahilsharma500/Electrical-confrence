import React from 'react'
import '../styling/FooterSection.css'

const FooterSection = () => {
  return (

      <div className='footer'>
        <div className='footerleft'>
            <p className='footerleftpone'>This site is created, maintained, and managed by <span>Conference Catalysts,<br/>  LLC</span> .</p>
            <p className='footerleftptwo'>Please feel free to <span>contact us</span> for any assistance.</p>
        </div>
        <div className='footerright'>
            <p className='footerrightp'>© Copyright 2024 IEEE - All rights reserved. Use of this website signifies your agreement to the <span>IEEE Terms and Conditions</span> . A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.

</p>
        </div>
      </div>
  )
}

export default FooterSection
