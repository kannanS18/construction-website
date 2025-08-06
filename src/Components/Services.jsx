import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import parallaxImg from '../assets/DE1.jpg';

const SERVICES = [
  {
    id: 'construction',
    title: 'Construction',
    desc: 'End-to-end construction solutions for commercial, residential, and industrial projects.',
    details: 'We offer complete construction services including planning, design, execution, and project management for all types of buildings and infrastructure.',
    defaultRate: 1800,
  },
  {
    id: 'renovation',
    title: 'Renovation',
    desc: 'Modernization and restoration of existing structures with minimal disruption.',
    details: 'Our renovation services cover interior and exterior upgrades, structural repairs, and sustainable retrofitting for homes and businesses.',
    defaultRate: 1200,
  },
  {
    id: 'govt',
    title: 'Government Projects',
    desc: 'Specialized expertise for government tenders and public infrastructure.',
    details: 'We handle government contracts for roads, bridges, public buildings, and utilities, ensuring compliance and transparency.',
    defaultRate: 2000,
  },
];

const LOCATIONS = [
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Coimbatore",
  "Trivandrum"
];

function getRateByLocation(serviceId, location) {
  if (!location) return 0;
  const loc = location.trim().toLowerCase();
  if (serviceId === 'construction') {
    if (loc === 'chennai') return 2000;
    if (loc === 'bangalore') return 2200;
    if (loc === 'hyderabad') return 2100;
    if (loc === 'mumbai') return 2500;
    if (loc === 'delhi') return 2400;
    if (loc === 'kolkata') return 2000;
    if (loc === 'pune') return 2300;
    if (loc === 'ahmedabad') return 1900;
    if (loc === 'coimbatore') return 1850;
    if (loc === 'trivandrum') return 1800;
    return 1800;
  }
  if (serviceId === 'renovation') {
    if (loc === 'chennai') return 1400;
    if (loc === 'bangalore') return 1600;
    if (loc === 'hyderabad') return 1500;
    if (loc === 'mumbai') return 1700;
    if (loc === 'delhi') return 1650;
    if (loc === 'kolkata') return 1350;
    if (loc === 'pune') return 1550;
    if (loc === 'ahmedabad') return 1300;
    if (loc === 'coimbatore') return 1250;
    if (loc === 'trivandrum') return 1200;
    return 1200;
  }
  if (serviceId === 'govt') {
    if (loc === 'chennai') return 2100;
    if (loc === 'bangalore') return 2300;
    if (loc === 'hyderabad') return 2200;
    if (loc === 'mumbai') return 2600;
    if (loc === 'delhi') return 2500;
    if (loc === 'kolkata') return 2100;
    if (loc === 'pune') return 2400;
    if (loc === 'ahmedabad') return 2000;
    if (loc === 'coimbatore') return 1950;
    if (loc === 'trivandrum') return 1900;
    return 2000;
  }
  return 0;
}

