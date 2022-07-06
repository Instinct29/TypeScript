import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Ans from './assignments/TheoryQn/ans';
import Home from './pages/Home/Home'
import FormApp from './assignments/FormApp/FormApp';
import RemainderApp from './assignments/RemainderApp/RemainderApp';
import AdvReact from './assignments/AdvReactTheory/AdvReact/AdvReact';
import CodeSplitting from './assignments/AdvReactTheory/CodeSplitting/CodeSplitting';
import Context from './assignments/AdvReactTheory/Context/Context';
import Index from './assignments/AdvReactTheory/ErrorBoundary/Index';
import ForwardingRef from './assignments/AdvReactTheory/ForwardingRef/ForwardingRefs';
import HOC from './assignments/AdvReactTheory/HOC/HOC';
import RefsDoms from './assignments/AdvReactTheory/RefsDoms/RefsandDom';
import StrictMode  from './assignments/AdvReactTheory/StrictMode/StrictMode';
import TypeChecking from './assignments/AdvReactTheory/TypeChecking/TypeChecking';





function App() {
  return (
    <>
          
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />    
        <Route path='/theory' element={<Ans />} />
        <Route path='/form' element={<FormApp />} />
        <Route path='/hooks' element={<RemainderApp />} />
        <Route path='/advreact' element={<AdvReact />} />
        <Route path='/codesplitting' element={<CodeSplitting />} />
        <Route path='/context' element={<Context />} />
        <Route path='/index' element={<Index />} />
        <Route path='/forwardingref' element={<ForwardingRef />} />
        <Route path='/hoc' element={<HOC />} />
        <Route path='/refsdom' element={<RefsDoms />} />
        <Route path='/strictmode' element={<StrictMode />} />
        <Route path='/typechecking' element={<TypeChecking />} />
        </Routes>
      </Router>

      {/* deleted all exacts from Route beacuse it was not  supported in Typescript and also not aupported in react router v6 */}
          
          
    </>
  );
}

export default App;
