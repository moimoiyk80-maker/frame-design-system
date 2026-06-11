import "./Tag.css";

function Tag({
  children,
  selected = false,
  disabled = false,
  onClick,
}) {
  return (

    <button
      className={`
        tag
        ${selected ? "tag-selected" : ""}
      `}
      disabled={disabled}
      onClick={onClick}
    >

      {children}

    </button>

  );
}

export default Tag;