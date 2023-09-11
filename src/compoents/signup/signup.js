import React, {useState} from 'react';
import styles from'./signup.module.css';
import { Link,useNavigate } from 'react-router-dom';
import InputControl from '../inputcontrol/inputcontrol';
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {auth} from '../../firebase';
function Signup() {
  
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name :"",
    email:"",
    pass:"",
  });

  const [errorMsg,setErrorMsg]= useState("");
  const [submitButtonDisabled ,setSubmitButtonDisabled] = useState(false);

  const handleSubmisions = ()=>{
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("Fill all fields!!");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth , values.email , values.pass).then(async(res)=>{
        setSubmitButtonDisabled(false);
        const user = res.user;
        updateProfile(user,{
          displayName:values.name,
        })
        navigate('/');
        console.log(user);
      })
      .catch((err)=>{
        setSubmitButtonDisabled(false)
        setErrorMsg(err.message)
        console.log("ERROR!",err.message)
    });
      console.log(values)
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.innerbox}>
        <img href="#" alt="#" />
        <h1 className={styles.heading}>SignUp</h1>
        <InputControl 
          label="Name" 
          placeholder="Ener Name" 
          onChange={(event) =>
            setValues((prev) => ({ ...prev , name : event.target.value}))}
        />
        <InputControl 
          label="Email" 
          placeholder="Enter email" 
          onChange={(event) =>
            setValues((prev) => ({ ...prev , email : event.target.value }))}
        />

        <InputControl 
          label="Password"
          placeholder="Enter Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev , pass : event.target.value }))}
        />
          

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmisions}
          disabled={submitButtonDisabled}
          >Signup</button>
          <p>
            Already have an account?{" "}
            <span>
            <Link to="/login">LogIn</Link>
            </span>
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default Signup;