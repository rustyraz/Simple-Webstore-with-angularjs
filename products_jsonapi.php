<?php
include 'config.php';
header("Content-type: text/javascript");
$data_array = [];
if(isset($_GET['get'])){
	if(trim($_GET['get'])=="all"){
		$qry = mysql_query("SELECT * FROM products") or die(mysql_error());
		 while ($data = mysql_fetch_assoc($qry)) {
		 	# code...
		 	array_push($data_array, $data);
		 }
	}elseif(trim($_GET['get'])=='single_item'){
		$id = mysql_real_escape_string(trim($_GET['id']));
		$qry = mysql_query("SELECT * FROM products WHERE id='$id' LIMIT 1") or die(mysql_error());
		$data = mysql_fetch_assoc($qry);
		$data['images'] = [
			'images/products/mediumPizza.jpg',
			'images/products/largePizza.jpg',
			'images/products/largePizza2.jpg',
			'images/products/halfChicken.jpg'
		];
		array_push($data_array, $data);		 
	}
}		

echo json_encode($data_array);
exit();
?>