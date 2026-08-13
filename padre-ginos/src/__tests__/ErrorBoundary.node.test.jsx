import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import { RouterProvider, createRouter, createRootRoute } from "@tanstack/react-router";
import ErrorBoundary from "../ErrorBoundary";

afterEach(cleanup);

test("renders its children when nothing throws", async () => {
    const screen = render(
        <ErrorBoundary>
            <h2>Past Orders</h2>
        </ErrorBoundary>,
    );

    expect(screen.getByText("Past Orders")).toBeTruthy();
});

test("renders the fallback when a child throws", async () => {
    function Boom() {
        throw new Error("boom");
    }

    // ErrorBoundary's fallback renders a router <Link>, so it needs a router.
    const rootRoute = createRootRoute({
        component: () => (
            <ErrorBoundary>
                <Boom />
            </ErrorBoundary>
        ),
    });
    const router = createRouter({ routeTree: rootRoute });

    const screen = render(<RouterProvider router={router} />);

    expect(await screen.findByText("Uh oh!")).toBeTruthy();
});
