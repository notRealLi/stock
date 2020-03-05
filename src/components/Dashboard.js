import React from "react";
import Plotly from "./graphs/Plotly";
import Select from "react-select";
import ds from "api/ds";
import "./Dashboard.css";
import { Card, CardContent, CardActionArea } from "@material-ui/core";

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
    const dataSets = await this.fetchDataSetsForPlotly();
    this.setState({ dataSets });
    this.setDataSetOptions();
  }

  fetchDataSetsForPlotly() {
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

  fetchDataSetsForVis() {
    return Promise.all(
      ds.map(async api => {
        const res = await fetch(api);
        const data = (await res.json()).dataset;
        return {
          data: data.data.map(d => ({x: new Date(d[0]), y: d[1]})),
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
      <div className="dashboard">
        <Card className="card chart">
          <CardActionArea>
            <Select
              options={this.state.dataOptions}
              onChange={this.handleDatasetChange.bind(this)}
            />
          </CardActionArea>
          <CardContent>
            <Plotly dataSet={this.state.selectedDataset} />
          </CardContent>
        </Card>

        <Card className="card activity">
          <CardActionArea>
            <Select
              options={this.state.dataOptions}
              onChange={this.handleDatasetChange.bind(this)}
            />
          </CardActionArea>
          <CardContent>
            Hi
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
