import React from 'react'
import './Home.css'
import logo from '../assets/JOBS-LOGO.webp'
import ceoImage from '../assets/image.svg'
import ceoImage1 from '../assets/image-2.svg'
import ceoImage2 from '../assets/image-3.svg'
import ceoImage3  from '../assets/image-4.svg'
import ceoImage4 from '../assets/image-5.svg'
import ceoImage5 from '../assets/image-6.svg'
const about_data = [
    {
        imgURL: ceoImage,
        name: "Adam Smith",
        title: "Director"
    },
    {
        imgURL: ceoImage1,
        name: "Adnan Ekwo",
        title: "Assistant Director"
    },
    {
        imgURL: ceoImage2,
        name: "Emma Ede",
        title: "HR"
    },
    {
        imgURL: ceoImage3,
        name: "Mercy Ngozi",
        title: "Admin"
    },
    {
        imgURL: ceoImage4,
        name: "John Adekunle",
        title: "IT Support"
    },
    {
        imgURL: ceoImage5,
        name: "Emeka Usman",
        title: "IT Support"
    },
    
]

const About = () => {
  return (
    <div className='about  '>
        <div className="about-flex-wrapper">
        <div className="about-left">
            <h2>Meet Our Leadership</h2>
            <p>The passionate minds driving innovation in recruitment and connecting talent with opportunities</p>
        </div>
        <div className="about-right">
            {
                about_data.map((data,index)=>{
                    return <div className="leaders-container">
                        <div className="leaders-image">
                            <img src={data.imgURL} alt="member image" />
                        </div>
                        <div className="leaders-protfolio">
                            <h5>{data.name}</h5>
                            <p>{data.title}</p>
                        </div>
                    </div>
                })
            }
        </div>
        </div>
        <div className="about-ceo">
            <div className="company-logo-wrapper brand-image-wrapper">
               
            </div>
            <div className="about-text">
                <p>Tech Jobs is an innovative job portal designed to connect job seekers and employers in a seamless, efficient, 
                    and user-friendly way. Our platform leverages modern technology and user-centered design to address pain points 
                    in the hiring process. It focuses on smart matching, instant applications, and real-time updates, making it easier 
                    for candidates to find the right jobs and for companies to discover top talent.</p>
            </div>
            <div className="about-ceo-imageWrapper">
                <img src={ceoImage} alt="ceo image" />
                <h4>Nnamdi Okonkwo <span className='name-span'> - CEO of Tech Jobs</span></h4>
            </div>
        </div>
    </div>
  )
}

export default About