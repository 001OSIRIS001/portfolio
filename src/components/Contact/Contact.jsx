import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <div className="title">
        <h1>Contact</h1>
        <div className="underline"></div>
      </div>
      <div className="details">
        <p>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>SUBMIT</button>
        </form>
      </div>
      <div className="footer">
        <div className="buttonHigh">
          <p>up</p>
        </div>
        <div className="socialMedia">
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Github</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="signature">
          <h4>ANJANIAINA RAKOTOARINOSY @ 2024</h4>
        </div>
      </div>
    </div>
  );
}

export default Contact;
