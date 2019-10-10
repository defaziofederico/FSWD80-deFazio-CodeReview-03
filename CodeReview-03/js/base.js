 // //var age =document.getElementById["sum"]["age"].value;
 //            var hp = document.forms["sum"]["hp"].value;
 //            var sum = Number(age) + Number(hp);
  
 //            var res = document.getElementById('res');
 //            var res.innerHTML = '<h2>The sum of the numbers is ' + res + ' </h2>';

            
 //            console.log(a+b);//

	



// function insCalc() {
// 	var hp=100;
// 	var age=50;

// 	var sum=((hp*100)/(age+50));
// 	document.write(sum)

//         }

//     insCalc()
//     

// function insCalc () {
// var hp=100;
// var age=50;
// var country=austria;
// var country1=hungary;
// var country2=greece;

// if (country="austria") {
//  var res=(hp*100/(age+50));
//     console.log(res1);
// } else if (country1="hungary") {
// 	var res1=(hp*120/(age+100));
// 	console.log(res1);
// } else if (country2="greece") {
// 	 var res2=(hp*150/(age+3(+50)));
// 	 console.log(res2);
// }


// insCalc ();


// function insCalc() {
// var age = document.getElementById("age");
// var hp = document.getElementById("hp");
// var btn = document.getElementById("button");

// var sum = Number(age) + Number(hp);

            
// console.log(sum);
// }


// insCalc();
function calcIns () {
			var name1 = document.getElementById("name").value;
			
			var age1=document.getElementById("age").value;
			var age = Number(age1);
			
			var country = document.getElementById("selector");
			var wahl = country.options[country.selectedIndex].value;



			var horsepower = document.getElementById("horsepower").value;
			var hp = Number(horsepower);
			


			if (wahl=="Austria") {
				var res =Math.round(hp*100/age+50);
				document.getElementById("showsum").innerHTML="Dear " + name1 + " , your insurance is extremely cheap and will cost you only " + res + " EUR ";          ;
			}

			else if (wahl=="Hungary") {
				var res = Math.round(hp*120/age+100);
				document.getElementById("showsum").innerHTML="Dear " + name1 +" , your insurance is extremely cheap and will cost you only " + res + " EUR ";          ;

			}
			else {
				var res =Math.round(hp*150/(age+3)+50);
				document.getElementById("showsum").innerHTML="Dear " + name1 +" , your insurance is extremely cheap and will cost you only " + res + " EUR ";         ;
			}

		}	

		

		document.getElementById("btn").onclick = calcIns;
		// btn.addEventListener("click", calcSum);
