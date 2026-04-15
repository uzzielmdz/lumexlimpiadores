import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css';

const Contacto = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    last: '',
    phone: '',
    address: '', // <--- Nuevo campo
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setStatusMessage({ type: 'danger', text: 'Por favor ingresa un número de teléfono válido de 10 dígitos.' });
      return;
    }

    emailjs.sendForm(
      'service_07un64n',
      'template_dw65xjs',
      form.current,
      'm5OBLlNZP9WfJridJ'
    ).then(
      () => {
        setStatusMessage({ type: 'success', text: '¡Mensaje enviado con éxito!' });
        setFormData({
          name: '',
          last: '',
          phone: '',
          address: '', // <--- Reiniciar campo
          email: '',
          message: ''
        });
      },
      (error) => {
        console.error(error.text);
        setStatusMessage({ type: 'danger', text: 'Error al enviar el mensaje, intenta de nuevo.' });
      }
    );

    setTimeout(() => {
      setStatusMessage({ type: '', text: '' });
    }, 5000);
  };

  return (
    <div className="contacto-form">
      <div className="container mt-5">
        <h2 className="text-center mb-4">Contáctanos</h2>

        {statusMessage.text && (
          <div className={`alert alert-${statusMessage.type}`} role="alert">
            {statusMessage.text}
          </div>
        )}

        <form ref={form} onSubmit={handleSubmit}>
          {/* Fila para Nombre y Apellido */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="last" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="last" name="last" value={formData.last} onChange={handleChange} required />
            </div>
          </div>

          {/* Fila para Teléfono y Correo */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="phone" className="form-label">Teléfono</label>
              <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>

          {/* NUEVO CAMPO: DIRECCIÓN */}
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Dirección (Calle, Número, Colonia)</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Ej: Av. Juárez 123, Col. Centro"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje para cotización personalizada</label>
            <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <input type="hidden" name="reply_to" value={formData.email} />
          <button type="submit" className="btn btn-success w-100">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;