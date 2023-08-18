import React from 'react'
import {Container , Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const navigateCreateAccount = () => {
    
    navigate('/CreateAccount');
  };
  const navigateDeleteCustomer = () => {
    
    navigate('/deletecustomer');
  };
  const navigateSearchFilter = () => {
    
    navigate('/SearchComp');
  };
  return (
   
    <div >
      
     <Container className="p-5  text-centre d-grid gap-3" ><h1 className="fst-italic" >Credit Card Management Application</h1></Container>
      <Container className='p-5 text-centre d-grid gap-3'> <Button variant="dark" onClick={navigateCreateAccount}>Create account now</Button></Container>
      <Container className='p-5 text-centre d-grid gap-3'> <Button variant="dark" onClick={navigateDeleteCustomer}>Delete account now</Button></Container>
      <Container className='p-5 text-centre d-grid gap-3'> <Button variant="dark" onClick={navigateSearchFilter}>Search by Filter</Button></Container>
      {/* <Routes>
      <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/viewcustomers" element={<ViewCustomers/>} />
          <Route path="/searchcomp" element={<SearchComp/>} />
        </Routes> */}
         </div>
  
  )
}

export default Home

//style={{ backgroundImage: "url(http://localhost:3000/screen2.jpg)" }}