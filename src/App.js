import './App.css';
import Calculator from './Calculator';
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Calculator/>} />        
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
