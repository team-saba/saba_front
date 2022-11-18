/* eslint-disable */
import * as React from "react";
import Button from "@mui/material/Button";
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

function isRunning(status) {
  console.log(status);
  if (status === "RUNNING") {
    return (
      <Button size="small" color="success" variant="contained">
        {status}
      </Button>
    );
  } else {
    return (
      <Button size="small" color="error" variant="contained">
        {status}
      </Button>
    );
  }
}

function checkNull(value) {
  if (typeof value == "undefined" || value == null || value == "") return true;
  else false;
}

// [
//   {
//     critical: {
//       identity: { "docker-reference": "regi.seungwook.me/sha256" },
//       image: {
//         "docker-manifest-digest":
//           "sha256:5ca850e6b7d0e124c4d87e2e75c351f158b3ac4fc314350939aab837ad5ecd58",
//       },
//       type: "cosign container image signature",
//     },
//     optional: null,
//   },
// ];

function SigningData(props) {
  const result = props.result;
  if (result) {
    const resJson = JSON.parse(result)[0];
    let {
      critical: { identity, image, type },
      optional,
    } = resJson;
    if (!optional) optional = "None";
    return (
      <>
        <table style={{ width: 100, border: 1 }}>
          <tr>
            <td>
              <strong>identity</strong>
            </td>
            <td>{identity["docker-reference"]}</td>
          </tr>
          <tr>
            <td>
              <strong>image</strong>
            </td>
            <td>{image["docker-manifest-digest"].slice(0, 30)}</td>
          </tr>
          <tr>
            <td>
              <strong>type</strong>
            </td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>
              <strong>optional</strong>
            </td>
            <td>{optional}</td>
          </tr>
        </table>
      </>
    );
  } else {
    return <></>;
  }
}

export { VerifiedUserIcon, check, isRunning, checkNull, SigningData };
