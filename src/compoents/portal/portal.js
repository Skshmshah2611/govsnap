    import React from 'react';
    import { Link } from 'react-router-dom';
    import { auth } from "../../firebase";
    import styles from "./portal.module.css"
    import Logo from "../../assets/logo.png"
    import Profile from "../../assets/profile.png"
    import Pending from '../status/pending';
    import Approved from '../status/approved';
    import Rejected from '../status/rejected';


    function Portal(props) {
        
        return(
            <div className={styles.body_container}>
                <div className={styles.navbar}>
                    <img src={Logo} alt='Logo'></img>
                    <div href='#' className={styles.logout}><img src={Profile}></img><button type="button">Logout</button></div>
                </div>
                <div className={styles.main_sec}>
                    
                    <div className={styles.menu}>
                        <ul>
                            <li className={styles.status_c}><a href='#' onClick="">Pending</a></li>
                            <li className={styles.status_c}><a href='#' onClick="">Approved</a></li>
                            <li className={styles.status_c}><a href='#' onClick="">Rejected</a></li>
                        </ul>
                    </div>
                    <div className={styles.dataSec}>
                        <Pending></Pending>
                        {/* <Approved></Approved> */}
                        {/* <Rejected></Rejected> */}
                    </div>
                </div>
            </div>
        );
    }
    export default Portal;