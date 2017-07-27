import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

class AddLocation extends Component {
  state = {};

  onChange(value) {
    this.setState({
      value: value
    });
  }

  getLocations(input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }

    // return fetch(`https://api.github.com/search/users?q=${input}`)
    //   .then(response => response.json())
    //   .then(json => {
    //     return { options: json.items };
    //   });
    return fetch(
      // "http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=ae1e40d05b2be6e5842a67131e6a3484"
      "https://www.metaweather.com/api/location/search/?query=san",
      {
        mode: "no-cors"
      }
    )
      .then(res => res.json())
      .then(json => {
        return { options: json.items };
      });
  }

  render() {
    const SelectAsync = Select.Async;
    return (
      <div className="Add-Location">
        <SelectAsync
          value={this.state.value}
          onChange={this.onChange}
          valueKey="id"
          labelKey="login"
          loadOptions={this.getLocations}
        />
      </div>
    );
  }
}

export default AddLocation;
