import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

// smoke 
it('renders without crashing', () => {
  render(<Card />)
})

// snapshot
it("matches snapshot", function() {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });