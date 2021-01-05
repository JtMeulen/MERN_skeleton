import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(health => console.log(health.status));
  }, [])

  return (
    <div>
      Welcome to the MERN stack!
    </div>
  );
}

export default App;
