<?php
$server_name = "127.0.0.1";//localhost
$user = "root";
$password = "";//premier_231
$database_name = "angular_db";

$db_connection = mysql_connect($server_name,$user,$password) or die("Failed to connect to the database!");

if(!$db_connection){
	die("Could not connect to the database!");
} 
	
if(!mysql_select_db($database_name,$db_connection)){
 	die("No database selected.");
}
?>