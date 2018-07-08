import React from "react";
import PropTypes from "prop-types";

const TextArea = ({label, text, id, value, handleChange}) => (<div className="form-group">
  <label htmlFor={label}>{text}</label>
  <textarea className="form-control rounded-0" rows="3" id={id} value={value} onChange={handleChange} required="required"/>
</div>)

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}
export default TextArea;
