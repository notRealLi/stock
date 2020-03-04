import React from "react";
import Graph from "./Graph";
import Select from "react-select";
import ds from "api/ds";
import "./Dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSets: [],
      dataOptions: [],
      selectedDataset: {}
    };
  }

  async componentDidMount() {
    const dataSets = await this.fetchDataSets();
    this.setState({ dataSets });
    this.setDataSetOptions();
  }

  fetchDataSets() {
    return Promise.all(
      ds.map(async api => {
        const res = await fetch(api);
        const data = (await res.json()).dataset;
        return {
          x: data.data.map(d => d[0]),
          y: data.data.map(d => d[1]),
          title: data.name
        };
      })
    );
  }

  setDataSetOptions() {
    this.setState({
      dataOptions: this.state.dataSets.map((ds, idx) => ({
        value: idx,
        label:ds.title
      }))
    });
  }

  handleDatasetChange(option) {
    this.setState({
      selectedDataset: this.state.dataSets[option.value]
    });
  }

  render() {
    return (
      <div className="dashboard container">
        <div className="card">
          <div className="card-action">
            <Select
              options={this.state.dataOptions}
              onChange={this.handleDatasetChange.bind(this)}
            />
          </div>
          <div className="card-content">
            <Graph dataSet={this.state.selectedDataset} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
