import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputElement from "../CustomInput";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #fffff",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function SigningModal(props) {
  const { handleOpen, open } = props;
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(open);
  }, [open]);
  const handleClose = () => {
    setOpen(false);
    handleOpen();
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid sx={style} container justify="center">
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h3>
                <strong>signing</strong>
              </h3>
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 8,
              mb: 8,
              display: "inline",
              mx: 0.5,
            }}
          >
            <Typography id="modal-modal-description" sx={{ m: 2 }}>
              <h5>레포지터리 이름</h5>
              <InputElement></InputElement>
            </Typography>
            <Typography id="modal-modal-description" sx={{ m: 2 }}>
              <h5>태그</h5>
              <InputElement></InputElement>
            </Typography>
            <Typography id="modal-modal-description" sx={{ m: 2 }}>
              <h5>키</h5>
              <InputElement></InputElement>
            </Typography>
          </Box>
          <Box sx={{ display: "inline", botton: "10%" }}>
            <Button size="medium" color="primary" variant="contained">
              사이닝
            </Button>
          </Box>
        </Grid>
      </Modal>
    </div>
  );
}
