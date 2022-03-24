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

// import Router010 from './components/router/Router_010';
// import Router011 from './components/router/Router_011';
// import Router012 from './components/router/Router_012';
// import NotFound_013 from './components/router/NotFound_013';
// import Link_014 from './components/router/Link_014';
// import NavLink_015 from './components/router/NavLink_015';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// const isLogin = true;

// import Sass_016 from './components/styles/Sass_016';
// import StyledComponent_018 from './components/styles/StyledComponent_018';
// import StyledComponent_019 from './components/styles/StyledComponent_019';
// // import './App.css';
// // import './App.scss';
// import styled from 'styled-components';
// const PrimaryStyledComponent_018 = styled(StyledComponent_018)`
//   background: palevioletred;
//   color: white;
// `;

// const UppercaseButton = props => {
//   console.log(props);
//   return <button {...props} children={props.children.toUpperCase()} />;
// };

// const MyButton = props => <button {...props} children={`MyButton ${props.children}`} />;
// const StyledMyButton = styled(MyButton)`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px soild palevioletred;
//   color: ${props => props.color || 'palevioletred'};
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `;
// import Hooks_020 from './components/hooks/Hooks_020';
// import Hooks_021 from './components/hooks/Hooks_020';
// import Hooks_022 from './components/hooks/Hooks_020';
// import Hooks_023 from './components/hooks/Hooks_023';
// import Hooks_024 from './components/hooks/Hooks_024';
// import Hooks_025 from './components/hooks/Hooks_025';
// import Hooks_026 from './components/hooks/Hooks_026';
// import Hooks_027 from './components/hooks/Hooks_027';

// import A_028 from './components/contexts/A_028';
// import ContextConsumer_029 from './components/ContextConsumer_029';
// import Thiscontext030 from './components/ThisContext_030';
import UseContext_031 from './components/UseContext_031';

function App() {
  // const width = Hooks_024();
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
    // <Sass_016 />
    // <StyleModule_017 />
    /*     <>
      <StyledComponent_018>버튼</StyledComponent_018>
      <StyledComponent_018 primary>버튼</StyledComponent_018>
      <PrimaryStyledComponent_018>버튼</PrimaryStyledComponent_018>
      <StyledComponent_018 as={UppercaseButton}>button</StyledComponent_018>
      <StyledMyButton>button</StyledMyButton>
      <StyledMyButton color="green">button</StyledMyButton>
      <StyledComponent_019 href="https://www.google.com">태그</StyledComponent_019>
    </> */
    // <Hooks_020 />
    // <Hooks_021 />
    // <Hooks_022 />
    // <Hooks_023 />
    // <>{width}</>
    // <Hooks_025 />
    // <Hooks_026 />
    // <Hooks_027 />
    // <A_028 />
    // <ContextConsumer_029 />
    // <Thiscontext030 />
    <UseContext_031 />
  );
}

export default App;
