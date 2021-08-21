import React from 'react'
import "../styles/components/Banner.scss"

export default function Banner() {
  
  const companiesLogoList = [
    "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ksds3yvgjsx6znnmiymw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvZHN2ouyz2pjvvSbTUu__HPbQ4mA1Uth5Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ikdl6EG-gaALRfIlgO6h7jUoWqdr5QWpRQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzvMwoMq9VRKSHSLy9jgmHxPbZOGWI3jQ9w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEoKtbFpSeRTGK9DCbxAhj3c17OsDM3ZQMug&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegod7afRoEfXFzUzj7lGDtBYYTfv622ykIg&usqp=CAU"
  ]
  const logoImageBanner = "http://sc04.alicdn.com/kf/Hcf0ea953f8a24b3c94d46000caa437b2B.png";
  return (
    <div className="Banner">
      <img className="Banner-Image" src={logoImageBanner} alt={logoImageBanner} />
      <div className="Banner__Description">
        <h1>Morden <br/> Furniture Brands</h1>
        <h2>Up to 50% Off</h2>
      </div>
      <div className="Banner__Memberships">
        <span>Memberships</span>
        <div className="Banner__Memberships-Logo">
          {companiesLogoList.map((ele) => 
            <li><img src={ele} alt={ele}/></li>
          )}
        </div>
      </div>
    </div>
  )
}
