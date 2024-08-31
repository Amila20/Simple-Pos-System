// Define CustomerDTO class or function
function CustomerDTO(id, name, address, salary) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.salary = salary;
}

// Initialize customerDB as an empty array
 customerDB=[];

// Function to add a customer to the table
function addCustomerToTable(customer) {
    let row = `<tr>
                 <td>${customer.id}</td>
                 <td>${customer.name}</td>
                 <td>${customer.address}</td>
                 <td>${customer.salary}</td>
                 <td>
                     <button class="btn btn-secondary btn-sm edit-btn">Edit</button>
                     <button class="btn btn-danger btn-sm delete-btn">Delete</button>
                 </td>
               </tr>`;
    $('#customerTableBody').append(row);
}

// Handle Save button click event
$('#saveCustomer').click(function (e) {


    e.preventDefault(); // Prevent default form submission

    let customerId = $("#customerId").val();
    let customerName = $("#customerName").val();
    let address = $("#customerAddress").val();
    let salary = $("#salary").val();

    // Create a new CustomerDTO object with the correct arguments
    var customer = new CustomerDTO(customerId, customerName, address, salary);

    // Add customer to customerDB
    customerDB.push(customer);

    // Clear the form fields after saving
    $('#customerForm')[0].reset();

    // Log the customer object and customerDB array to verify
    console.log(customer);
    console.log(customerDB);

    // Update the table with the new customer record
    addCustomerToTable(customer);
});



// Optionally, you can handle Edit and Delete actions here
