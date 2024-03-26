import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div>
      <footer className="text-center text-5xl">Footer</footer>
      <div style={{position:"relative", height: "100px"}}>
        <Image 
          src="/images/footer.png" 
          alt="footer"
          quality={100}
          fill
          style={{
            objectFit: 'contain',
          }}
        /> 
      </div>
    </div>
    
  )
}
