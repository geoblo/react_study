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
import Router010 from './components/router/Router_010';
import Router011 from './components/router/Router_011';
import Router012 from './components/router/Router_012';
import NotFound_013 from './components/router/NotFound_013';
import Link_014 from './components/router/Link_014';
import NavLink_015 from './components/router/NavLink_015';
import Sass_016 from './components/sass/Sass_016';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// const isLogin = true;
// import './App.css';
// import './App.scss';
import styles from './App.module.css';
console.log(styles);

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
    // <BrowserRouter>
    //   <a href="/">home</a>
    //   <br />
    //   <a href="/router11">/router11</a>
    //   <br />
    //   <a href="/router11/:id">/router11/person1</a>
    //   <Link_014 />
    //   <NavLink_015 />
    //   <Routes>
    //     <Route path="/" element={<Router010 />} />
    //     {/* <Route path="/" element={<Navigate replace to="/router11" />} /> */}
    //     <Route path="/router11" element={<Router011 />} />
    //     <Route path="/router11/:id" element={<Router011 />} />
    //     <Route path="/router12/*" element={<Router012 />} />
    //     <Route path="/*" element={<NotFound_013 />} />
    //   </Routes>
    // </BrowserRouter>
    <Sass_016 />
  );
}

export default App;
