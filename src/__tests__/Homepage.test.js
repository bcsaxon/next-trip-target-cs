import { render, screen } from "@testing-library/react";
import Homepage from "../components/HomePage";

describe("Homepage Component", () => {
  it("renders dropdown", () => {
    render(<Homepage />);
    const dropdown = screen.getByTestId("dropdown");
    expect(dropdown).toBeTruthy();
  });
});
