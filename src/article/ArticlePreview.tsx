import { Typography } from "@mui/material";

type ArticlePreviewProps = {
  title: string;
};

export const ArticlePreview = (props: ArticlePreviewProps) => {
  const { title } = props;
  return <Typography variant="h3">{title}</Typography>;
};
