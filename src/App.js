// import StartClass_001 from "./components/StartClass_001";
// import StartFunc_002 from "./components/StartFunc_002";
// import PropsClass_003 from "./components/PropsClass_003";
// import PropsFunc_004 from "./components/PropsFunc_004";
// import PropsFuncDefault_005 from "./components/PropsFuncDefault_005";
// import StateClass_006 from "./components/StateClass_006";
// import Event_007 from "./components/Event_007";
// import Quest001_007 from "./questions/Quest001_007";
// import LifeCycle_008 from './components/LifeCycle_008'
// import LifeCycle_009 from './components/LifeCycle_009';
import Router010 from './components/router/Router_010'
import Router011 from './components/router/Router_011'
import Router012 from './components/router/Router_012'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    // <StartClass_001 />
    // <StartFunc_002 />
    // <PropsClass_003 msg="안녕하세요!" />
    // <PropsFunc_004 msg="안녕하세요!" />
    // <PropsFuncDefault_005 />
    // <StateClass_006 />
    // <Event_007 />
    // <Quest001_007 />
    // <LifeCycle_008 name="Mark" />
    // <LifeCycle_009 />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Router010 />} />
        <Route path="/router11" element={<Router011 />} />
        <Route path="/router11/:id" element={<Router011 />} />
        <Route path="/router12/*" element={<Router012 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
