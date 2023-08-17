import React, { useEffect, useState } from 'react';
import { getAllCustomers, deleteCustomer } from '../services/custservice';
import { NavLink, Outlet } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import '../styles/ViewCustomers.css'; // Import your custom styles

function ViewCustomers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getAllCustomers().then(customers => setCustomers(customers));
  }, []);

  const handleDelete = (id) => {
    deleteCustomer(id)
      .then(() => {
        // Refresh the list after successful deletion (replace getAllCustomers with your data fetching)
        getAllCustomers().then(customers => setCustomers(customers));
      })
      .catch(error => {
        console.error('Error deleting customer:', error);
      });
    console.log("deleted")
  };

  return (
    <div className='container d-flex justify-content-center'>
      <div className='row' style={{ display: 'flex', flex: 2, flexDirection: 'row'}}>
        <div className='col' style={{ display: 'flex', flex: 2, flexDirection: 'row'}}>
          <ListGroup>
            {customers.length > 0 &&
              customers.map(customer => (
                <ListGroup.Item
                  key={customer.customer_Id}
                  className='credit-card'
                >
                  <NavLink
                    to={`/customerlist/${customer.customer_Id}`}
                    className='customer-link'
                  >
                    <div className='card-content'>
                      <h5>{customer.firstName} {customer.lastName}</h5>
                      <p>Customer ID: {customer.customer_Id}</p>
                      {/* Add more card-like content here */}
                    </div>
                  </NavLink>
                  <button 
                    className='delete-button'
                    onClick={() => handleDelete(customer.customer_Id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </div>
        <div className='col-md-9'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ViewCustomers;