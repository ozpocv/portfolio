import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = formRef.current
    const sendToMe = emailjs.sendForm('service_qykow9l', 'template_qw1odct', form, 'c-760UOZvSTnUV-3S')
    const sendAutoReply = emailjs.sendForm('service_qykow9l', 'template_6clk2mj', form, 'c-760UOZvSTnUV-3S')
    Promise.all([sendToMe, sendAutoReply])
      .then(() => { alert('Message envoyé !'); e.target.reset() })
      .catch(() => alert('Une erreur est survenue, réessaie plus tard.'))
  }

  const Field = ({ type = 'input', id, name, label }) => (
    <div className="glitch-input-wrapper">
      <div className="input-container">
        {type === 'textarea'
          ? <textarea className="holo-input holo-textarea" placeholder=" " id={id} name={name} rows={4} required />
          : <input type={type} className="holo-input" placeholder=" " id={id} name={name} required />
        }
        <label htmlFor={id} className="input-label" data-text={label}>{label}</label>
        <div className="input-border" />
        <div className="input-glow" />
        <div className="input-scanline" />
        <div className="input-corners">
          <span className="corner corner-tl" />
          <span className="corner corner-tr" />
          <span className="corner corner-bl" />
          <span className="corner corner-br" />
        </div>
        <div className="input-data-stream">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="stream-bar" style={{ '--i': i }} />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">
        Me <span className="accent">Contacter</span>
      </h2>
      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <Field type="text" id="name" name="user_name" label="Nom" />
        <Field type="email" id="email" name="user_email" label="Email" />
        <Field type="textarea" id="message" name="message" label="Message" />
        <button type="submit" className="btn-primary">Send</button>
      </form>
    </section>
  )
}