$(document).ready(function() {
    $("#customerNavLink").click(function(e) {
        e.preventDefault(); // Prevent the default link behavior

        // Hide other pages
        $("#carouselExampleIndicators").css('display', 'none');
        $("#itemPage").css('display', 'none'); // Ensure you have an element with id="itemPage"
        $("#placeOrderPage").css('display', 'none'); // Ensure you have an element with id="placeOrderPage"

        // Show the customer page
        $("#customerPage").css('display', 'block');
    });

    $("#homeNavLink").click(function(e) {
        e.preventDefault(); // Prevent the default link behavior

        // Hide other pages
        $("#carouselExampleIndicators").css('display', 'block');
        $("#itemPage").css('display', 'none'); // Ensure you have an element with id="itemPage"
        $("#placeOrderPage").css('display', 'none'); // Ensure you have an element with id="placeOrderPage"

        // Show the customer page
        $("#customerPage").css('display', 'none');

    });


    $("#itemNavLink").click(function(e) {
        e.preventDefault(); // Prevent the default link behavior

        // Hide other pages
        $("#carouselExampleIndicators").css('display', 'none');
        $("#itemPage").css('display', 'block'); // Ensure you have an element with id="itemPage"
        $("#placeOrderPage").css('display', 'none'); // Ensure you have an element with id="placeOrderPage"

        // Show the customer page
        $("#customerPage").css('display', 'none');

    });


    $("#placeOderNavLink").click(function(e) {
        e.preventDefault(); // Prevent the default link behavior

        // Hide other pages
        $("#carouselExampleIndicators").css('display', 'none');
        $("#itemPage").css('display', 'none'); // Ensure you have an element with id="itemPage"
        $("#placeOrderPage").css('display', 'block'); // Ensure you have an element with id="placeOrderPage"
        loadCustomersToComboBox();
        loadItemsToComboBox();
        // Show the customer page
        $("#customerPage").css('display', 'none');

    });

});

