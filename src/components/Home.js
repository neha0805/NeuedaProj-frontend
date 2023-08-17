import React from 'react'
import {Container , Button} from 'react-bootstrap'


const Home = () => {
  return (
   
    <div style={{ backgroundImage: "url(http://localhost:3000/screen2.jpg)" }}>
     
      <Container className='p-5 text-centre d-grid gap-3'> <Button variant="dark" href ="#">Create account now</Button></Container>
      <Container className='p-5 text-centre d-grid gap-3'> <Button variant="dark" href ="#">Delete account now</Button></Container>
      <Container className='p-5 text-centre d-grid gap-3'> <Button variant="dark" href ="#">Search by Filter</Button></Container>
     </div>
  
  )
}

export default Home