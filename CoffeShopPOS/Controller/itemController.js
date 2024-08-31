// Your item database array
itemDB = [];

// Save button click event
$('#saveBtn').click(function (e) {
    e.preventDefault();

    let itemId = $("#itemId").val();
    let itemName = $("#itemName").val();
    let price = $("#itemPrice").val();
    let qty = $("#itemQty").val();

    var items = new ItemDTO(itemId, itemName, price, qty);
    itemDB.push(items);
    $('#itemForm')[0].reset();
    addItemToTable(items);
});

// Function to add item to table
function addItemToTable(item) {
    let row = `<tr>
                 <td>${item.id}</td>
                 <td>${item.name}</td>
                 <td>${item.price}</td>
                 <td>${item.qty}</td>
                 <td>
                     <button class="btn btn-secondary btn-sm edit-btn">Edit</button>
                     <button class="btn btn-danger btn-sm delete-btn">Delete</button>
                 </td>
               </tr>`;
    $('#itemTableBody').append(row);
}

// Search button click event
$('#searchBtn').click(function (e) {
    e.preventDefault();
    let code = $('#itemId').val();
    searchItemAndSetFields(code);
});

// Function to search item in the itemDB array by item ID
function searchItem(itemCode) {
    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].id === itemCode) {
            return itemDB[i];
        }
    }
    return null; // Return null if item not found
}

// Function to display the searched item in the table
function searchItemAndSetFields(searchCode) {
    var item = searchItem(searchCode);
    if (item) {
        // Set the item details to the text fields
        $("#itemId").val(item.id);
        $("#itemName").val(item.name);
        $("#itemPrice").val(item.price);
        $("#itemQty").val(item.qty);
    } else {
        // If item is not found, clear the fields and show an alert
        $('#itemForm')[0].reset();
        swal({
            title: "Error!",
            text: "Item Not Found.",
            icon: "warning",
            button: "Close",
            timer: 2000
        });
    }
}

// Function to load all items (in case you have a need to reload the full table)
function loadAllItems() {
    $("#itemTableBody").empty();
    itemDB.forEach(function(item) {
        addItemToTable(item);
    });
}
