import React, { useEffect, useState }  from 'react';

import mern_img from '../../assets/mern_heroku.jpg';
import styles from './styles.module.css';

const Header = () => {
  const [serverConnected, setServerConnected] = useState(false);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(() => { setServerConnected(true) })
      .catch((err) => { 
        setServerError(true);
        console.log('Error from server: ', err);
      })
  }, [])

  return (
    <div className={styles.root}>
      <h1>Welcome to the MERN stack!</h1>
      <img src={mern_img} alt='' />
      <p>{serverConnected ? 'Connected!' : 'Connecting to server...'}</p>
      {serverError && <p className={styles.error}>Unable to connect to server. Check the console for more info</p>}
    </div>
  )
}

export default Header;