export default function Services() {
  const [formData, setFormData] = useState({});
  const [showDetail, setShowDetail] = useState(null); // store service id
  const [openFormId, setOpenFormId] = useState(null);
  const navigate = useNavigate();

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showDetail || openFormId) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [showDetail, openFormId]);

  const handleInput = (serviceId, e) => {
    setFormData({
      ...formData,
      [serviceId]: {
        ...formData[serviceId],
        [e.target.name]: e.target.value,
      }
    });
  };

  const getEstimate = (service, data) => {
    const area = parseFloat(data.area) || 0;
    const rate = service.defaultRate;
    return area * rate;
  };

  const handleSubmit = (serviceId, e) => {
    e.preventDefault();
    const service = SERVICES.find(s => s.id === serviceId);
    const data = formData[serviceId] || {};
    const baseAmount = getEstimate(service, data);
    let gstRate = 0.03;
    if (serviceId === 'renovation') gstRate = 0.04;
    if (serviceId === 'govt') gstRate = 0.05;
    const gst = baseAmount * gstRate;
    const total = baseAmount + gst;

    navigate('/contact', {
      state: {
        service: service.title,
        ...data,
        baseAmount: baseAmount.toFixed(2),
        gst: gst.toFixed(2),
        total: total.toFixed(2),
        gstRate: (gstRate * 100) + '%'
      }
    });
  };

  // Find the selected service for modal
  const selectedService = SERVICES.find(s => s.id === showDetail);

  return (
    <div className='services-page'>
      <div
        className="services-parallax"
        style={{ backgroundImage: `url(${parallaxImg})` }}>
        <div className="services-parallax-overlay">
          <h1>Our Services</h1>
          <p>
            Explore our comprehensive range of construction, renovation, and government project services.
          </p>
        </div>
      </div>
      <div className='services-cards-wrap'>
        {SERVICES.map(service => (
          <div className="service-card-3d" key={service.id}>
            <div className="service-card">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <button className="details-btn" onClick={() => setShowDetail(service.id)}>
                More Details
              </button>
              <button
                className="get-quota-btn"
                onClick={() => setOpenFormId(service.id)}
                style={{marginBottom: '18px'}}
              >
                Get Quota
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for More Details */}
      {selectedService && (
        <div
          className="service-modal"
          onClick={() => setShowDetail(null)}
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="service-modal-content"
            onClick={e => e.stopPropagation()}
          >
            <h3>{selectedService.title} Details</h3>
            <p style={{maxHeight: '300px', overflowY: 'auto'}}>{selectedService.details}</p>
            <button onClick={() => setShowDetail(null)}>Close</button>
          </div>
        </div>
      )}
      {/* Modal for Get Quota Form */}
      {openFormId && (() => {
        const service = SERVICES.find(s => s.id === openFormId);
        const data = formData[openFormId] || {};
        const area = parseFloat(data.area) || 0;
        const location = data.location || '';
        const rate = getRateByLocation(service.id, location);
        const estimate = area * rate;
        let gstRate = 0.03;
        if (service.id === 'renovation') gstRate = 0.04;
        if (service.id === 'govt') gstRate = 0.05;
        const gst = estimate * gstRate;
        const total = estimate + gst;
        return (
          <div
            className="service-modal"
            onClick={() => setOpenFormId(null)}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="service-modal-content"
              onClick={e => e.stopPropagation()}
              
            >
              <h1>{service.title} Quotation </h1>
              <form className="service-form" onSubmit={e => handleSubmit(service.id, e)}>
                <label>
                  Project Location*
                  <span className="select-wrapper">
                    <select
                      name="location"
                      required
                      label="Select Location"
                      value={location}
                      onChange={e => handleInput(service.id, e)}
                    >
                      <option value="">Select Location</option>
                      {LOCATIONS.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </span>
                </label>
                <label>
                  Project Area (sqft)*
                  <input
                    type="number"
                    name="area"
                    required
                    min="1"
                    value={data.area || ''}
                    onChange={e => handleInput(service.id, e)}
                  />
                </label>
                <div className="estimate-box">
                  <div>Rate per sqft: <b>₹{rate ? rate.toLocaleString() : '-'}</b></div>
                  <div>Estimate: <b>₹{estimate ? estimate.toLocaleString() : '0'}</b></div>
                  <div>GST ({(gstRate * 100)}%): <b>₹{estimate ? gst.toLocaleString(undefined, {maximumFractionDigits:2}) : '0'}</b></div>
                  <div>Total: <b style={{color:'#150996'}}>{estimate ? `₹${total.toLocaleString(undefined, {maximumFractionDigits:2})}` : '₹0'}</b></div>
                </div>
                <button type="submit">Drop Your Info</button>
                <button type="button" onClick={() => setOpenFormId(null)} style={{marginTop: 12}}>Close</button>
              </form>
            </div>
          </div>
        );
      })()}
    </div>
  );
}