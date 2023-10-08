import { Alert, AlertProps, Button, Snackbar } from "@mui/material";
import { forwardRef, useState } from "react";

// Custom Snackbar component
const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} {...props} ref={ref} />;
  },
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form submitted successfully!"
        autoHideDuration={2000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      /> */}

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
