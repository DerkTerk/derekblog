import React from "react";
import "./App.css";
import {ArticlePreview} from "./article/ArticlePreview";
import {AppBar, Stack, Typography} from "@mui/material";

function App() {
  return (
    <><AppBar>
      <img src="./logo192.png" alt="D logo" width={50}/>
      <Typography variant="h4" p={.5}>Derek's Blog</Typography>
    
    </AppBar><Stack spacing={2} justifyContent="center" alignItems="center">
      <ArticlePreview title="Preview The First"/>
    </Stack></>
  );
}

export default App;
