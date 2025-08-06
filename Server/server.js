const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const MONGO_URI = 'mongodb://localhost:27017/terabuild';

const app = express();
app.use(cors());
app.use(express.json());

const contactSchema = new mongoose.Schema({
  service: String,
  name: String,
  location: String,
  rate: String,
  phone: String,
  email: String,
  estimate: String,
  gst: String,
  total: String,
  gstRate: String,
  createdAt: { type: Date, default: Date.now }
});

// Separate models for each service type
const ConstructionContact = mongoose.model('construction_contacts', contactSchema);
const RenovationContact = mongoose.model('renovation_contacts', contactSchema);
const GovtContact = mongoose.model('govt_contacts', contactSchema);

function getModelByService(service) {
  if (service === 'Construction') return ConstructionContact;
  if (service === 'Renovation') return RenovationContact;
  if (service === 'Government Projects') return GovtContact;
  return ConstructionContact; 
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Store contact in the correct collection
app.post('/api/contact', async (req, res) => {
  try {
    const { service } = req.body;
    const Model = getModelByService(service);
    const contact = new Model(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving contact' });
  }
});

// (No GET route for fetching contacts)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));