const AlertList = ({ alerts, onUpdate, onDelete }) => (
  <div className="table-responsive" style={{ maxHeight: "420px" }}>
    <table
      className="table table-bordered align-middle mb-0"
      style={{ tableLayout: "fixed" }}
    >
      <thead className="table-light">
        <tr>
          <th style={{ width: "20%" }}>Country</th>
          <th style={{ width: "20%" }}>City</th>
          <th style={{ width: "20%" }}>Visa</th>
          <th style={{ width: "20%" }}>Status</th>
          <th style={{ width: "30%" }} className="text-center">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {alerts.length === 0 && (
          <tr>
            <td colSpan="5" className="text-center text-muted py-4">
              No alerts found
            </td>
          </tr>
        )}

        {alerts.map((a) => (
          <tr key={a.id}>
            <td>{a.country}</td>
            <td>{a.city}</td>
            <td>{a.visaType}</td>
            <td>{a.status}</td>

            <td className="text-center">
              <div className="d-flex justify-content-center align-items-center gap-2">
                {/* Update status ONLY if Active */}
                {a.status === "Active" && (
                  <select
                    className="form-select form-select-sm w-auto"
                    onChange={(e) => {
                      const newStatus = e.target.value;
                      if (newStatus) {
                        onUpdate(a.id, newStatus);
                      }
                    }}
                  >
                    <option value="">Update Status</option>
                    <option value="Booked">Booked</option>
                    <option value="Expired">Expired</option>
                  </select>
                )}

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(a.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AlertList;
