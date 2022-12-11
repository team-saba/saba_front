import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { useEffect, useState } from "react";
import { SigningServiceController } from "../controller/signing_controller";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { SettingController } from "../controller/setting";

export default function SettignList() {
  SettingController.getSetting();
  const setting = JSON.parse(localStorage.getItem("setting"));
  const [pw, setPw] = React.useState();
  const CVE_trivy = { inputProps: { "aria-label": "trivy" } };
  const CVE_clair = { inputProps: { "aria-label": "clair" } };
  const AutoScan = { inputProps: { "aria-label": "AutoScan" } };
  const AutoStop = { inputProps: { "aria-label": "AutoStop" } };

  const currencies = [
    {
      value: "1",
      label: "Critical",
    },
    {
      value: "2",
      label: "High",
    },
    {
      value: "3",
      label: "All",
    },
  ];

  // local storage trivy, clair 값 가져오기
  const [trivy, setTrivy] = React.useState(
    localStorage.getItem("trivy") === "true" ? true : false
  );
  const [clair, setClair] = React.useState(
    localStorage.getItem("clair") === "true" ? true : false
  );
  const [AUTO_SCAN, setAUTO_SCAN] = React.useState(
    localStorage.getItem("AUTO_SCAN") === "true" ? true : false
  );
  const [AUTO_STOP, setAUTO_STOP] = React.useState(
    localStorage.getItem("AUTO_STOP") === "true" ? true : false
  );
  const [GIJUN, setGIJUN] = React.useState(
    localStorage.getItem("GIJUN_PER_MINUTE")
  );
  const [HOOK_URL, setHOOK_URL] = React.useState(
    localStorage.getItem("HOOK_URL")
  );
  const [currency, setCurrency] = React.useState(
    localStorage.getItem("VUL_LEVEL")
  );

  // local storage trivy, clair 값 저장하기
  useEffect(() => {
    localStorage.setItem("trivy", trivy);
    localStorage.setItem("clair", clair);
    localStorage.setItem("AUTO_SCAN", AUTO_SCAN);
    localStorage.setItem("AUTO_STOP", AUTO_STOP);
    localStorage.setItem("GIJUN_PER_MINUTE", GIJUN);
    localStorage.setItem("HOOK_URL", HOOK_URL);
    localStorage.setItem("VUL_LEVEL", currency);
  }, [trivy, clair, AUTO_SCAN, AUTO_STOP, GIJUN, HOOK_URL, currency]);

  const handleChangeTrivy = (event) => {
    setTrivy(event.target.checked);
  };
  const handleChangeClair = (event) => {
    setClair(event.target.checked);
  };

  const handleChangeAutoScan = (event) => {
    setAUTO_SCAN(event.target.checked);
    SettingController.updateSetting({
      AUTO_SCAN: event.target.checked,
      AUTO_STOP: AUTO_STOP,
      GIJUN_PER_MINUTE: GIJUN,
      HOOK_URL: HOOK_URL,
      VUL_LEVEL: currency,
    });
  };

  const handleChangeAutoStop = (event) => {
    setAUTO_STOP(event.target.checked);
    SettingController.updateSetting({
      AUTO_SCAN: AUTO_SCAN,
      AUTO_STOP: event.target.checked,
      GIJUN_PER_MINUTE: GIJUN,
      HOOK_URL: HOOK_URL,
      VUL_LEVEL: currency,
    });
  };

  const handleChangeVulnLevel = (event) => {
    setCurrency(event.target.value);
    SettingController.updateSetting({
      AUTO_SCAN: AUTO_SCAN,
      AUTO_STOP: AUTO_STOP,
      GIJUN_PER_MINUTE: GIJUN,
      HOOK_URL: HOOK_URL,
      VUL_LEVEL: event.target.value,
    });
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 1000,
        bgcolor: "background.paper",
        ml: 10,
      }}
      container
      justify="center"
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="내 설정"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {
                "컨테이너 관리 및 사이닝, CVE 분석 관련 설정을 변경하는 페이지입니다."
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar></ListItemAvatar>
        <ListItemText
          primary="CVE관련 설정"
          secondary={
            <React.Fragment>{"CVE 관련 설정 수정 블록입니다."}</React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start" sx={{ height: 100, maxHeight: 300 }}>
        <ListItemAvatar></ListItemAvatar>
        <div>
          <table>
            <tr>
              <td>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  trivy로 취약점 스캔
                </Typography>
              </td>
              <td>
                {" "}
                <Switch
                  {...CVE_trivy}
                  checked={trivy}
                  onChange={handleChangeTrivy}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  clair로 취약점 스캔
                </Typography>
              </td>
              <td>
                {" "}
                <Switch
                  {...CVE_clair}
                  checked={clair}
                  onChange={handleChangeClair}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </td>
            </tr>
          </table>
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar></ListItemAvatar>
        <ListItemText
          primary="사이닝 키 관련 설정 블록"
          secondary={
            <React.Fragment>
              {"사이닝 키 관련 설정 수정 블록입니다."}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start" sx={{ height: 100, maxHeight: 300 }}>
        <ListItemAvatar></ListItemAvatar>
        <div>
          <table>
            <tr>
              <td>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="키 생성/삭제 비밀번호를 입력해주세요."
                  variant="outlined"
                  onChange={(newValue) => setPw(newValue.target.value)}
                  sx={{ mr: 1, width: 300 }}
                />
              </td>
              <td>
                <Button
                  variant="contained"
                  id={"keymodal"}
                  onClick={() => {
                    SigningServiceController.keyGen(pw);
                  }}
                >
                  Generate
                </Button>{" "}
              </td>
              <td>
                <Button
                  variant="contained"
                  color={"error"}
                  onClick={() => {
                    SigningServiceController.keyDel(pw);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          </table>
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
      {/*  scan 기본값 설정*/}
      <ListItem alignItems="flex-start">
        <ListItemAvatar></ListItemAvatar>
        <ListItemText
          primary="스캔 기본값 설정 블록"
          secondary={
            <React.Fragment>
              {"스캔 기본값 설정 수정 블록입니다."}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start" sx={{ height: 500, maxHeight: 600 }}>
        <ListItemAvatar></ListItemAvatar>
        <div>
          <table>
            <tr>
              <td>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  자동 스캔 활성화
                </Typography>
              </td>
              <td>
                {" "}
                <Switch
                  {...AutoScan}
                  checked={AUTO_SCAN}
                  onChange={handleChangeAutoScan}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </td>
            </tr>

            <tr>
              <td>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  컨테이너 자동 중지 활성화
                </Typography>
              </td>
              <td>
                {" "}
                <Switch
                  {...AutoStop}
                  checked={AUTO_STOP}
                  onChange={handleChangeAutoStop}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  스캔 주기(분)
                </Typography>
              </td>
              <td>
                {" "}
                <TextField
                  size="small"
                  id="outlined-basic"
                  label={GIJUN}
                  variant="outlined"
                  onChange={(newValue) =>
                    SettingController.updateSetting({
                      AUTO_SCAN: AUTO_SCAN,
                      AUTO_STOP: AUTO_STOP,
                      GIJUN_PER_MINUTE: newValue.target.value,
                      HOOK_URL: HOOK_URL,
                      VUL_LEVEL: currency,
                    })
                  }
                  sx={{ mr: 1, width: 300 }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Slack Webhook URL
                </Typography>
              </td>
              <td>
                {" "}
                <TextField
                  size="small"
                  id="outlined-basic"
                  label={HOOK_URL}
                  variant="outlined"
                  onChange={(newValue) =>
                    SettingController.updateSetting({
                      AUTO_SCAN: AUTO_SCAN,
                      AUTO_STOP: AUTO_STOP,
                      GIJUN_PER_MINUTE: GIJUN,
                      HOOK_URL: newValue.target.value,
                      VUL_LEVEL: currency,
                    })
                  }
                  sx={{ mr: 1, width: 300 }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Scan level
                </Typography>
              </td>
              <td>
                {" "}
                <TextField
                  select
                  label="Select"
                  value={currency}
                  onChange={handleChangeVulnLevel}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </td>
            </tr>
          </table>
        </div>
      </ListItem>
    </List>
  );
}
