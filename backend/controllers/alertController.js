const alerts = require("../models/alertModel");

// GET all alerts (with filters)
exports.getAlerts = (req, res) => {
  const { country, status } = req.query;

  let data = alerts;

  if (country) {
    data = data.filter(a => a.country === country);
  }

  if (status) {
    data = data.filter(a => a.status === status);
  }

  res.status(200).json(data);
};

// POST create alert
exports.createAlert = (req, res) => {
  const { country, city, visaType, status } = req.body;

  if (!country || !city || !visaType || !status) {
    return res.status(400).json({ message: "All fields required" });
  }

  const newAlert = {
    id: Date.now(),
    country,
    city,
    visaType,
    status,
    createdAt: new Date()
  };

  alerts.push(newAlert);
  res.status(201).json(newAlert);
};

// PUT update status
exports.updateAlert = (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  const alert = alerts.find(a => a.id === id);

  if (!alert) {
    return res.status(404).json({ message: "Alert not found" });
  }

  alert.status = status;
  res.status(200).json(alert);
};

// DELETE alert
exports.deleteAlert = (req, res) => {
  const id = Number(req.params.id);
  const index = alerts.findIndex(a => a.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Alert not found" });
  }

  alerts.splice(index, 1);
  res.status(200).json({ message: "Deleted successfully" });
};
