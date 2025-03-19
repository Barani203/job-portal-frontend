import React from "react";
import Slider from "react-slick";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  { useState } from 'react'
import '../Job/Job.css'
import jobsData from '../data/jobs.js'
import { Link } from 'react-router-dom';
import MessageModal from '../Component/MessageModal/MessageModal';
export default function SliderJob() {
  const [isSaved, setIsSaved] = useState(false);
  const [isShowText, setIsShowText] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModalClick =()=>{
      setOpenModal(true);
  }
  const handleCloseModal =()=>{
      setOpenModal(false);
  }

  const handleSaveClick =()=>{
      if(!isSaved){
          setIsShowText(true)
          setTimeout(() => {
              setIsShowText(false)
          }, 1000);
      }
      setIsSaved(!isSaved);
  }


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // style={{background:jobColor}}
  return (
    <div className="slider-container w-auto p-3 bg-light">
      <h3 className="text-center p-3" style={{fontfamily: 'Roboto'}}>Top Hiring Companies</h3>
      <div className="mt-20">
      <Slider {...settings}>
     {
      jobsData.map((d)=>(
        <div className="jobs-container ">
        <div className="job-container-top"   style={{background:d.color}} >
            <div className="date-save">
                <div className="date">
                <p>{d.date}</p>
                </div>
                <div onClick={handleSaveClick} className={`save ${isSaved? "save-clicked" : ""}`}>
                <i className="ri-bookmark-line"></i>
                {isShowText && <span className='saved-text'>SAVED</span>}
                </div>
            </div>
            <div className="company-image">
                <div className="image-container">
                <img src={d.imgURL} alt="image" />
                </div>
                <span>{d.company}</span>
            </div>
            <p>{d.title}</p>
            <div className="role-experience">
                <ul className="role-experience-ul">
                    <li>{d.type}</li>
                    <li>{d.level}</li>
                    <li>{d.experience}</li>
                </ul>
            </div>
        </div>
        <div className="details-apply">
            <Link to={`/job/${d.id}`} className="details"><p>{d.details}</p></Link>
            <button onClick={handleOpenModalClick} className="apply"><p>{d.apply}</p></button>
        </div>
        {openModal && <MessageModal closeModal ={handleCloseModal} />}
    </div>
      ))
     }
      </Slider>
      </div>
    </div>
  );
}


