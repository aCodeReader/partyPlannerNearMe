import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

export default function Social() {
  return (
    <div className='social'>
        <h1>Social Events</h1>
        <CCarousel controls>
  <CCarouselItem>
    <CImage className="d-block w-100" src="https://images.unsplash.com/photo-1520869309377-88c9274a27c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhcm4lMjBwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src="https://images.unsplash.com/photo-1572932759945-a840cf899708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydHklMjBzZXQlMjB1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src="https://images.unsplash.com/photo-1541401154946-62f8d84bd284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFydHklMjBzZXQlMjB1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="slide 3" />
  </CCarouselItem>
</CCarousel> 
    </div>
  )
}






{/* <img className='carasule' src='' /> */}