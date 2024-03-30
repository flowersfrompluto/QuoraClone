import { NavLink } from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <div class="comingSoon">
                <div class="info">
                    <p>Oops! this page does not exist</p>
                    <NavLink to="/" className="link">Back to Home</NavLink>
                </div>
            </div>
        </>
    )
};

export default ErrorPage;