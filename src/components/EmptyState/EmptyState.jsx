import "./EmptyState.css";

function EmptyState({
  icon,
  title,
  description,
  action,
}) {
  return (

    <div className="empty-state">

        {icon && (
        <div className="empty-icon">
            {icon}
        </div>
        )}

      <h3 className="empty-title">
        {title}
      </h3>

      <p className="empty-description">
        {description}
      </p>

      {action}

    </div>

  );
}

export default EmptyState;