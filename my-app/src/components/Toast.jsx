import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const Toast = () => {

  return (
    <Stack
        sx={{
          width: "40%",
          alignItems: "center",
          margin: "auto",
        }}
        spacing={2}
      >
        <Alert severity="success">
          <AlertTitle>
            <strong>完了しました！</strong>
          </AlertTitle>
        </Alert>
      </Stack>
  );
};

export default Toast;


