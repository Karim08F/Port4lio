import React, { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section className="contact-modern py-5">
            <div className="container">
                <div className="text-center mb-5 fade-in">
                    <h4 className="section-subtitle">Get In Touch</h4>
                    <h2 className="section-title">Let's Create <span className="gradient-text">Something Grand</span></h2>
                </div>

                <div className="row g-5 justify-content-center">
                    <div className="col-lg-4">
                        <div className="contact-info-list h-100">
                            <div className="glass-card p-4 mb-4 fade-in">
                                <div className="info-box d-flex align-items-center">
                                    <div className="icon-circle">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="mb-1 text-white">Email</h5>
                                        <p className="mb-0 text-muted">freddiekarimah@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card p-4 mb-4 fade-in">
                                <div className="info-box d-flex align-items-center">
                                    <div className="icon-circle">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="mb-1 text-white">Phone</h5>
                                        <p className="mb-0 text-muted">+254 792 313 604</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card p-4 fade-in">
                                <div className="info-box d-flex align-items-center">
                                    <div className="icon-circle">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="mb-1 text-white">Location</h5>
                                        <p className="mb-0 text-muted">Mombasa, Kenya</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="glass-card p-5 fade-in">
                            <h3 className="mb-4 text-white">Send Message</h3>

                            {submitted ? (
                                <div className="success-message text-center py-5">
                                    <div className="success-icon mb-3">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <h4 className="text-white">Message Sent Successfully!</h4>
                                    <p className="text-muted">I'll get back to you as soon as possible.</p>
                                    <button onClick={() => setSubmitted(false)} className="btn btn-secondary mt-3">
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="modern-form">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Your Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-input"
                                                    placeholder="John Doe"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-input"
                                                    placeholder="john@example.com"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="form-label">Your Message</label>
                                                <textarea
                                                    name="message"
                                                    className="form-input"
                                                    rows="5"
                                                    placeholder="Tell me about your project..."
                                                    value={formState.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary w-100 py-3" disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2"></span>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="fas fa-paper-plane me-2"></i> Send Message
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-modern {
          padding-top: 120px !important;
          background: linear-gradient(180deg, #080c14 0%, var(--bg-dark) 100%);
        }

        .icon-circle {
          width: 50px;
          height: 50px;
          background: var(--grad-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: white;
          box-shadow: 0 5px 15px var(--primary-glow);
        }

        .modern-form .form-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 8px;
          display: block;
        }

        .form-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 12px 20px;
          color: white;
          transition: 0.3s;
          outline: none;
        }

        .form-input:focus {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--primary-color);
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .success-icon {
          font-size: 4rem;
          color: var(--secondary-color);
          filter: drop-shadow(0 0 15px var(--secondary-glow));
        }

        @media (max-width: 992px) {
          .contact-info-list { margin-bottom: 2rem; }
        }
      `}</style>
        </section>
    );
};

export default Contact;
