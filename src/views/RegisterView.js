import { Link } from 'react-router-dom';
import './styles.css'

const RegisterView = ({ user, setEmail, setPassword, handleSubmit  }) => {
  
  if(user){
    if(user){
      return(
        <div> 
          <p> You are already logged in!</p>
        </div>
      );
    }
  }

  return (<div>
    <h1>Log In/Register</h1>
    <div>
      <p>Already have an account? <Link class="my-link" to='/LogIn'>Log in</Link> </p>
    </div>


    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Register: </p>
        </div>
        <div>
          <label> Email </label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <div>
          <label> Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>
        <button>Register</button>
      </form>
    </div>
  </div>
  );
}
  
export default RegisterView;