import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("lazy widget loads", async () => {
  render(<App />);
  await userEvent.click(screen.getByRole("button", { name: /load lazy widget/i }));
  expect(await screen.findByTestId("lazy-widget")).toBeInTheDocument();
});
