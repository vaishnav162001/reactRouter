import React from 'react'

export const ErrorPage = () => {
  return (
    <div id='error-page'>
    <h1>Oops!</h1>
    <p>Sorry. an unexcepted error has occurred.</p>
    <i>{error.statusText || error.message}</i>
</div>
  )
}
