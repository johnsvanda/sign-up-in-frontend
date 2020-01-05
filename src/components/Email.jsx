import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "./Email.scss";
const Email = props => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Email"
        aria-label="Email"
        aria-describedby="basic-addon1"
        value={props.value}
        onChange={e => {
          props.onChange(e.target.value);
        }}
        autoComplete="username"
        required
      />
    </InputGroup>
  );
};
export default Email;
