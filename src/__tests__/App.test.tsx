import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App integration", () => {
  test("shows modal when clicking Open Modal", async () => {
    render(<App />);

    // Wrap state update in act
    await act(async () => {
      await userEvent.click(
        screen.getByRole("button", { name: /open modal/i })
      );
    });

    expect(screen.getByTestId("modal")).toBeInTheDocument();

    // Close modal and check
    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: /close/i }));
    });

    expect(screen.queryByTestId("modal")).toBeNull();
  });

  test("loads data when clicking Load Data", async () => {
    render(<App />);

    // Wrap click in act
    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: /load data/i }));
    });

    // Flexible text matcher
    expect(
      await screen.findByText((content) => content.includes("Loaded at"))
    ).toBeInTheDocument();
  });

  test("renders App correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  test("renders App correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
