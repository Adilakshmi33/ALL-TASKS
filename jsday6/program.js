// print   1
//         1 2
//         1 2 3
//         1 2 3 4
//         1 2 3 4 5
var n=5;
for(var i=1;i<=n;i++){
    var line="";
    for(var j=1;j<=i;j++){
        line+=j;
    }
    console.log(line);
}


// print 1 2 3 4
//       1 2 3
//       1 2
//       1
var n=5;
for(var i=4;i>=1;i--){
    var line="";
    for(var j=1;j<=i;j++){
        line+=j;
    }
    console.log(line);
}


//print prime numbers 1-100 
var n=100;
for(i=1;i<=n;i++){
    for(j=2;j<=i;j++){
        if(i%j==0){
            break;
        }
    }
    if(i==j){
        console.log(i);
    }
}



//change the key->salary to salary of an employee inside an object
var obj={
    id:'402',
    name:'honey',
    designation:"Engineer",
    salary:"20k",
}
obj.salaryofanemployee=obj.salary;
delete obj.salary;
console.log(obj);


//print fibonacci series 
var f1=0;
var f2=1;
for(i=2;i<=5;i++){
    f3=f1+f2;
    console.log(f3);
    f1=f2;
    f2=f3;
}