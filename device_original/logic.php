<?php

$con=mysqli_connect("localhost","vaibhav","vaibhav","device");

$random = md5(mt_rand());

$found = false;



$flfont   =  $_POST['flfont'];

$font   =  $_POST['font'];

$dis   =  $_POST['dis'];

$os   =  $_POST['os'];

$tz   =  $_POST['tz'];

$jstH = $_POST['jstH'];
$jstM = $_POST['jstM'];
$jstS = $_POST['jstS'];
$jstMs = $_POST['jstMs'];

$dbfont = mysqli_real_escape_string($con, $font);
$dbflfont = mysqli_real_escape_string($con, $flfont);

$query1 = mysqli_query( $con,"SELECT * FROM device WHERE dis='$dis' AND os='$os' AND tz='$tz'");

while($row = mysqli_fetch_array($query1))
       {
			similar_text($row['flfont'], $dbflfont, $percent1);
			similar_text($row['font'], $dbfont, $percent2);

			if($percent1 >= 90 && $percent2 >= 97)
			{
				$id = $row['id'];
				echo $id;
				$found = true;
			}

}

if($found == true){ echo "known user";} else
    {
    mysqli_query($con, "INSERT INTO device (id,flfont,font,dis,os,tz,jstH,jstM,jstS,jstMs) VALUES ('$random','$flfont','$font','$dis','$os','$tz','$jstH','$jstM','$jstS','$jstMs')");
    echo "first time user";
    }
