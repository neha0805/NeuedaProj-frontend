import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';
import { getTransactionAmtByCity } from '../services/transactionservice';
import FilterOptions from './FilterOptions';
import FilterTable from './FilterTable';

function SearchComp() {
  return (
    
  <div>
   <FilterOptions/>
   
  </div>

  )
}

export default SearchComp