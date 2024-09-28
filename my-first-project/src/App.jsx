// App.js
import { useState } from 'react';
import ProgressBar from './ProgressBar';

const App = () => {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  return (
    <div>
      <ProgressBar progress={progress} />
      <button onClick={updateProgress} disabled={progress >= 100}>
        Increase Progress
      </button>
    </div>
  );
};

export default App;