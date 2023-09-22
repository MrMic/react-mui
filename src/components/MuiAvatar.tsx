import { Avatar, AvatarGroup, Stack } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>KK</Avatar>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>KK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="MC"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="MD"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 50, height: 50 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", width: 50, height: 50 }}
        >
          KK
        </Avatar>
      </Stack>
    </Stack>
  );
};
