import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Ans from './assignments/TheoryQn/ans';
import Home from './pages/Home/Home'
import FormApp from './assignments/FormApp/FormApp';
import RemainderApp from './assignments/RemainderApp/RemainderApp';



function App() {
  return (
    <>
          
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />    
        <Route path='/theory' element={<Ans />} />
        <Route path='/form' element={<FormApp />} />
        <Route path='/hooks' element={<RemainderApp />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        </Routes>
      </Router>

      {/* deleted all exacts from Route beacuse it was not  supported in Typescript and also not aupported in react router v6 */}
          
          
    </>
  );
}

export default App;
