import React, { useContext, useEffect, useState } from "react";
import { Table } from "../../../components/table";
import Trainee from "../../../api/trainee";
import Modal from "../../../components/modal";
import TraineeForm from "./form";

const TraineeMain = ({ traineeData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addTrainee() {
    setIsModalOpen(true);
  }
  return (
    <>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          onClose={(value) => setIsModalOpen(value)}
        >
          <TraineeForm />
        </Modal>
      )}

      <div>
        <button onClick={addTrainee}>Add</button>
        <Table rowData={traineeData} />
      </div>
    </>
  );
};

export default TraineeMain;
