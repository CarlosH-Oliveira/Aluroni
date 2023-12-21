import React from "react";
import "./App.css";
import "normalize.css";
import Menu from "pages/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "pages/Start";
import Router from "router";
import NavBar from "components/NavBar";
import Header from "components/Header";
import NotFound from "pages/NotFound";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Router/>
		</div>
	);
}

export default App;
