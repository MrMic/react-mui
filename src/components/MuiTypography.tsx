import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4" component={"h1"} gutterBottom>
        H4 Heading
      </Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      <Typography variant="subtitle1">SubTitle 1</Typography>
      <Typography variant="subtitle2">SubTitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        similique ad commodi ut? Molestiae rerum, laboriosam in consequuntur
        neque, quos voluptatum tempora itaque, veritatis esse temporibus
        ratione? Recusandae, id error.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam nisi
        at repellat. Maxime dicta corrupti iste inventore repellendus natus quam
        explicabo omnis quo optio nihil, in numquam ut esse?
      </Typography>
    </div>
  );
};
