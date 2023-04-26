import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function ({ isModalOpen, onClose, children }) {
  return (
    <div>
      <Modal open={isModalOpen} onClose={() => onClose(false)} center>
        <div className="mt-10">{children}</div>
      </Modal>
    </div>
  );
}
