import React from "react";
import {ArticlePreview} from "./article/ArticlePreview";
import {Stack} from "@mui/material";

function Home() {
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <ArticlePreview title="Preview The First"/>
    </Stack>
  );
}

export default Home;