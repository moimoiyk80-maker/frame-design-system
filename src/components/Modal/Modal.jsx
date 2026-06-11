import "./Modal.css";
import useScrollLock from "../../hooks/useScrollLock";
import { useEffect } from "react";

function Modal({
  open,
  title,
  children,
  onClose,
}) {

  useScrollLock(open);

  useEffect(() => {

            if (!open) return;
        
            const handleKeyDown =
            (event) => {
        
                if (
                event.key === "Escape"
                ) {
        
                onClose();
        
                }
        
            };
        
            window.addEventListener(
            "keydown",
            handleKeyDown
            );
        
            return () => {
        
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        
            };
        
        }, [open, onClose]);

  if (!open) return null;

  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <div className="modal-header">

          <h3>{title}</h3>

          <button
            className="modal-close"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <div className="modal-body">

          {children}

        </div>

      </div>

    </div>

  );
}

export default Modal;