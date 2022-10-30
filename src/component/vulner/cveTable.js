import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";

const columns = [
  { id: "CVE_number", label: "CVE_number", minWidth: 170 },
  { id: "Package", label: "Package", minWidth: 100 },
  { id: "Security", label: "Security", minWidth: 100 },
  { id: "Description", label: "Description", minWidth: 100 },
];

function createData(CVE_number, Package, Security, Description) {
  return { CVE_number, Package, Security, Description };
}
const rows = [
  createData(
    "CVE-2022-15505",
    "linux:4.19.67- 2+dev 10u2",
    "Critical",
    "drives/media/usb/dvd-usb/ technisat-sub2.c in the Linux kernel throung 5.2.9 has an out-of -bounds read via crafted USB device traffic(which may be remote via usbip or usbredir)"
  ),
  createData(
    "CVE-2022-15505",
    "linux:4.19.67- 2+dev 10u2",
    "Critical",
    "drives/media/usb/dvd-usb/ technisat-sub2.c in the Linux kernel throung 5.2.9 has an out-of -bounds read via crafted USB device traffic(which may be remote via usbip or usbredir)"
  ),
  createData(
    "CVE-2022-15505",
    "linux:4.19.67- 2+dev 10u2",
    "Critical",
    "drives/media/usb/dvd-usb/ technisat-sub2.c in the Linux kernel throung 5.2.9 has an out-of -bounds read via crafted USB device traffic(which may be remote via usbip or usbredir)"
  ),
  createData(
    "CVE-2022-15505",
    "linux:4.19.67- 2+dev 10u2",
    "Critical",
    "drives/media/usb/dvd-usb/ technisat-sub2.c in the Linux kernel throung 5.2.9 has an out-of -bounds read via crafted USB device traffic(which may be remote via usbip or usbredir)"
  ),
  createData(
    "CVE-2022-15505",
    "linux:4.19.67- 2+dev 10u2",
    "Critical",
    "drives/media/usb/dvd-usb/ technisat-sub2.c in the Linux kernel throung 5.2.9 has an out-of -bounds read via crafted USB device traffic(which may be remote via usbip or usbredir)"
  ),
  createData(
    "CVE-2022-15505",
    "linux:4.19.67- 2+dev 10u2",
    "Critical",
    "drives/media/usb/dvd-usb/ technisat-sub2.c in the Linux kernel throung 5.2.9 has an out-of -bounds read via crafted USB device traffic(which may be remote via usbip or usbredir)"
  ),
  createData(
    "CVE-2022-15505",
    "linux:4.19.67- 2+dev 10u2",
    "Critical",
    "drives/media/usb/dvd-usb/ technisat-sub2.c in the Linux kernel throung 5.2.9 has an out-of -bounds read via crafted USB device traffic(which may be remote via usbip or usbredir)"
  ),
];

export default function CveTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const style = {
    margin: 10,
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 230 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead align="right">
            <TableRow align="right" style={{ align: "right" }}>
              <TextField
                id="standard-basic"
                label="search"
                variant="standard"
                align="right"
              />
            </TableRow>
          </TableHead>

          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
