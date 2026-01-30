import { useState } from "react";

const AlertForm = ({ onCreate }) => {
  const [form, setForm] = useState({
    country: "",
    city: "",
    visaType: "",
    status: ""
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    onCreate(form);
    setForm({ country: "", city: "", visaType: "", status: "" });
  };

  return (
    <form className="row g-3 gy-2 mb-4" onSubmit={submit}>
      <input className="form-control col" name="country" placeholder="Country" value={form.country} onChange={handleChange} />
      <input className="form-control col" name="city" placeholder="City" value={form.city} onChange={handleChange} />

      <select className="form-select col" name="visaType" value={form.visaType} onChange={handleChange}>
        <option value="" disabled hidden>Visa Type</option>
        <option>Tourist</option>
        <option>Business</option>
        <option>Student</option>
      </select>

      <select className="form-select col" name="status" value={form.status} onChange={handleChange}>
        <option value="" disabled hidden>Status</option>
        <option>Active</option>
        <option>Booked</option>
        <option>Expired</option>
      </select>

      <button className="btn btn-primary col-12">Add Alert</button>
    </form>
  );
};

export default AlertForm;
