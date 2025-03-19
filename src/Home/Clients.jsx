import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ceoImage from "../assets/image.svg";
import { BiFontFamily } from "react-icons/bi";
export default function Clients() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" w-auto p-3 bg-light ">
         <h3 className="text-center p-3" style={{fontfamily: 'Roboto'}}>Testimonials</h3>
        <div className="mt-20 ">
          <Slider {...settings}>
            {data.map((d) => (
              <div className=" bg-white h-[450px] text-black rounded-start rounded-top">
                <div className="h-50 d-inline-block  bg-primary-subtle d-flex justify-content-center item-center  ">
                  <img
                    src={d.img_url}
                    alt=""
                    className="h-44 w-50 p-3 rounded-circle"
                  />
                </div>
                <div>
                  <p>{d.name}</p>
                  <p>{d.position}</p>
                  <div class="lh-1">
                    <span class="text-secondary fw-semibold">4.5</span>
                    <span class="align-text-top">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        class="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        class="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        class="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        class="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        class="bi bi-star-fill text-warning"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                    </span>

                    <span class="text-gray-500">(13,245)</span>
                  </div>
                  <p className="p-1">{d.disc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: "John ",
    position: "web developer",
    img_url: ceoImage,
    stars: 4,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "happy",
    position: "Mern Satsk developer",
    img_url: "/src/assets/image-1.svg",
    stars: 4,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "jeni",
    position: "Data Scientice",
    img_url: "/src/assets/image-2.svg",
    stars: 4,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: " Michel",
    position: "Backend developer",
    img_url: "/src/assets/image-3.svg",
    stars: 4,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "Reo",
    position: "Ui/Ux desinger",
    img_url: "/src/assets/image-4.svg",
    stars: 4,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "Max",
    position: "web developer",
    img_url: "/src/assets/image-5.svg",
    stars: 4,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "alexa",
    position: "Java developer",
    img_url: "/src/assets/image-6.svg",
    stars: 4,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "Jol",
    position: "Cloud manegement",
    img_url: ceoImage,
    stars: 4,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
];
