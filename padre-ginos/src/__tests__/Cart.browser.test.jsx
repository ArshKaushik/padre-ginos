import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";

test("snapshot with nothing in cart", async () => {
    const { asFragment } = render(<Cart cart={[]} />);
    expect(asFragment()).toMatchSnapshot();
});
