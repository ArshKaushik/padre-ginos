import { Link } from "@tanstack/react-router";
import { Component } from "react";

class ErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught some error", error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h1>Uh oh!</h1>
                    <p>
                        There was an error with this page.{" "}
                        <Link to="/">Click here</Link> to go back to the home
                        page.
                    </p>
                </div>
            );
        }
        return this.props.ErrorBoundary;
    }
}

export default ErrorBoundary;
