import "./Input.css";

function Input({
  label,
  placeholder,
  helperText,
  error,
  disabled = false,
}) {
  return (

    <div className="input-group">

      {label && (

        <label className="input-label">

          {label}

        </label>

      )}

      <input
        className={`
          input
          ${error ? "input-error" : ""}
        `}
        placeholder={placeholder}
        disabled={disabled}
      />

      {(helperText || error) && (

        <p
          className={`
            input-helper
            ${error ? "input-helper-error" : ""}
          `}
        >

          {error || helperText}

        </p>

      )}

    </div>

  );
}

export default Input;