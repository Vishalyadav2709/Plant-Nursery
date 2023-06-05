import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./login/login.css"
import  "./dialoge.css"

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className='button' style={{marginTop:"25px" , border:"1px solid #1877f2", fontSize:"1rem" , borderRadius:"8px" ,pointer:"cursor", width:"100%",backgroundColor: isHovering ? 'salmon' : '',
            color: isHovering ? 'white' : '',}} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
        Terms & Conditions
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Plant Wonders🌳"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Agree</Button>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
