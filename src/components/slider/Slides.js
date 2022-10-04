import React from "react";
import "./Slider.css";
import { IoLinkSharp } from "react-icons/io5";

const slidesInfo = [
  {
    src: "https://res.cloudinary.com/demf45vva/image/upload/v1664404866/nomade_portada_dyky1m.jpg",
    alt: "nomade img",
    title: "Nómade",
    desc: " Nómade te ofrece una experiencia única como viajero, puedes encontrar hospedajes en cualquier parte del mundo o también puedes convertirte en anfitrión, promueve tu emprendimiento de alojamientos para generar ingresos.",
    link: "https://nomade-khaki.vercel.app/",
  },
  {
    src: "https://res.cloudinary.com/demf45vva/image/upload/v1664404892/countries_portada_cn8upv.jpg",
    alt: "countries img",
    title: "Countries App",
    desc: "Es una app que permite recorrer todos los países del mundo para conocer sus características como así también poder crear distintas actividades. ",
    link: "https://pi-countries-main-tau.vercel.app/",
  },
  {
    src: "https://res.cloudinary.com/demf45vva/image/upload/v1664404878/weather_portada_lsuod5.jpg",
    alt: "weather img",
    title: "Weather App",
    desc: "Es una app que permite saber la temperatura de cualquier ciudad del mundo.",
    link: "https://app-wethear.vercel.app/",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-title">
      <span>{slide.title}</span>
    </div>
    <div className="slide-desc">
      <p>{slide.desc}
      <a href={slide.link} rel="noreferrer" target="_blank">
        <button>
      <IoLinkSharp/>
        </button>
      </a>
      </p>
    </div>
  </div>
));
export default slides;
