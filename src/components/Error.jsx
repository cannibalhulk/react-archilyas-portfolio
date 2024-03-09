import '../Error.css'
import error from '../images/error.png'

export default function Error() {
  return (
    <div className="container">
      <img src={error} className='error' alt="error" />
      <h1 className='message'>Oppps! Xəta baş verdi.</h1>
    </div>
  )
}
