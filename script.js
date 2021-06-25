function calculateBMI()
        {
            var height = document.getElementById("height").value;
            var weight = document.getElementById("weight").value;

            if(height%1>=0 && weight%1 >=0)
            {
                var xmlhttp = new XMLHttpRequest();
                var url = "http://localhost/bmicalculator2/calculatebmi.php";
                xmlhttp.open("POST", url, true);
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlhttp.send("ht=" + height + "&wt=" + weight);
                xmlhttp.onreadystatechange = function(){
                    if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
                    {
                        var output = xmlhttp.responseText;
                        var jsOutput = JSON.parse(output);
                        document.getElementById("result").innerHTML = "Your BMI is "+(jsOutput.bmi).toFixed(2) + ". "+jsOutput.message;
                    }
                }
            }
            else{
                alert("Enter valid inputs.");
            }
        }