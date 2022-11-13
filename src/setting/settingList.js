import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

export default function SettignList() {
  const CVE_trivy = { inputProps: { "aria-label": "trivy" } };
  const CVE_clair = { inputProps: { "aria-label": "clair" } };
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 1000,
        bgcolor: "background.paper",
        ml: 50,
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
      <ListItem alignItems="flex-start" sx={{ height: 300, maxHeight: 1000 }}>
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
                <Switch label={CVE_trivy} defaultChecked />
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
                <Switch label={CVE_clair} defaultChecked />
              </td>
            </tr>
          </table>
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" sx={{ height: 300, maxHeight: 1000 }}>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText
          primary="사이닝 관련 설정"
          secondary={
            <React.Fragment>
              {"사이닝 관련 설정 수정 블록입니다."}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
