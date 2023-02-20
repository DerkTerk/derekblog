import React from "react";
import { render, screen } from "@testing-library/react";
import { ArticlePreview } from "./ArticlePreview";

test("article title renders", () => {
  render(<ArticlePreview title="preview" />);
  screen.getByRole("heading", { name: /preview/i });
});
