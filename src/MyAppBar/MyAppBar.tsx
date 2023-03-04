import {AppBar, Link, Stack, Typography} from "@mui/material";
import React from "react";

export default function MyAppBar() {
  return <AppBar>
    <Stack direction="row" gap={1} alignItems="center">
      <img src="./logo192.png" alt="D logo" width={50}/>
      <Typography variant="h4" p={.5}>Derek's Blog</Typography>
      <Link sx={{color: "#ffffff"}}>link1</Link>
      <Link sx={{color: "#ffffff"}}>link2</Link>
      <Link sx={{color: "#ffffff"}}>link3</Link>
    </Stack>
  
  
  </AppBar>;
}