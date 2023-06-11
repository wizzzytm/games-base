import { Link, useRouteError } from "react-router-dom"

export default function GameError() {
    const error = useRouteError()
    return (
        <div className="gameError">
            <h2>Error 404</h2>
            <p>{error.message}</p>
            <Link to="/">Back to the homepage</Link>
        </div>
    )
}