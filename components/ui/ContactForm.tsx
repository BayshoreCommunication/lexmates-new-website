'use client';

import { useState, FormEvent } from 'react';
import { practiceAreas } from '@/data/practiceAreas';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice_area: practiceAreas[0]?.title || 'Civil Matters',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-form-wrap">
      <h2>Get in Touch</h2>
      {submitted ? (
        <div style={{ padding: '24px', background: '#eef8f2', borderRadius: '6px', border: '1px solid #b7e4c7', color: '#1b4332' }}>
          <h3 style={{ color: '#2d6a4f', marginTop: 0 }}>Thank you, {formData.name}!</h3>
          <p style={{ margin: 0 }}>
            Your message has been received. Our team will get back to you shortly. You can also reach us directly via WhatsApp or phone for urgent matters.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn btn-outline"
            style={{ marginTop: '16px' }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </label>
          <label>
            Practice Area
            <select
              name="practice_area"
              value={formData.practice_area}
              onChange={(e) => setFormData({ ...formData, practice_area: e.target.value })}
            >
              {practiceAreas.map((pa) => (
                <option key={pa.slug} value={pa.title}>
                  {pa.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </label>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
