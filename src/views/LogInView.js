const LogInView = ({ user, handleSubmit, setEmail, setPassword  }) => {
  
    if(user){
        return(
          <div> 
            <p> You are already logged in!</p>
          </div>
        );
      }
      else{
      return (<div>
        <h1>Log In</h1>

        <div>
          <form className='login-form' onSubmit={handleSubmit}>
            <div>
              <label> Email </label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" />
            </div>
            <div>
              <label> Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <button className='login-btn'>Log in</button>
          </form>
        </div>
      </div>
      );
      }
    }
  
  export default LogInView;
  