let url = "http://localhost:8080/transactions";

export async function getTransactionAmtByCity() {
  let response = await fetch(`${url}/city`);
  let transactionAmtByCity = await response.json();
  console.log(transactionAmtByCity);
  return transactionAmtByCity;
}

export async function getTransactionAmtByGender() {
    let response = await fetch(`${url}/gender`);
    let transactionAmtByGender = await response.json();
    console.log(transactionAmtByGender);
    return transactionAmtByGender;
  }

  export async function getTransactionAmtByState() {
    let response = await fetch(`${url}/state`);
    let transactionAmtByState = await response.json();
    console.log(transactionAmtByState);
    return transactionAmtByState;
  }

  export async function getTransactionAmtByCategory() {
    let response = await fetch(`${url}/category`);
    let transactionAmtByCategory = await response.json();
    console.log(transactionAmtByCategory);
    return transactionAmtByCategory;
  }

  export async function getTransactionAmtByProfession() {
    let response = await fetch(`${url}/Job`);
    let transactionAmtByProfession = await response.json();
    console.log(transactionAmtByProfession);
    return transactionAmtByProfession;
  }

  export async function getTransactionAmtByMerchant() {
    let response = await fetch(`${url}/merchant`);
    let transactionAmtByMerchant = await response.json();
    console.log(transactionAmtByMerchant);
    return transactionAmtByMerchant;
  }

  export async function getTransactionAmtBySpendingAnalysis() {
    let response = await fetch(`${url}/spendingByAmt/0/50`);
    let transactionAmtBySpendingAnalysis = await response.json();
    console.log(transactionAmtBySpendingAnalysis);
    return transactionAmtBySpendingAnalysis;
  }