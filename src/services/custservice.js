let url = "http://localhost:8080/customers";

export async function getAllCustomers() {
  let response = await fetch(`${url}`);
  let customers = await response.json();
  console.log(customers);
  return customers;
}

export async function getCustomerById(id) {
    let response = await fetch(`${url}/${id}`);
    let customer = await response.json();
    console.log(customer);
    return customer;
  }

  export async function deleteCustomer(id) {
    let response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    
    return response;
  }

  export async function addCustomer(customer) {
    let response = await fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let newcustomer = await response.json();
  console.log(newcustomer);
  return newcustomer;
  }