// import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";

// import Search from "./../../components/ui/search/Search";

// describe("search component", () => {
//   it("render search field input", () => {
//     render(<Search />);
//     const input = screen.getByTestId("search-input");
//     expect(input).toBeInTheDocument();
//     expect(input).toHaveAttribute("type", "search");
//   });

//   it("pass valid value", async () => {
//     render(<Search />);
//     const input = screen.getByTestId("search-input");
//     userEvent.type(input, "Rick");
//     expect(input).toHaveValue("Rick");
//     expect(await screen.findByTestId("button")).toBeInTheDocument();
//   });
// });
