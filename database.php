<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "nihongo";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
   		die("Connection failed: " . $conn->connect_error);
	} 
	echo "Connected successfully";

	$wordsArray = array();

	$sql = "SELECT * from vocabulary";
	$result = $conn->query($sql);

	if($result->num_rows > 0){
		while($row = $result->fetch_assoc()) {
        	#echo "id: " . $row["id"]. " - English: " . $row["english"]. " - Nihongo: " . $row["nihongo"]. "<br>";
        	$wordsArray[$row['english']] = $row['nihongo'];
        }
	} else {
	    echo "0 results";
	}
	
	$dave = "Hello!";

	function getDave(){
		global $dave;
		return $dave;
	}
	
	#printHashMap($wordsArray);
	$conn->close();
	

	function getHashMap(){
		global $wordsArray;
		return $wordsArray;
	}

	function printHashMap(){
		global $wordsArray;
		foreach ($wordsArray as $key => $value) {
    		echo "English: $key; Nihongo: $value\n <br>";
		}
	}
	
?>


<script>
	console.log( '<?php printHashMap();?>' );
	
</script>