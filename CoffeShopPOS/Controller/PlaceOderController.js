// Assuming customerDB is your customer database array
function loadCustomersToComboBox() {
    // Clear existing options
    $('#cmbSelectCustomerId').empty();

    // Add new options
    customerDB.forEach(function(customer) {
        let option = `<option value="${customer.id}">${customer.id}</option>`;
        $('#cmbSelectCustomerId').append(option);
    });
}

// Event listener to populate customer details when a customer is selected
$('#cmbSelectCustomerId').on('change', function() {
    let selectedCustomerId = $(this).val();
    let selectedCustomer = customerDB.find(customer => customer.id === selectedCustomerId);

    if (selectedCustomer) {
        $('#txtpocName').val(selectedCustomer.name);
        $('#txtpocaddress').val(selectedCustomer.address);
        $('#txtpocsalary').val(selectedCustomer.salary);
    }
});

// Call the function when the Place Order page is loaded
loadCustomersToComboBox();

// Assuming itemDB is your item database array
function loadItemsToComboBox() {
    // Clear existing options
    $('#cmbitemcode').empty();

    // Add new options
    itemDB.forEach(function(item) {
        let option = `<option value="${item.id}">${item.id}</option>`;
        $('#cmbitemcode').append(option);
    });
}

// Event listener to populate item details when an item is selected
$('#cmbitemcode').on('change', function() {
    let selectedItemCode = $(this).val();
    let selectedItem = itemDB.find(item => item.id === selectedItemCode);

    if (selectedItem) {
        $('#txtpoiName').val(selectedItem.name);
        $('#txtitemPrice').val(selectedItem.price);
        $('#txtqtyOnHand').val(selectedItem.qty);
    }
});

// Call the function when the Place Order page is loaded
loadItemsToComboBox();

// Array to hold cart items
let cart = [];

// Function to add item to cart
$('#btnAddToCart').on('click', function() {
    let itemCode = $('#cmbitemcode').val();
    let itemName = $('#txtpoiName').val();
    let itemPrice = parseFloat($('#txtitemPrice').val());
    let buyQty = parseInt($('#txtbuyQty').val(), 10);

    if (itemCode && buyQty > 0) {
        // Find the item in the itemDB
        let item = itemDB.find(item => item.id === itemCode);
        if (item) {
            let total = itemPrice * buyQty;
            cart.push({ itemCode, itemName, itemPrice, buyQty, total });
            updateCartTable();
            clearItemFields();
            updateTotal();
        }
    } else {
        alert("Please select an item and enter quantity.");
    }
});

// Function to update cart table
function updateCartTable() {
    let cartTableBody = $('#cartTable');
    cartTableBody.empty();

    cart.forEach(item => {
        let row = `<tr>
            <td>${item.itemCode}</td>
            <td>${item.itemName}</td>
            <td>${item.itemPrice}</td>
            <td>${item.buyQty}</td>
            <td>${item.total}</td>
        </tr>`;
        cartTableBody.append(row);
    });
}

// Function to clear item fields
function clearItemFields() {
    $('#cmbitemcode').val('');
    $('#txtpoiName').val('');
    $('#txtitemPrice').val('');
    $('#txtqtyOnHand').val('');
    $('#txtbuyQty').val('');
}

// Function to update total amount and item count
function updateTotal() {
    let totalAmount = cart.reduce((acc, item) => acc + item.total, 0);
    let totalItems = cart.reduce((acc, item) => acc + item.buyQty, 0);

    $('#txtTotal').val(totalAmount);
    $('#txtNoOfItems').val(totalItems);
}
// Initialize a counter for Order IDs
let orderIdCounter = 1000; // Start with an initial value

// Function to generate a new order ID
function generateOrderId() {
    orderIdCounter++;
    return `ORD-${orderIdCounter}`;
}

// Function to handle placing an order
$('#btnPlaceOrder').on('click', function() {
    let orderId = $('#txtOrderId').val();
    let orderDate = $('#txtOrderDate').val();
    let customerId = $('#cmbSelectCustomerId').val();
    let cash = parseFloat($('#txtCash').val());
    let total = parseFloat($('#txtTotal').val());

    if (!orderId) {
        // Generate a new order ID if not provided
        orderId = generateOrderId();
        $('#txtOrderId').val(orderId);
    }

    if (orderDate && customerId && cash >= total) {
        // Place order logic
        alert("Order placed successfully!");

        // Clear form and cart
        $('#txtOrderId').val('');
        $('#txtOrderDate').val('');
        $('#cmbSelectCustomerId').val('');
        $('#txtpocName').val('');
        $('#txtpocaddress').val('');
        $('#txtpocsalary').val('');
        $('#txtCash').val('');
        $('#txtBalance').val('');
        $('#cartTable').empty();
        cart = [];
        updateTotal();
    } else {
        alert("Please complete the form and ensure cash is sufficient.");
    }
});

// Function to cancel order
$('#btnCancelOrder').on('click', function() {
    if (confirm("Are you sure you want to cancel the order?")) {
        // Clear form and cart
        $('#txtOrderId').val('');
        $('#txtOrderDate').val('');
        $('#cmbSelectCustomerId').val('');
        $('#txtpocName').val('');
        $('#txtpocaddress').val('');
        $('#txtpocsalary').val('');
        $('#txtCash').val('');
        $('#txtBalance').val('');
        $('#cartTable').empty();
        cart = [];
        updateTotal();
    }
});

// Function to set initial order ID on page load
function setInitialOrderId() {
    $('#txtOrderId').val(generateOrderId());
}

// Call this function when the Place Order page is loaded
setInitialOrderId();
