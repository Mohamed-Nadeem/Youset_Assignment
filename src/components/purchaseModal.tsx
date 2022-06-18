import * as React from 'react';
import { Box, Button, Typography, Modal, TextField} from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 1,
    backgroundColor: '#EAEAEA',
    boxShadow: 24,
    p: 4,
  };

  interface packageModalProps {
    open: boolean;
  };
  
  export default function purchaseModal({ open }: packageModalProps) {
    const [openModal, setOpenModal] = React.useState(false);
    const [firstLoad, setFirstLoad] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpenModal(false);
        window.location.href = "https://www.example.com";
        return null;
    };

    React.useEffect(() => {
        if (firstLoad == false && open == true) {
            setOpenModal(open);
            setFirstLoad(true);
        }
      });
    
    return (
      <div>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Please Enter Your Details:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField label="Email:" variant="standard" color="secondary" focused />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField label="Age:" variant="standard" color="secondary" focused />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField label="Gender:" variant="standard" color="secondary" focused />
            </Typography>
            <Button sx={{ marginTop: "2%"}} variant="contained" onClick={handleClose}>Done</Button>
          </Box>
        </Modal>
      </div>
    );
  }