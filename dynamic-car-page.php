<!-- <?php
// Connect to your DB
$conn = new mysqli("localhost", "root", "", "car_rental");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the car ID from URL
$car_id = isset($_GET['id']) ? intval($_GET['id']) : 0;

// Fetch car details
$sql = "SELECT * FROM cars WHERE id = $car_id";
$result = $conn->query($sql);

// Check if car exists
if ($result->num_rows > 0) {
    $car = $result->fetch_assoc();
} else {
    echo "Car not found.";
    exit();
}
?> -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= htmlspecialchars($car['name']) ?> - Car Details</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0; padding: 0;
      background: #f2f2f2;
    }
    .container {
      max-width: 900px;
      margin: 20px auto;
      background: #fff;
      padding: 20px;
      border-radius: 8px;
    }
    .car-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
    .details {
      margin-top: 20px;
    }
    h2 {
      color: #333;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-top: 15px;
    }
    .info-grid p {
      margin: 0;
      font-weight: bold;
    }
    .back-btn {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 15px;
      background: #FFC107;
      color: black;
      text-decoration: none;
      border-radius: 5px;
    }
    .back-btn:hover {
      background: #003355;
      color: #FFC107;
    }

    @media (max-width: 600px) {
      .info-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="<?= htmlspecialchars($car['image']) ?>" alt="<?= htmlspecialchars($car['name']) ?>" class="car-image">
    <div class="details">
      <h2><?= htmlspecialchars($car['name']) ?></h2>
      <p><?= nl2br(htmlspecialchars($car['description'])) ?></p>
      <div class="info-grid">
        <p>Category: <?= htmlspecialchars($car['category']) ?></p>
        <p>Price/Day: KES <?= number_format($car['price']) ?></p>
        <p>Transmission: <?= htmlspecialchars($car['transmission']) ?></p>
        <p>Fuel Type: <?= htmlspecialchars($car['fuel_type']) ?></p>
        <p>Seats: <?= $car['seats'] ?></p>
      </div>
      <a href="index.php" class="back-btn">← Back to Cars</a>
    </div>
  </div>
</body>
</html>
