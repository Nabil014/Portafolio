import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Contactame!</h1>
      </div>
      <div name='contact' className='contact'>
        <form method='POST' action="https://getform.io/f/796535a1-b2c5-4e8a-bc5a-2c5d5ebce4a8" className='formulario'>
            <div className="nombre">
            {/* <label>Nombre</label> */}
            <input  type="text" placeholder='Nombre' name='name' required autocomplete="off" />
            </div>
            <div className="nombre">
            {/* <label>Email</label> */}
            <input  type="email" placeholder='Email' name='email' required autocomplete="off" />
            </div>
            <div className="mensaje">
            {/* <label>Mensaje</label> */}
            <textarea  name="message" rows="10" placeholder='Mensaje' required></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="footer-sns">
        <div className="desing-by">Diseñado por Nabil Allis</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/nabil-allis" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/Nabil014" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
