<?php

$con=mysqli_connect("localhost","vaibhav_device","9985844893","vaibhav_device");
//$con=mysqli_connect("localhost","root","GbiCds100%","nnex");

$random = md5(mt_rand());

$found1 = false;
$found2 = false;

$file = -1;

$f   =  $_POST['f']; // fonts

$p   =  $_POST['p']; // plugins

$dbf = md5($f);

$dbp = md5($p);

$qp = mysqli_query($con,"SELECT id FROM device WHERE p='$dbp' LIMIT 1");


if(mysqli_num_rows($qp) > 0){

	$row = mysqli_fetch_row($qp);
	$id = $row[0];

	$found1 = true;

} 

$qf = mysqli_query($con,"SELECT id FROM device WHERE f='$dbf' LIMIT 1");
if(mysqli_num_rows($qf) > 0){

	$row = mysqli_fetch_row($qf);
	$id = $row[0];

	$found2 = true;

} 




if($found1 == false && $found2 == false){
	mysqli_query($con, "INSERT INTO device (id,p,f) VALUES ('$random','$dbp','$dbf')");
}
if($found1 == false && $found2 == false){
	echo "First time user";
}else if($found1 == false && $found2 == true){
	echo "known user with different browser\nid: $id";
}else if($found1 == true && $found2 == true){
	echo "known user with same browser\nid: $id";
}