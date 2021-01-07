import React, { useEffect } from 'react';
import Header from '../Header';

const App = () => {
  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(health => console.log(health.status));
  }, [])

  return (
    <>
      <Header />
      <div>Happy coding!</div>
    </>
  )
}

export default App;
