import React from "react";
import Router from "./Components/Router/Router";
import axios from "axios";
import "nes.css/css/nes.min.css";
import "nes.icons/css/nes-icons.min.css";


function App() {
	axios.defaults.baseURL = "http://localhost:8082";
	axios.defaults.headers.post["Content-Type"] = "application/json";
	return (
		<Router/>
	); 
}

export default App;
