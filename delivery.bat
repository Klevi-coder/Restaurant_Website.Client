
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Form</title>
</head>
<body>
    <h1>Porosit tani</h1>
    <form action="porosit_tani.html" method="GET" target="_blank">
        <label for="product">Product:</label>
        <input type="text" id="product" name="product" required><br><br>

        <label for="customerName">Customer Name:</label>
        <input type="text" id="customerName" name="customerName" required><br><br>

        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" required><br><br>

        <label for="extraIngredients">Extra Ingredients:</label>
        <textarea id="extraIngredients" name="extraIngredients"></textarea><br><br>

        <label for="address">Address:</label>
        <textarea id="address" name="address" required></textarea><br><br>

        <label for="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" name="paymentMethod" required>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
        </select><br><br>

        <input type="submit" value="Submit Order">
    </form>
</body>
</html>