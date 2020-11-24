import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './StyledApp';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles'
// import 'antd/dist/antd.css'
// import 'antd/dist/antd.dark.css'
// import LayoutApp from './components/Layout'

ReactDOM.render(
  <React.StrictMode>
    {/* <LayoutApp> */}
    <GlobalStyles bgcolor="#BADA55" />
    <App />
    {/* </LayoutApp> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
