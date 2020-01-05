import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { InputGroup, FormControl } from "react-bootstrap";
import "./Password.scss";
const Password = props => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          type={showPassword ? "text" : "password"}
          value={props.value}
          onChange={e => {
            props.onChange(e.target.value);
          }}
          autoComplete="current-password"
          required
        />
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            {showPassword ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="eyeIcon"
                onClick={handleShowPassword}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                className="eyeIcon"
                onClick={handleShowPassword}
              />
            )}
          </InputGroup.Text>
        </InputGroup.Prepend>
      </InputGroup>
    </div>
  );
};
export default Password;
