import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders Next Trip", () => {
  render(<Header />);
  const header = screen.getByText(/next trip/i);
  expect(header).toBeTruthy();
});
