import "./Button.css";

function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
}) {
  return (
    <button
      className={`
        button
        button-${variant}
        button-${size}
      `}
      disabled={disabled || loading}
      onClick={onClick}
    >
       {loading
        ? <span className="spinner" />
        : children}
    </button>
  );
  
}

export default Button;