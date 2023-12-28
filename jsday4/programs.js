//print even or odd num
var i=402;
if(i%2==0){
    console.log("Even number");
}
else{
    console.log("odd number");
}


//print prime or not
var num=7;
count=0;
for(var i=1; i<=num;i++){
    if(num%i==0){
        count=count+1
    }
    }
if(count==2){
    console.log("Prime number");
}
else{
    console.log(" Not a prime number");
}


//print eligible for marriage or not
var gender="female";
var age=21;
if(gender=="female" && age>=18){
    console.log("she is eligible for marriage");
}
else if(gender=="male" && age>21){
    console.log("he is eligible for marriage");
}
else {
    console.log("not eligible for marriage");
}


//print month (correct month or not)
var month="december";
switch(month){
    case "january":
        console.log(month);
        break;
    case "december":
        console.log(month);
        break;
    default:
        console.log("not valid");
}
