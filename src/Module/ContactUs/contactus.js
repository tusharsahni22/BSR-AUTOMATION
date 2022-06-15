import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";

const Form = styled.div`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  /* margin: 20px 50px ;; */
  display: flex;
  flex-direction: column;
  /* color: white ; */
`;

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{
          color: "red",
          fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
          fontSize: "16px",
          marginTop:"20px"
        }}
        onClick={handleClickOpen}
      >
        Contact Us
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <Form>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "0 5px" }}>Name :</div>
              <input placeholder="Name"></input>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ margin: "0 5px" }}>Name :</div>
              <input placeholder="Name"></input>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ margin: "0 5px" }}>Name :</div>
              <input placeholder="Name"></input>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ margin: "0 5px" }}>Name :</div>
              <input placeholder="Name"></input>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ margin: "0 5px" }}>Name :</div>
              <input placeholder="Name"></input>
            </div>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
