import React, { useState } from 'react';

/**
 * Contact Component
 * Form & contact info cards with theme compatibility.
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
    <section id="contact" className="py-5">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill border border-info border-opacity-25 mb-2">
            Get In Touch
          </span>
          <h2 className="display-6 fw-bold">Contact Me</h2>
          <div className="mx-auto bg-info" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
        </div>

        <div className="row g-4">
          {/* Contact Details Cards */}
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="100">
            <div className="d-flex flex-column gap-3">
              {/* Email */}
              <div className="card theme-card rounded-4 p-3 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-info bg-opacity-25 text-info rounded-3 p-3 fs-4">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold fs-6 mb-1">Email</h5>
                    <a href="mailto:ardhendu.bag@example.com" className="text-info text-decoration-none small">
                      ardhendu.bag@example.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card theme-card rounded-4 p-3 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-info bg-opacity-25 text-info rounded-3 p-3 fs-4">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold fs-6 mb-1">Phone</h5>
                    <a href="tel:+919876543210" className="text-info text-decoration-none small">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="card theme-card rounded-4 p-3 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-info bg-opacity-25 text-info rounded-3 p-3 fs-4">
                    <i className="bi bi-linkedin"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold fs-6 mb-1">LinkedIn</h5>
                    <a
                      href="https://linkedin.com/in/ardhendubag"
                      target="_blank"
                      rel="noreferrer"
                      className="text-info text-decoration-none small"
                    >
                      linkedin.com/in/ardhendubag
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="card theme-card rounded-4 p-3 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-info bg-opacity-25 text-info rounded-3 p-3 fs-4">
                    <i className="bi bi-github"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold fs-6 mb-1">GitHub</h5>
                    <a
                      href="https://github.com/ardhendubag"
                      target="_blank"
                      rel="noreferrer"
                      className="text-info text-decoration-none small"
                    >
                      github.com/ardhendubag
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="card theme-card rounded-4 p-3 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-info bg-opacity-25 text-info rounded-3 p-3 fs-4">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold fs-6 mb-1">Location</h5>
                    <p className="small mb-0 opacity-75">
                      Hooghly / Kalyani, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
            <div className="card theme-card rounded-4 p-4 shadow-sm">
              <h3 className="fw-bold fs-4 mb-3">Send a Message</h3>
              <p className="small mb-4 opacity-75">
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
                    <label className="form-label small fw-semibold">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ardhendu Bag"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Project Discussion / Inquiry"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Message</label>
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
                    <button type="submit" className="btn btn-info text-white fw-bold px-4 py-2 rounded-3 shadow w-100">
                      <i className="bi bi-send-fill me-2"></i> Send Message
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
