import React, { useState } from 'react';

function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState(''); // Default value for gender
  const [dob, setDob] = useState('');
  const [customer, setCustomer] = useState({firstName:'', lastName:'', dob:new Date()})

  let navigate = useNavigate()

  const handleChange = (event)=>{
    let {name, value} = event.target;
    // if(name === 'dosh')
    // {
    //     if(value){
    //         value = isNaN(parseFloat(value)) ? 0 : parseFloat(value)
    //     }
    // }
    let newcustomer = {...customer, [name]:value}
    setCustomer(newcustomer)
}
const handleRegister = (event)=>{
    event.preventDefault();
    addCustomer(customer).then(res=>navigate('/'))
}


  return (
    <div className="container mt-5">
      <h2>Customer Registration</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
