/* eslint-disable */
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { IconButton } from "@mui/material";

function VerifiedUserIcon(props: { style: { color: string } }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function check(verified) {
  if (verified === true) {
    return (
      <IconButton aria-label="verified">
        <VerifiedUserIcon style={{ color: "green" }} />
      </IconButton>
    );
  } else {
    return (
      <IconButton aria-label="not verified">
        <VerifiedUserIcon style={{ color: "red" }} />
      </IconButton>
    );
  }
}


export { VerifiedUserIcon, check}