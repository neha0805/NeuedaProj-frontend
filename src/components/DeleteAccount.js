import React, { useState } from 'react';
import { deleteCustomer, getAllCustomers } from '../services/custservice';

function DeleteAccount() {
  const [customerId, setCustomerId] = useState('');
  const [customers, setCustomers] = useState([]);

  const handleCustomerIdChange = (event) => {
    setCustomerId(event.target.value);
  };

  const handleDeleteAccount = () => {
    // Perform the delete account logic here, using the customerId
    // You can use APIs, database calls, or any other logic to delete the account

    // For this example, we'll simply navigate back to the homepage after deletion
    let response = deleteCustomer(customerId)
    .then(() => {
      // Refresh the list after successful deletion (replace getAllCustomers with your data fetching)
      getAllCustomers().then(customers => setCustomers(customers));
    })
    .catch(error => {
      console.error('Error deleting customer:', error);
    });

    if(response)
    alert('Cutomer with '+customerId+ ' deleted');
    else
    alert('Cutomer not found');

  console.log("deleted")
  };

  return (
    <div className="container mt-5">
      <h2>Delete Account</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
           Customer ID
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={customerId}
            onChange={handleCustomerIdChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleDeleteAccount}>
          Delete Account
        </button>
        </form>
      
      
    </div>
  );
}

export default DeleteAccount;
