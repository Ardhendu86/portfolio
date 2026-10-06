import React, { useState } from 'react';
import { HoloIcon, HoloBadge } from '../../common/Hologram';

/**
 * Contact Component
 * Form & contact info cards with 3D Hologram Icons and futuristic styling.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-5 position-relative">
      <div className="container py-4 position-relative" style={{ zIndex: 1 }}>
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="mb-2">
            <HoloBadge icon="bi-broadcast-pin" text="Get In Touch" variant="cyan" />
          </div>
          <h2 className="display-6 fw-bold">Contact Me</h2>
          <div className="mx-auto bg-info" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
        </div>

        <div className="row g-4">
          {/* Contact Details Cards */}
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="100">
            <div className="d-flex flex-column gap-3">
              {/* Email */}
              <div className="card theme-card holo-card rounded-4 p-3 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <HoloIcon icon="bi-envelope-fill" size="md" variant="cyan" showCorners={true} />
                  <div className="theme-contrast-text">
                    <h5 className="fw-bold fs-6 mb-1">Email</h5>
                    <a href="mailto:ardhendubag01@gmail.com" className="text-info text-decoration-none small">
                      ardhendubag01@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card theme-card holo-card rounded-4 p-3 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <HoloIcon icon="bi-telephone-fill" size="md" variant="neon" showCorners={true} />
                  <div className="theme-contrast-text">
                    <h5 className="fw-bold fs-6 mb-1">Phone</h5>
                    <a href="tel:+919876543210" className="text-info text-decoration-none small">
                      +91 8640805196
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="card theme-card holo-card rounded-4 p-3 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <HoloIcon icon="bi-linkedin" size="md" variant="blue" showCorners={true} />
                  <div className="theme-contrast-text">
                    <h5 className="fw-bold fs-6 mb-1">LinkedIn</h5>
                    <a
                      href="https://www.linkedin.com/in/ardhendu-bag-28936a152"
                      target="_blank"
                      rel="noreferrer"
                      className="text-info text-decoration-none small"
                    >
                      linkedin.com/in/ardhendu-bag-28936a152
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="card theme-card holo-card rounded-4 p-3 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <HoloIcon icon="bi-github" size="md" variant="emerald" showCorners={true} />
                  <div className="theme-contrast-text">
                    <h5 className="fw-bold fs-6 mb-1">GitHub</h5>
                    <span className="text-muted small">
                      Ardhendu Bag
                    </span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="card theme-card holo-card rounded-4 p-3 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <HoloIcon icon="bi-geo-alt-fill" size="md" variant="amber" showCorners={true} />
                  <div className="theme-contrast-text">
                    <h5 className="fw-bold fs-6 mb-1">Location</h5>
                    <p className="small mb-0">
                      Hooghly / Kalyani, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
            <div className="card theme-card holo-card rounded-4 p-4 shadow-sm">
              <h3 className="fw-bold fs-4 mb-3 theme-contrast-text">Send a Message</h3>
              <p className="small mb-4 theme-contrast-text">
                Have a question or want to discuss a software project? Feel free to reach out using the form below.
              </p>

              {submitted && (
                <div className="alert alert-success d-flex align-items-center" role="alert">
                  <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                  <div>Thank you! Your message has been sent successfully.</div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold theme-contrast-text">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold theme-contrast-text">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder=""
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold theme-contrast-text">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold theme-contrast-text">Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Write your message here..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-info text-white fw-bold px-4 py-2 rounded-3 shadow w-100 d-inline-flex align-items-center justify-content-center gap-2">
                      <i className="bi bi-send-fill"></i> Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
