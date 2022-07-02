import { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:felipemdantas@terra.com.br" className="p-text">
            felipemdantas@terra.com.br
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +55 (11) 95241-8441" className="p-text">
            +55 (11) 95241-8441
          </a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            type="text"
            className="p-text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            type="email"
            className="p-text"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name={message}
            onChange={handleChangeInput}
          />
        </div>
        <button className="p-text" type="button" onClick={handleSubmit}>
          {loading ? "Sending" : "Send Message"}
        </button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact, app__whitebg"
);
