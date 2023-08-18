import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import SearchComp from "./components/SearchComp";
import ChartAmtByCity from "./components/ChartAmtByCity";

import ViewCustomers from "./components/ViewCustomers";
import DeleteAccount from "./components/DeleteAccount";

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerInfo from "./components/CustomerInfo";

function App() {

	return (
		<>
		<div style={{ backgroundImage: "url(http://localhost:3000/screen2.jpg)",
	 backgroundPosition: 'center',
	 backgroundSize: 'cover',
	 backgroundRepeat: 'no-repeat',
	 width: '100vw',
	 height: '100vh' }}>
			<BrowserRouter>
				<div style={{
					display: "flex",
					background: 'black',
					
				}}>
					<div style={{ margin: '5px', fontSize: '40px' }}>
						<NavLink style={{textDecoration: 'none', color: 'white'} } to="/" >
							Credit Card 
						</NavLink>
					</div>
                    <div style={{ margin: '10px', fontSize: '20px', padding: '20px' }}>
						<NavLink style={{textDecoration: 'none'}} to="/CreateAccount" >
							Create Account
						</NavLink>
					</div>
					<div style={{ margin: '10px', fontSize: '20px', padding: '20px' }}>
						<NavLink style={{textDecoration: 'none'}} to="/SearchComp" >
							Search
						</NavLink>
					</div>
					<div style={{ margin: '10px', fontSize: '20px', padding: '20px' }}>
						<NavLink style={{textDecoration: 'none'}} to="/customerlist" >
							View Customers
						</NavLink>
					</div>
					
					
				</div>
				<Routes>
					<Route exact path="/" element={<Home />} />
					{/* <Route exact path="/" element={<ChartAmtByCity />} /> */}
					<Route exact path="/CreateAccount" element={<CreateAccount/>} />
					<Route exact path="/SearchComp" element={<SearchComp/>} />
					<Route exact path="/customerlist" element={<ViewCustomers/>} />
					<Route exact path="/deletecustomer" element={<DeleteAccount/>} />
					<Route path='/customerlist/:id' element={<CustomerInfo/>}/>
				</Routes>
			</BrowserRouter>
			</div>
		</>
	);
}

export default App;

