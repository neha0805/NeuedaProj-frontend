import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import { getTransactionAmtByCategory, getTransactionAmtByMerchant, getTransactionAmtByCity, getTransactionAmtByGender, getTransactionAmtByProfession, getTransactionAmtByState, getTransactionAmtBySpendingAnalysis } from '../services/transactionservice';
import FilterTable from './FilterTable';

function FilterOptions() {

 const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = React.useState([]);
 const [appliedFilter, setAppliedFilter] = useState('')
  

  useEffect(() => {
    // getTransactionAmtByCity().then(gender => setGender(gender));
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } 


  const handleClickGender = () => {
    // getTransactionAmtByCity().then(city => setCity(city));
    // console.log(city)
    getTransactionAmtByGender().then(filter => setFilter(filter));
    setAppliedFilter('gender')
  };

  const handleClickSC = () => {
    getTransactionAmtByCategory().then(filter => setFilter(filter));
    setAppliedFilter('category');
    console.log("category")
  };

  const handleClickMerchant = () => {
    setAppliedFilter('merchant')
    getTransactionAmtByMerchant().then(filter => setFilter(filter));
    console.log("handleClickMerchant")
  };
  
  const handleClickCity = () => {
    setAppliedFilter('city')
    getTransactionAmtByCity().then(filter => setFilter(filter));
    console.log(filter)
  };

  const handleClickState = () => {
    setAppliedFilter('state')
    getTransactionAmtByState().then(filter => setFilter(filter));
  };

  const handleClickProfession = () => {
    setAppliedFilter('job')
    getTransactionAmtByProfession().then(filter => setFilter(filter));
    console.log("handleClickProfession")
  };

  const handleClickSpendingAnalysis = () => {
    setAppliedFilter('customerId')
    getTransactionAmtBySpendingAnalysis().then(filter => setFilter(filter));
    console.log("handleClickSpendingAnalysis")
  };

  return (
    <div >
        <div className='filterOptions m-5 p-5'>
     
     <Button type="submit" size='lg' onClick={handleClickGender}>Gender</Button>{' '}
     <Button type="submit" size='lg' onClick={handleClickSC}>Spending Caterogy</Button>{' '}
     <Button type="submit" size='lg'onClick={handleClickMerchant}>Merchant</Button>{' '}
     <Button type="submit" size='lg'onClick={handleClickCity}>City</Button>{' '}
     <Button type="submit" size='lg'onClick={handleClickState}>State</Button>{' '}
     
     <Button type="submit" size='lg'onClick={handleClickProfession}>Profession</Button>{' '}
     <Button type="submit" size='lg'onClick={handleClickSpendingAnalysis}>Spending Analysis</Button>{' '}

     </div>

     <FilterTable appliedFilter={appliedFilter} filterData={filter}/>
      
    </div>
  )
}

export default FilterOptions