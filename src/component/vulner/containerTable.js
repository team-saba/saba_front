import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import { VerifiedUserIcon } from "../element";
import { useEffect, useState } from "react";
import { VulnerServiceController } from "../../controller/vulner_controller";

export default function ContainerTable() {
  const [scanList, setScanList] = useState([]);
  const [QueueList, setQueueList] = useState([]);

  const [loading, setLoading] = useState(true);

  const [trivy] = React.useState(
    localStorage.getItem("trivy") === "true" ? true : false
  );
  const [clair] = React.useState(
    localStorage.getItem("clair") === "true" ? true : false
  );

  const columns = [
    {
      field: "Name",
      headerName: "Name",
      width: 250,
      renderCell: (params) => {
        if (params.row.vulnerability != null) {
          var scan_result = params.row.vulnerability;
          var Critical = 0,
            High = 0,
            Medium = 0,
            Low = 0,
            Unknown = 0;
          for (var i = 0; i < scan_result.length; i++) {
            if (scan_result[i].severity === "CRITICAL") {
              Critical++;
            } else if (scan_result[i].severity === "HIGH") {
              High++;
            } else if (scan_result[i].severity === "MEDIUM") {
              Medium++;
            } else if (scan_result[i].severity === "LOW") {
              Low++;
            } else if (scan_result[i].severity === "UNKNOWN") {
              Unknown++;
            }
          }
          var sumOfVuln = Critical + High + Medium + Low + Unknown;
          if (sumOfVuln == 0) {
            return <p style={{ color: "green" }}>{params.row.Name}</p>;
          } else {
            return (
              <a
                href={"/cve/?imageId=" + params.row.Name}
                onClick={() => {
                  localStorage.setItem("test", JSON.stringify(params.row));
                }}
              >
                {params.row.Name}
              </a>
            );
          }
        }
      },
    },
    {
      field: "Used",
      headerName: "Used",
      width: 100,
      renderCell: (params) => {
        if (params.formattedValue === "True") {
          return (
            <Button size="small" variant="contained" color="primary">
              Used
            </Button>
          );
        } else {
          return (
            <Button size="small" variant="contained" color="warning">
              Unused
            </Button>
          );
        }
      },
    },
    {
      field: "RepoTags",
      headerName: "RepoTags",
      width: 200,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={1}>
            {params.value.map((tag) => (
              <div key={tag} style={{ fontSize: "12px" }}>
                {tag + "\n"}
              </div>
            ))}
          </Stack>
        );
      },
    },
    {
      field: "Size",
      headerName: "Size",
      width: 100,
      renderCell: (params) => {
        return (
          //  653899526 to 653.899526 MB
          <div>{(params.formattedValue / 1000000).toFixed(2)} MB</div>
        );
      },
    },
    {
      field: "isSigned",
      headerName: "isSigned",
      width: 100,
      renderCell: (params) => {
        if (params.formattedValue === "true") {
          return (
            <IconButton aria-label="verified">
              <VerifiedUserIcon style={{ color: "green" }} />
            </IconButton>
          );
        } else {
          return (
            <IconButton aria-label="verified">
              <VerifiedUserIcon style={{ color: "red" }} />
            </IconButton>
          );
        }
      },
    },
    {
      field: "vulnerability",
      headerName: "vulnerability",
      width: 100,
      renderCell: (params) => {
        // QueueList = [{'uuid': 'uuid', 'imageId': 'imageId'},{'uuid': 'uuid', 'imageId': 'imageId'}]
        if (params.row.state === "scanning") {
          return (
            <Button size="small" variant="contained" color="success">
              Scanning
            </Button>
          );
        } else {
          if (params.value == null) {
            return (
              <Button
                id={params.row.Name}
                className="scanBtn"
                size="small"
                variant="contained"
                color="primary"
                onClick={() => {
                  if (trivy === false && clair === false) {
                    alert("Please select a scanner > setting");
                  } else {
                    VulnerServiceController.scanImage(
                      params.row.Name,
                      trivy,
                      clair
                    );
                    const btnElement = document.getElementById(params.row.Name);
                    // 버튼 scan 에서 실행중으로 변경
                    btnElement.innerText = "Scanning";
                    btnElement.color = "success";
                  }
                }}
              >
                scan
              </Button>
            );
          } else {
            return (
              <IconButton
                aria-label="verified"
                onClick={() => {
                  alert("스캔 기능 넣을 예정\n*무지성 클릭 방지");
                }}
              >
                <VerifiedUserIcon style={{ color: "red" }} />
              </IconButton>
            );
          }
        }
      },
    },
    {
      field: "vulner",
      headerName: "vulner",
      width: 500,
      renderCell: (params) => {
        if (params.row.vulnerability != null) {
          //vulnerability scan_result[i] Severity count
          var scan_result = params.row.vulnerability;
          var Critical = 0;
          var High = 0;
          var Medium = 0;
          var Low = 0;
          var Unknown = 0;
          for (var i = 0; i < scan_result.length; i++) {
            if (scan_result[i].severity === "CRITICAL") {
              Critical++;
            } else if (scan_result[i].severity === "HIGH") {
              High++;
            } else if (scan_result[i].severity === "MEDIUM") {
              Medium++;
            } else if (scan_result[i].severity === "LOW") {
              Low++;
            } else if (scan_result[i].severity === "UNKNOWN") {
              Unknown++;
            }
          }
          return (
            <Stack direction="row" spacing={2}>
              <Button size="small" color="error" variant="contained">
                Critical {Critical}
              </Button>
              <Button size="small" color="warning" variant="contained">
                High {High}
              </Button>
              <Button size="small" color="success" variant="contained">
                Medium {Medium}
              </Button>
              <Button size="small" color="primary" variant="contained">
                Low {Low}
              </Button>
              <Button size="small" color="inherit" variant="contained">
                ETC {Unknown}
              </Button>
            </Stack>
          );
        }
      },
    },
    {
      field: "Created",
      headerName: "Created",
      width: 150,
      renderCell: (params) => {
        return (
          //  time format
          <div>{new Date(params.formattedValue).toLocaleString()}</div>
        );
      },
    },
    {
      field: "scan_date",
      headerName: "scan_date",
      width: 150,
      renderCell: (params) => {
        return <div>{params.formattedValue}</div>;
      },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      VulnerServiceController.scanQueueList().then(({ QueueList }) => {
        setQueueList(QueueList);
      });
      VulnerServiceController.scanList().then(({ scanList }) => {
        setScanList(scanList);
        setLoading(false);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const init = async () => {
      await VulnerServiceController.scanQueueList().then(({ QueueList }) => {
        setQueueList(QueueList);
      });
      await VulnerServiceController.scanList().then(({ scanList }) => {
        setScanList(scanList);
        setLoading(false);
      });
    };

    init();
  }, []);

  for (var i = 0; i < QueueList.length; i++) {
    for (var j = 0; j < scanList.length; j++) {
      if (QueueList[i].imageId === scanList[j].Name) {
        scanList[j].state = "scanning";
      }
    }
  }

  if (loading) return <div>로딩중...</div>;

  return (
    <div style={{ height: 715, width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rowHeight={60}
        rows={scanList}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
}
