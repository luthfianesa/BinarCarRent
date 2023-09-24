import "./dashboardGraph.css";

const DashboardGraph = () => {
  return (
    <div className="dashboardGraph-container">
      <div className="dashboardGraph-pageHeading">
        <h6>
          Dashboard <span>&gt;</span> <span>Dashboard</span>
        </h6>
      </div>
      <div className="dashboardGraph-heading">
        <img></img>
        <h5>Rented Car Data Visualization</h5>
      </div>
      <div className="dashboardGraph-dateFilter">
        <label for="month">Month</label>
        <div className="dashboardGraph-dateFilter-input-and-button">
          <select name="month" id="month">
            <option value="june2023">June - 2023</option>
            <option value="july2023">July - 2023</option>
            <option value="august2023">August - 2023</option>
            <option value="september2023">September - 2023</option>
          </select>
          <button>GO</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardGraph;
