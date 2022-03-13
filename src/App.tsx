import React from "react";
import ReactDOM from "react-dom";
import WhitePaperPage from './WhitePaperPage';
import LiteratureGeneralPage from './LiteratureGeneral';
import "./index.css";

const App = () => (
    <>
        <WhitePaperPage articleKey="./OriginObject"/>
        <LiteratureGeneralPage />
    </>
);


ReactDOM.render(<App />, document.getElementById("app"));
