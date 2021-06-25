<?php
$height = $_REQUEST["ht"];
$weight = $_REQUEST["wt"];

$heightInMs = $height/100; 
$bmi = $weight/($heightInMs*$heightInMs);
$message = "";
if($bmi < 18.5)
{
    $message = "You need to increase your weight.";
}
else if($bmi >=18.5 && $bmi <= 24.9)
{
    $message = "You have normal weight.";
}
else if($bmi >24.9 && $bmi <=29.9)
{
    $message = "You need to decrease your weight.";
}
else{
    $message = "Be careful!!! You are suffering from obesity.";
}
$output = array("bmi"=>$bmi,"message"=>$message);

echo json_encode($output);
?>
