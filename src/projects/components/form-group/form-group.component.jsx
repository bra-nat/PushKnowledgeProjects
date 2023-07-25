import React from "react";

const FormGroup = ({
  labelText,
  inputType,
  placeholder,
  values,
  onInput,
  onKeyUp,
  onChange,
  readOnly = false,
  className,
  reference,
}) => {
  return (
    <div className="form-group ">
      <label className="fw-bold text-start">{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        className={className}
        value={values}
        onInput={onInput}
        onKeyUp={onKeyUp}
        onChange={onChange}
        readOnly={readOnly}
        ref={reference}
      />
    </div>
  );
};

export default FormGroup;
