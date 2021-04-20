import React from "react";

// import './form-input.styles.scss'
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel className={otherProps.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
  // <div className="group">
  //     <input className="form-input" onChange={handleChange} {...otherProps} />
  //     { label ? (
  //         <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
  //             {label}
  //         </label>
  //     ) : null }
  // </div>
);

export default FormInput;
