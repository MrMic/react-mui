import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";
import { useState } from "react";

export const MuiSwitch = () => {
  //      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // const [checked, setChecked] = useState(false);
  // console.log({ checked });

  //      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const [config, setConfig] = useState("");
  const handleConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfig((prev) => (prev == event.target.value ? "" : event.target.value));
  };
  console.log({ config });

  //      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  return (
    <Box>
      <FormControl>
        <FormLabel>Display config</FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="Dark mode"
            control={
              <Switch
                value="darkMode"
                size="small"
                checked={config.includes("darkMode")}
                onChange={handleConfig}
              />
            }
          />
          <FormControlLabel
            label="Light mode"
            control={
              <Switch
                value="lightMode"
                size="small"
                checked={config.includes("lightMode")}
                onChange={handleConfig}
              />
            }
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
