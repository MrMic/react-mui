import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error" onClose={() => alert("Close it!")}>
        <AlertTitle>Error Alert</AlertTitle>This is a warning alert
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning Alert</AlertTitle>This is a warning alert
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info Alert</AlertTitle>This is a info alert
      </Alert>
      <Alert
        severity="success"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success Alert</AlertTitle>This is a success alert
      </Alert>

      <Alert variant="outlined" severity="error">
        This is a warning alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is a warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is a info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is a success alert
      </Alert>

      <Alert variant="filled" severity="error">
        This is a warning alert
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        This is a info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
      >
        This is a success alert
      </Alert>
    </Stack>
  );
};
