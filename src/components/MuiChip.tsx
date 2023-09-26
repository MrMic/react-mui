import { Avatar, Chip, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

export const MuiChip = () => {
  return (
    <Stack direction={"row"} spacing={1}>
      <Chip
        label={"Chip 1"}
        color={"primary"}
        size={"small"}
        icon={<FaceIcon />}
      />
      <Chip
        label={"Chip 1 outlined"}
        color={"secondary"}
        size={"small"}
        variant={"outlined"}
        avatar={<Avatar>M</Avatar>}
      />
      <Chip
        label="Click"
        color="success"
        onClick={() => {
          alert("Clicked!");
        }}
      />
      <Chip
        label="Delete"
        color="error"
        onClick={() => {
          alert("Clicked!");
        }}
        onDelete={() => {
          alert("Deleted!");
        }}
      />
      // TODO: Finish Array of Chips
    </Stack>
  );
};
