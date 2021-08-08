import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(
    <div className="fixed bg-black bg-opacity-80 top-0 left-0 bottom-0 right-0 flex justify-center items-center">
      {children}
    </div>,
    elRef.current
  );
};

export default Modal;
