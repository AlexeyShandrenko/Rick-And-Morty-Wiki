import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Footer from "../../components/Footer/Footer";

describe('footer component', () => {
    it('displays me', () => {
        render(<Footer />);
        expect(screen.getByText('Alexey Shandrenko')).toBeInTheDocument();
    });
});