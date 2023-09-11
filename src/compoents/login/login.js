import React,{useState} from "react";
import styles from "./login.module.css";
import InputControl from "../inputcontrol/inputcontrol";
import { signInWithEmailAndPassword} from "firebase/auth";
import { Link ,useNavigate} from 'react-router-dom';
import { auth } from "../../firebase";
import firebase from "firebase/compat/app"
function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email:"",
    pass:"",
  });

  const [errorMsg,setErrorMsg]= useState("");
  const [submitButtonDisabled ,setsubmitButtonDisabled] = useState(false);

  const handleSubmisions = ()=>{
    if(!values.email || !values.pass){
      setErrorMsg("Fill all fields!!");
      return;
    }
    setErrorMsg("");
    setsubmitButtonDisabled(true);
   signInWithEmailAndPassword(auth , values.email , values.pass).then(async(res)=>{
        setsubmitButtonDisabled(false);
        
        navigate('/');
        const user = firebase.auth().currentUser;
        if(user){
          user.getIdToken().then((token) => {
            console.log("JWT TOKEN: ", token);
          });
        }
      })
      .catch((err)=>{
        setsubmitButtonDisabled(false)
        setErrorMsg(err.message)
        console.log("ERROR!",err.message)
    });
      console.log(values)
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerbox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl label="Email" placeholder="Enter email"
        onChange={(event) =>
          setValues((prev) => ({ ...prev , email: event.target.value }))} />
        <InputControl label="Password" placeholder="Enter Password"
        onChange={(event) =>
          setValues((prev) => ({ ...prev , pass: event.target.value }))}/>
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmisions} disabled={submitButtonDisabled}>login</button>
          <p>
            Create an account{" "}
            <span>
            <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default Login;
