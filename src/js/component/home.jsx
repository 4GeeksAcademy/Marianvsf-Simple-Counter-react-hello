import React, { useEffect, useState } from "react";
import { Footer } from "./footer.jsx";
import '../../styles/index.css';

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
	}, [count]);

	const num1 = Math.floor((count /100000) % 10);
	const num2 = Math.floor((count /10000) % 10);
	const num3 = Math.floor((count /1000) % 10);
	const num4 = Math.floor((count /100) % 10);
	const num5 = Math.floor((count /10) % 10);
	const num6 = Math.floor((count /1) % 10);
			
	return (
		<div>
			<div className="d-flex align-items-center text-center justify-content-center"
			style={{margin: "10px", height: "150px", background: "black",
				color: "white", fontSize: "5vw", fontWeight: "bolder"
			  }}> 
				<div style={{width:"150px", boxShadow: "0px 0px 5px lightgrey"}}><i className="far fa-clock"></i></div>
				<div style={{width:"150px", boxShadow: "0px 0px 5px lightgrey"}}>{num1}</div>
				<div style={{width:"150px", boxShadow: "0px 0px 5px lightgrey"}}>{num2}</div>
				<div style={{width:"150px", boxShadow: "0px 0px 5px lightgrey"}}>{num3}</div>
				<div style={{width:"150px", boxShadow: "0px 0px 5px lightgrey"}}>{num4}</div>
				<div style={{width:"150px", boxShadow: "0px 0px 5px lightgrey"}}>{num5}</div>
				<div style={{width:"150px", boxShadow: "0px 0px 5px lightgrey"}}>{num6}</div>
			</div>
			<div className="text-center" >
			<p>
				<button type="button" class="btn btn-outline-secondary" onClick={() => setCount(0)}>Reset</button>
			</p>
			</div>
			<p>
				<Footer/>
			</p>
		</div>
			)
};

export default Home;
