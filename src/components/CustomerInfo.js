import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCustomerById } from '../services/custservice';
import '../styles/CustomerInfo.css'; // Import your custom styles

const CustomerInfo = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        getCustomerById(id).then(res => setCustomer(res));
    }, []);

    return (
        <div className='customer-info-center'>
            <div className='customer-info-card'>
                <h2 className='customer-info-header'>Customer Information</h2>
                <div className='customer-info-details'>
                    <p className='customer-info-item'>
                        <span className='info-label'>First Name:</span> {customer.firstName}
                    </p>
                    <p className='customer-info-item'>
                        <span className='info-label'>Last Name:</span> {customer.lastName}
                    </p>
                    <p className='customer-info-item'>
                        <span className='info-label'>Gender:</span> {customer.gender}
                    </p>
                    <p className='customer-info-item'>
                        <span className='info-label'>Date of Birth:</span> {customer.dob}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CustomerInfo;
