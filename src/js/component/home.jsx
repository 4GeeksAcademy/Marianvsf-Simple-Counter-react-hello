import React, { useEffect, useState } from "react";
import { Footer } from "./footer.jsx";
import SimpleCounter from "./Count.jsx";


//create your first component
const Home = () => {
	const [count, setCount] = useState(0)
	
	useEffect(() => { 
		console.log({ count });
	let IntervalId = setInterval(()=>{
			setCount(count + 1)
		},1000)
		return ()=> {
			clearInterval(IntervalId)
		}
	}, [count])
	return (
			<div id="clock" className="d-flex justify-content-center">
			<i className="far fa-clock"></i>
			<div className="box6">{count}
			</div>
		<p>
			<Footer/>
		</p>
		</div>
		)
};

export default Home;
