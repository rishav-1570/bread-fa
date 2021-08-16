import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Nav from './component/Nav';
import Quote from './component/Quote';
import Profile from './component/Profile';
import Slidercomp from './component/Slidercomp';
import Bottomcomp from './component/Bottomcomp';
//import reportWebVitals from './reportWebVitals';


ReactDOM.render(<Nav />,document.getElementById("mynav"));
ReactDOM.render(<Quote />,document.getElementById("myquote"));
ReactDOM.render(<Profile />,document.getElementById("cardrender"));
ReactDOM.render(<Slidercomp />,document.getElementById("sliderid"));
ReactDOM.render(<Bottomcomp />,document.getElementById("bottomid"));
//reportWebVitals();
