import {AppBar, Stack, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";


export default function MyAppBar() {
  return <AppBar position="sticky">
    <Stack direction="row" gap={1} alignItems="center">
      <img src="./logo192.png" alt="D logo" width={50}/>
      <Typography variant="h4" p={.5}>Derek's Blog</Typography>
      <Link to="/banana">link1</Link>
      {/*<Link sx={{color: "#ffffff"}}>link2</Link>*/}
      {/*<Link sx={{color: "#ffffff"}}>link3</Link>*/}
    </Stack>
  
  
  </AppBar>;
}