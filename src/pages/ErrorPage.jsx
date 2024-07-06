import { Link } from 'react-router-dom'
import '../styles/ErrorPage.css'

const ErrorPage = (props) => {
  return (
    <div className='error-div'>
      <h1 className='error-title'>An error has occured!</h1>

      <h3 className='error-title'>We are hard at work to fix it!</h3>

      <Link className='error-link' to='/'>
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  )
}

export default ErrorPage
