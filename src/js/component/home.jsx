import React, { useEffect, useState } from "react";
import SimpleCounter from "./Count.jsx"
import { Footer } from "./footer.jsx";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		let intervalId = setInterval(() => {
			setCount(count +1)},
		1000)
	return () => 
		clearInterval(intervalId)}
},	 [count]
return () => {

		<div className="text-center">
			<div>
				<SimpleCounter/>
			</div>
			<div className="fixed-bottom">
				<Footer/>
			</div>
		</div>
}

	

export default Home;
