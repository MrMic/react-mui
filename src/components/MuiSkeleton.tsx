import { Avatar, Box, Skeleton, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img src="https://source.unsplash.com/random/256x144" alt="" />
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}
      </Stack>
    </Box>
  );
};

//      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/* <Stack spacing={1} width="250px">
    <Skeleton variant="text" animation="wave" />
    <Skeleton variant="circular" width={40} height={40} animation="wave" />
    <Skeleton
      variant="rectangular"
      width={250}
      height={125}
      animation={false}
    />
  </Stack> */
