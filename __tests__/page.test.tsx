import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("home", () => {
  it("텍스트가 있으냐 없느냐", () => {
    render(<Home />);
    const heading = screen.getByText(/Get started by editing/i);

    expect(heading).toBeInTheDocument();
  });
});
