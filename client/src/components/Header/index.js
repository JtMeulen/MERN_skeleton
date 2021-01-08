import React, { useEffect, useState }  from 'react';
import { connect } from 'react-redux';

import { addClick, substractClick } from '../../store/app-actions';
import mern_img from '../../assets/mern_heroku.jpg';
import styles from './styles.module.css';

const Header = (props) => {
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

      <p>Redux Store for {props.app.name}</p>
      <button onClick={() => props.incrementClick(3)}>Increment 3</button>
      <p>{props.app.clicks}</p>
      <button onClick={() => props.substractClick(2)}>Substract 2</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    app: state.app 
  }
};

const mapDispatchToProps = dispatch => {
  return {
    incrementClick: (amount) => dispatch(addClick(amount)),
    substractClick: (amount) => dispatch(substractClick(amount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
