import React from 'react'
import './notFound.css'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <main className='container-page-not-found'>
      <div>
        <p className='status-code'>404</p>
        <h1>Page not found</h1>
        <p className='message'>Sorry, we couldn’t find the page you’re looking for.</p>
        <Link to='/' className='btn btn-primary'>
          Go back home
        </Link>

      </div>
    </main>
  )
}

export default NotFound
