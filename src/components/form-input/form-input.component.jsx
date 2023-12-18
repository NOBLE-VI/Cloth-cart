import "./form-input.styles.scss";

function FormInput(props) {
  const { label, ...otherProps } = props;

  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          htmlFor={label}
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
