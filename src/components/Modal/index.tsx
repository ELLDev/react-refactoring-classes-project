import { useEffect, useState } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  children?: JSX.Element | JSX.Element[];
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal = (props: ModalProps): JSX.Element => {
  const [modalStatus, setModalStatus] = useState(props.isOpen);

  useEffect(() => {
    if (modalStatus !== props.isOpen) {
      console.log(props);
      setModalStatus(props.isOpen);
    }
  }, [modalStatus, props]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={props.setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {props.children}
    </ReactModal>
  );
};

export default Modal;
