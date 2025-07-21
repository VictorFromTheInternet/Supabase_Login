import React from 'react'
import { createBrowserRouter, RouterProvider, Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError()
    console.error(error)
  
    return (
    <div>
        <h1>Opps! an error has occured:</h1>
        <p>
            {error.status} - {error.statusText || error.statusMessage}
        </p>
        <Link to="/">Back to Home</Link>
    </div>
  )
}

export default ErrorPage
