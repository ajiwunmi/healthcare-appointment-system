import { useRef , useState} from 'react';
import {Link} from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios_client';



export default function Signup() {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const {setUser,setToken} = useStateContext();
  const [error, setError] = useState(null);

  const onSubmit = (e) => {

    setError(null);
    e.preventDefault();

    const payload ={
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value
    }

    // console.log(payload);
    axiosClient.post('/signup', payload)
      .then(({data})=> {

        setToken(data.token);
        setUser(data.user);

      })
      .catch(error => {
        //  console.log(response.data.errors);
        const response = error.response;
        if(response && response.status === 422){
          console.log(response.data.errors);
          setError(response.data.errors);
        }
    });

}


return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <h1 className="title">Create an account</h1>
        {
          error && <div  className='alert'>
          {Object.keys(error).map((key, index) => ( <p key={index}>{error[key]}</p>))}
          </div>
        }
        <form onSubmit={onSubmit}>
          <input ref={nameRef}  type="text" placeholder="Full name" />
          <input ref={emailRef} type="text" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <input ref={passwordConfirmationRef} type="password" placeholder="Cornfirm Password" />
          <button type="submit" className="btn btn-block">Signup</button>
          <p className="message">Already registered? <Link to="/login">Login </Link></p>
         </form>
      </div>
    </div>
  )
}
