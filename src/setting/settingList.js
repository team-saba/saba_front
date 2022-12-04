import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { useEffect } from "react";
import { SigningServiceController } from "../controller/signing_controller";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function SettignList() {
  const [pw, setPw] = React.useState();

  const CVE_trivy = { inputProps: { "aria-label": "trivy" } };
  const CVE_clair = { inputProps: { "aria-label": "clair" } };

  // local storage trivy, clair 값 가져오기
  const [trivy, setTrivy] = React.useState(
    localStorage.getItem("trivy") === "true" ? true : false
  );
  const [clair, setClair] = React.useState(
    localStorage.getItem("clair") === "true" ? true : false
  );

  // local storage trivy, clair 값 저장하기
  useEffect(() => {
    localStorage.setItem("trivy", trivy);
    localStorage.setItem("clair", clair);
  }, [trivy, clair]);

  // swich lavel CVE_trivy, CVE_clair 값 변경
  const handleChangeTrivy = (event) => {
    setTrivy(event.target.checked);
  };
  const handleChangeClair = (event) => {
    setClair(event.target.checked);
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
    </List>
  );
}
