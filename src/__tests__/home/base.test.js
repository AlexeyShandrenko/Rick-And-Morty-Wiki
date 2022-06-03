import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  HOME_ABOUT,
  HOME_HIGHLIGHT,
  HOME_DESCRIPTION,
} from "../../config/constants/constants";
import Home from "../../components/Home/Home";

describe("home page", () => {
  it("renders constants", () => {
    const { getByTestId } = render(<Home />);
    const aboutText = getByTestId("home-about");
    const highlightText = getByTestId("home-highlight");
    const descriptionText = getByTestId("home-description");
    expect(aboutText).toHaveTextContent(HOME_ABOUT);
    expect(highlightText).toHaveTextContent(HOME_HIGHLIGHT);
    expect(descriptionText).toHaveTextContent(HOME_DESCRIPTION);
  });
  it("renders list", () => {
    const { getByTestId } = render(<Home />);
    const genre = getByTestId("genre");
    const authors = getByTestId("authors");
    const directors = getByTestId("directors");
    expect(genre).toBeInTheDocument();
    expect(authors).toBeInTheDocument();
    expect(directors).toBeInTheDocument();
    expect(genre).toHaveTextContent("Comedy, Science Fiction, Adventure");
    expect(authors).toHaveTextContent("Dan Harmon, Justin Roiland");
    expect(directors).toHaveTextContent(
      "Jeff Myers, Brian Newton, John Rice, Justin Royland"
    );
  });
});
