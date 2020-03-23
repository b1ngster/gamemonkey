<?php
       //ENTER YOUR DATABASE CONNECTION INFO BELOW:
         $hostname="localhost";
         $database="67551";
         $username="67551";
         $password="0c69b8";

$file = fopen("test.txt","w");
echo fwrite($file,"Hello World. Testing!");
fclose($file);


 
     $link = mysql_connect($hostname, $username, $password);
     mysql_select_db($database) or die('Could not select database');

$data = json_decode($_POST);



$file = 'scores.txt';

$web_root = "http://".$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF'])."/" ."scores.txt";
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file


//Once confirmed remove the above line and use below
$current .= $data . "\n";



file_put_contents($file, $current);








$sql = "INSERT INTO gamedata ( payload)
VALUES ('{$data}')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>