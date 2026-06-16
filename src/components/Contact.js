import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill out all required fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ submitting: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    // Mock API Submit
    setTimeout(() => {
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="contact-container container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          {/* Contact Info Column */}
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's build something together</h3>
            <p className="contact-text">
              I am open to collaborations, remote software engineering opportunities, or general tech discussions. Feel free to reach out via the form, email, or explore my GitHub repositories!
            </p>
            
            <div className="info-details">
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <a href="mailto:roshanbishwas69@gmail.com">roshanbishwas69@gmail.com</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Available for Remote Work</p>
                </div>
              </div>
            </div>

            <div className="contact-social-icons">
              <a href="https://github.com/RoshanBishwas69" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
                <FaGithub /> <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-card glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required 
                />
                <label htmlFor="name">Your Name *</label>
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required 
                />
                <label htmlFor="email">Your Email *</label>
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="subject">Subject</label>
              </div>

              <div className="form-group">
                <textarea 
                  name="message" 
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                ></textarea>
                <label htmlFor="message">Your Message *</label>
              </div>

              {status.error && (
                <div className="status-message error-msg">
                  <FaExclamationTriangle /> {status.error}
                </div>
              )}

              {status.success && (
                <div className="status-message success-msg">
                  <FaCheckCircle /> Message sent successfully! I will get back to you soon.
                </div>
              )}

              <button 
                type="submit" 
                className={`submit-btn ${status.submitting ? 'submitting' : ''}`}
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'} <FaPaperPlane className="send-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
