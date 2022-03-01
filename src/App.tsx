import React from "react";
import ReactDOM from "react-dom";
import WhitePaperPage from './WhitePaperPage';
import "./index.css";

const App = () => <WhitePaperPage articleKey="./OriginObject"/>; 

ReactDOM.render(<App />, document.getElementById("app"));
