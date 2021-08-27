import { Provider } from 'react-redux';
import './App.css';

import Adder from './Adder'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Adder />
      </div>
    </Provider>
  );
}

export default App;
