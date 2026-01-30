import { useEffect, useState } from "react";
import AlertForm from "../components/AlertForm";
import AlertList from "../components/AlertList";
import {
  getAlerts,
  createAlert,
  updateStatus,
  deleteAlert,
} from "../api/alertApi";

const AlertsPage = () => {
  const [alerts, setAlerts] = useState([]);

  const load = async () => setAlerts(await getAlerts());

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Visa Alerts</h3>
      <AlertForm
        onCreate={async (d) => {
          await createAlert(d);
          load();
        }}
      />
      <AlertList
        alerts={alerts}
        onUpdate={async (id, status) => {
          await updateStatus(id, status);
          load();
        }}
        onDelete={async (id) => {
          await deleteAlert(id);
          load();
        }}
      />
    </div>
  );
};

export default AlertsPage;
