import {Link} from 'react-router-dom';;
import {useRef, useState} from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios_client';

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const {setUser,setToken} = useStateContext();
  const [error, setError] = useState(null);
  // const [message, setMessage] = useState(null);


  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    //  console.log(payload);



    axiosClient.post('/login', payload)
    .then(({data})=>{

       setToken(data.token);
       setUser(data.user);

    }).catch((err)=>{

       const response = err.response;
      console.log(response);
        if(response && response.status === 422){
          // console.log(response.data.errors);
          if(response.data.errors){
            setError(response.data.errors);
          }else{
            const errMess = { "email": [response.data.message] }
            setError(errMess);
          }

        }else{

          // console.log(response.data.message);
          const errMess = { "email": [response.data.message] }
            setError(errMess);
        }

        //  sconsole.log(error);
    })

    // console.log(axiosClient.getUri())

  }
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <h1 className="title">Login into your account</h1>
        {
          error && <div  className='alert'>
          {Object.keys(error).map((key, index) => ( <p key={index}>{error[key]}</p>))}
          </div>
        }
        {/* {error? null : message && <div  className='alert'>{message}</div>} */}
        <form onSubmit={onSubmit}>
          <input ref={emailRef} type="text" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button type="submit" className="btn btn-block">Login</button>
          <p className="message">Not registered? <Link to="/signup">Create an Account </Link></p>
         </form>
      </div>
    </div>
  )
}
