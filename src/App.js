import { useState } from 'react';
import { TestContext } from './TestContext';
import TimeList from './TimeList';
import Timer from './Timer';

const App = () => {

  const [timeArray, setTimeArray] = useState([])

  return (
    <TestContext.Provider value={{
      timeArray,
      setTimeArray
    }}>
      <div className="App">
        <div className="row">
          <div className='col-12 d-flex justify-content-center p-3'>
            <div>
              <Timer />
            </div>
            <div>
              <TimeList />
            </div>
          </div>
        </div>
      </div>
    </TestContext.Provider>
  );
}

export default App;
