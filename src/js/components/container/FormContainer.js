import React, {Component} from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import TextArea from "../presentational/TextArea";
import Button from "../presentational/Button";
import OutputContainer from "../container/OutputContainer";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      contest_id: "",
      problem_index: "",
      input_test_cases: "",
      solution_url: "",
      solution: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit(event) {
    console.log('On submit')
    /*
      work need to be done here

      fetchSolutionLink() -- will populate solution_url and invoke fetchSolution on success
      define fetchSolution() -- will populate solution and invoke fetchOuput on success
      define fetchOutput() -- will populate output and call following attach function
     */
  }

  attachOutput(output){
    const outputWrapper = document.getElementById("output-container");
    outputWrapper
      ? ReactDOM.render(<OutputContainer output={output}/>, outputWrapper)
      : false;
  }

  render() {
    // this.attachOutput("test")
    const {contest_id} = this.state;
    const {problem_index} = this.state;
    const {input_test_cases} = this.state;
    return (<form id="article-form">
      <Input text="Contest Id" label="contest_id" type="text" id="contest_id" value={contest_id} handleChange={this.handleChange}/>
      <Input text="Problem Index" label="problem_index" type="text" id="problem_index" value={problem_index} handleChange={this.handleChange}/>
      <TextArea text="Input test cases" label="input_test_cases" id="input_test_cases" value={input_test_cases} handleChange={this.handleChange}/>
      <Button type="submit" text="submit" onClick={this.handleSubmit}/>
    </form>);
  }
}
export default FormContainer;

const formWrapper = document.getElementById("form-container");
formWrapper
  ? ReactDOM.render(<FormContainer/>, formWrapper)
  : false;
