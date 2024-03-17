import React from 'react';
import "./InputField.css"
const InputField = ({ type, value, onChange, name, label, maxLength, error, errorMessage,note }) => {
  return (
    <div className="input-field">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        maxLength={maxLength}
      />
      {error && <p className="error-message">{errorMessage}</p>}
      {note && <p className='note'>{note}</p>}
    </div>
  );
};

export default InputField;
