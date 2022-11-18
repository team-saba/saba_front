import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import { VulnData } from "../element";

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

export default function VulnModal(props) {
  let { handleOpen, open, result } = props;
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
                <strong>vuln</strong>
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
              {/* <h5>{result}</h5> */}
              <VulnData result={result}></VulnData>
            </Typography>
          </Box>
          <Box sx={{ display: "inline", botton: "10%" }}></Box>
        </Grid>
      </Modal>
    </div>
  );
}
