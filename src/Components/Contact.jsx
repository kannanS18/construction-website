import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();
  const data = location.state || {};
 const navigate = useNavigate();
  const [form, setForm] = useState({
    phone: '',
    email: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);

    // Combine all data to send
    const payload = {
      service: data.service,
      name: data.name,
      location: data.location,
      rate: data.rate || data.baseAmount / (data.area || 1) || '',
      phone: form.phone,
      email: form.email,
      estimate: data.baseAmount,
      gst: data.gst,
      total: data.total,
      gstRate: data.gstRate,
    };

    try {
      await axios.post('http://localhost:5000/api/contact', payload);
      alert('Thank you for reaching out! We have received your details and our team will contact you shortly.');
      setForm({ phone: '', email: '' });
      navigate('/services');
    } catch (err) {
      alert('Sorry, there was a problem submitting your request. Please try again later.');
    }
    setSubmitting(false);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Service Type*
          <input
            type="text"
            name="service"
            value={data.service || ''}
            disabled
          />
        </label>
        <label>
          Name*
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={submitting}
          />
        </label>
        <label>
          Location*
          <input
            type="text"
            name="location"
            value={data.location || ''}
            disabled
          />
        </label>
        <label>
          Rate per sqft (₹)
          <input
            type="number"
            name="rate"
            value={data.rate || data.baseAmount / (data.area || 1) || ''}
            disabled
          />
        </label>
        <label>
          Phone Number*
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            disabled={submitting}
          />
        </label>
        <label>
          Email*
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={submitting}
          />
        </label>
        <div className="estimate-box">
          <div>Estimate: <b>₹{data.baseAmount}</b></div>
          <div>GST ({data.gstRate}): <b>₹{data.gst}</b></div>
          <div>Total: <b style={{color:'#150996'}}>₹{data.total}</b></div>
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
