import { Link } from 'react-router-dom';
import './home.module.css';

function Home(props) {
    return (
        <div>
            <div>
                <h1>
                   <Link to="/login">L ogIn</Link>
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