import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './dashboard.css';

function Dashboard() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3hn65k5', 'template_9lx24xo', form.current, {
        publicKey: '3Ud18FQ1IrSTyLtOV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container mt-5">
      <h2>¡Haznos llegar tu recado!</h2>
      <form ref={form} onSubmit={sendEmail} className="p-4 border rounded shadow-sm formularioEmail">
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="userName" name="user_name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="userEmail" name="user_email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  )
}

export default Dashboard
