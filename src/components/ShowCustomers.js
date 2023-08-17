import React from 'react';
import CustomerInfo from './CustomerInfo';
import ViewCustomers from './ViewCustomers';

function ShowCustomers() {
  return (
    <div style={{ display: 'flex', flex: 2, flexDirection: 'row'}}>
      <div style={{ flex: 3}}>
      <ViewCustomers />
      </div>
      
    </div>
  );
}

export default ShowCustomers;
