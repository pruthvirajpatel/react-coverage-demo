import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("loads lazy widget", async () => {
  render(<App />);

  const loadBtn = screen.getByRole("button", { name: /Load Lazy Widget/i });

  // Explicitly wrap the click and async import in act
  await act(async () => {
    await userEvent.click(loadBtn);
  });

  expect(await screen.findByText("Lazy Widget Loaded")).toBeInTheDocument();
});
