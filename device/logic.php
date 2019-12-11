<?php

$con=mysqli_connect("localhost","vaibhav_device","9985844893","vaibhav_device");
//$con=mysqli_connect("localhost","root","GbiCds100%","nnex");

include 'mobile.php';
$detect = new Mobile_Detect();

$random = md5(mt_rand());



$foundmobile = false;

$found = false;

$file = -1;

$sc = $_POST['sc'];  //screen dimensions

$f   =  $_POST['f']; // fonts

$dbf = $f;

$qf = mysqli_query($con, "SELECT * FROM device WHERE MATCH(f) AGAINST ('$dbf') LIMIT 1");



$qm = mysqli_query($con,"SELECT id FROM device WHERE s='$sc' LIMIT 1");
	
	if(mysqli_num_rows($qm) > 0){

	$row = mysqli_fetch_row($qm);
	$id = $row[0];

	$foundmobile = true;

}





if(mysqli_num_rows($qf) == 0){
		// if the number of lines exceeds 50% of the total, no line is returned,
		// the following query ensures that this does not occur
	$qf = mysqli_query($con, "SELECT * FROM device WHERE MATCH(f) AGAINST ('$dbf' IN BOOLEAN MODE)");
	if(mysqli_num_rows($qf) == 0){
			// echo "it's not matches  above 90%";
	}else{
		$percent = 0;

		while($row = mysqli_fetch_row($qf)){
			similar_text($row[2], $f, $percent);
			if($percent >= 96){
				$id = $row[0];
				$found = true;
				break;
			}
		}
	}
}else{

	$row = mysqli_fetch_row($qf);

	$percent = 0;

	similar_text($row[2], $f, $percent);

	if($percent >= 96){
		$id = $row[0];
		$found = true;
	}
}


if($foundmobile == false  &&  $detect->isMobile()== true){
mysqli_query($con, "INSERT INTO device (id,s) VALUES ('$random','$sc')");
}

else if($found == false &&  $detect->isMobile()== false){
	mysqli_query($con, "INSERT INTO device (id,f) VALUES ('$random','$dbf')");
}
if($found == false && $foundmobile == false){
	echo "First time user";
}else if($found == true){
	echo "known user\nid: $id";
}
 else if($foundmobile == true){
	echo "known user\nid: $id";
	}