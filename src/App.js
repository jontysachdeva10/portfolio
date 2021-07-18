import Hero from './Hero/index';
import Loading from './Utils/Loading/index';
import './App.scss';
import AboutMe from './AboutMe';
import Job from './Job';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      { loading ? <Loading /> : 
      <div>
        <Hero />
        <AboutMe />
        <Job />
      </div>
      }
    </div>
  );
}

export default App;
