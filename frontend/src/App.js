import { AppBar, Typography } from "@material-ui/core";
import React from "react";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import Videoplayer from "./components/Videoplayer";

const App = () => {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Video Call App</Typography>
      </AppBar>
      <Videoplayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
