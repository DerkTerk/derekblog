import React from "react";
import "./App.css";
import {ArticlePreview} from "./article/ArticlePreview";
import {Stack} from "@mui/material";
import MyAppBar from "./MyAppBar/MyAppBar";


function App() {
  return (
    <><MyAppBar/>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <ArticlePreview title="Preview The First"/>
      </Stack>
    </>
  );
}

export default App;
