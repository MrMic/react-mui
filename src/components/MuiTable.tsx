import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="center">IP Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {<TableCell>{row.id}</TableCell>}
              <TableCell>{row.first_name}</TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="center">{row.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const TableData = [
  {
    id: 1,
    first_name: "Cherry",
    last_name: "Punchard",
    email: "cpunchard0@ed.gov",
    gender: "Female",
    ip_address: "56.3.67.216",
  },
  {
    id: 2,
    first_name: "Ichabod",
    last_name: "Sehorsch",
    email: "isehorsch1@feedburner.com",
    gender: "Male",
    ip_address: "59.135.10.39",
  },
  {
    id: 3,
    first_name: "Lynnet",
    last_name: "Mac Giany",
    email: "lmacgiany2@fastcompany.com",
    gender: "Female",
    ip_address: "7.63.27.253",
  },
  {
    id: 4,
    first_name: "Brittany",
    last_name: "Piell",
    email: "bpiell3@cam.ac.uk",
    gender: "Female",
    ip_address: "85.18.11.170",
  },
  {
    id: 5,
    first_name: "Roy",
    last_name: "Broz",
    email: "rbroz4@joomla.org",
    gender: "Agender",
    ip_address: "202.203.58.145",
  },
  {
    id: 6,
    first_name: "Radcliffe",
    last_name: "Gierke",
    email: "rgierke5@amazon.co.jp",
    gender: "Male",
    ip_address: "235.216.74.117",
  },
  {
    id: 7,
    first_name: "Stacy",
    last_name: "Bouchard",
    email: "sbouchard6@360.cn",
    gender: "Male",
    ip_address: "158.6.2.193",
  },
  {
    id: 8,
    first_name: "Lance",
    last_name: "Trett",
    email: "ltrett7@booking.com",
    gender: "Male",
    ip_address: "133.12.239.194",
  },
  {
    id: 9,
    first_name: "Jerri",
    last_name: "Plesing",
    email: "jplesing8@sfgate.com",
    gender: "Bigender",
    ip_address: "160.108.211.110",
  },
  {
    id: 10,
    first_name: "Nolie",
    last_name: "Finlayson",
    email: "nfinlayson9@usnews.com",
    gender: "Female",
    ip_address: "126.210.29.211",
  },
];
