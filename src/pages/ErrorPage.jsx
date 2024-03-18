import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='error-div'>
      <h1 className='error-title'>Oh no, this page does not exist!</h1>
      <Link to='/'>
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  )
}

export default ErrorPage
