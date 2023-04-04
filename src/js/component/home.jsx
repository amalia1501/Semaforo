import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [color, setColor] = useState("")

	return (
	<>
	<div className="trafic-light rounded-3 d-flex flex-column justify-content-evenly align-items-center py-3">
	<div onClick={() =>setColor("red")} className={`${color=="red"?"glow":""} red light rounded-circle`}></div>
	
	<div onClick={() =>setColor("yellow")}className={`${color=="yellow"?"glow":""} yellow light rounded-circle`}></div>
	<div onClick={() =>setColor("green")}className={`${color=="green"?"glow":""} green light rounded-circle`}></div>
	</div>
	</>
	);
};

export default Home;
