import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <div class="comingSoon">
                <div class="info">
                    <p>Oops! this page does not exist</p>
                    <Link to="/" className="link">Back to Home</Link>
                </div>
            </div>
        </>
    )
};

export default ErrorPage;