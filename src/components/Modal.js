import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { UserContext } from "../contexts/UserContext";
import Modal from "@mui/material/Modal";
import { useState, useContext } from "react";

const Modall = () => {
  const { setCurrentUser, currentUser } = useContext(UserContext);

  const [age, setAge] = useState(currentUser.age);

  const [job, setJob] = useState(currentUser.job);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleEdit = () => {
    console.log(age);
    setOpen(false);
    console.log(job);
    setCurrentUser({ ...currentUser, age, job });
  };

  return (
    <div className="modal">
      <Button onClick={handleOpen} className="btn_edit">
        Edit profile
      </Button>
      <Modal
        className="box"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
          <div>
            <span className="modal-lable">Age:</span>
            <input
              className="searchbar"
              type="text"
              defaultValue={currentUser.age}
              name="age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <span className="modal-lable">Job:</span>
            <input
              className="searchbar"
              type="text"
              defaultValue={currentUser.job}
              name="job"
              onChange={(e) => setJob(e.target.value)}
            />
          </div>

          <button open={open} className="btn_download" onClick={handleEdit}>
            Save Changes
          </button>
          <button open={open} className="btn_download" onClick={handleClose}>
            Close
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default Modall;
