import React, {Component} from "react";
import ReactDOM from "react-dom";
import TextArea from "../presentational/TextArea";

class OutputContainer extends Component {
  constructor(props) {
    console.log(props)
    super(props);
  }

  render() {
    return (<TextArea text="output" label="output" id="output" value={this.props.output} handleChange={function() {}}/>);
  }
}
export default OutputContainer;
