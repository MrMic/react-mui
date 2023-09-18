import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  const [viewer, setViewer] = useState(false);
  const handleVisibility = () => {
    setViewer((prev) => !prev);
  };

  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <TextField label="Name - outlined" variant="outlined" />
        <TextField label="Name - filled" variant="filled" />
        <TextField label="Name - standard" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do NOT share your password"}
        />
        <TextField
          label="Password"
          type={"password"}
          helperText="Do NOT share your password"
          disabled
        />
        <TextField
          label="password"
          type={viewer ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleVisibility}>
                {viewer ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </InputAdornment>
            ),
          }}
        />
        <TextField label="Read Only" inputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
