import * as React from 'react'
import { Link } from 'gatsby'

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>¡No encontramos lo que buscas!</h1>
      <p>
        Lo sentimos{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        no tenemos la página que buscas.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Regresa al inicio</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
