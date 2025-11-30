import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App integration", () => {
  test("shows modal when clicking Open Modal", async () => {
    render(<App />);
    await userEvent.click(screen.getByRole("button", { name: /open modal/i }));
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  test("loads data when clicking Load Data", async () => {
    render(<App />);
    await userEvent.click(screen.getByRole("button", { name: /load data/i }));
    expect(await screen.findByText(/Loaded at/i)).toBeInTheDocument();
  });
});
