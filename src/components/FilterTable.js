import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';
import { getTransactionAmtByCity } from '../services/transactionservice';

function FilterTable({appliedFilter, filterData}) {

  return (
    
     
  <div>
    {console.log("Applied filter-",{appliedFilter})}
      <Table striped bordered hover>
      <thead className="table-light">
        <tr>
          <th>{appliedFilter}</th>
          <th>Amount</th>
          
        </tr>
      </thead>
      <tbody>
      {filterData && filterData.map((filterAmt) => (
      <div className='DataTable p-5 m-5' style={{ color:'white'}}>
    
        <tr className="table-light">
          <td>{filterAmt[appliedFilter]}</td>
          <td>{filterAmt['totalAmt']}</td>
         
        </tr>
        
      </div>
      ))}
       </tbody>
    </Table>
       
      
      </div>

  )
}

export default FilterTable