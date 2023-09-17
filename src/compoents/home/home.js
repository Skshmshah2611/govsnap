import { Link } from 'react-router-dom';
import React from 'react';
import './home.module.css';

function Home(props) {
    // fetch('https://synth-ai-envoys.onrender.com/genrateVideos').then(
    //     (response)=>{
    //         console.log(response)
    //     })
    return (
        <div>
            <div>
                <h1>
                    <Link to="/login">LogIn</Link>
                </h1>
                <br/>
                <h1>
                    <Link to="/signup">SignUp</Link>
                </h1>
            </div>
            <br/>
            <br/>
            <br/>
            <h2>{(props.name) ? `Welcome -${props.name}`:"Login Please" }</h2>
        </div>
      );
}
export default Home;