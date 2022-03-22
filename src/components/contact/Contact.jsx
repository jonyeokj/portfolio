import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={process.env.PUBLIC_URL +"/assets/shake.svg"} alt="" />
      </div>
      <div className="right">
        <h2>Get In Touch!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
          {message && <span>Thank you! I'll get to you ASAP!</span>}
        </form>
      </div>
    </div>
  );
}