// sum of numbers
var n=123;
var sum=1;
while(n>0){
    var r=n%10;
    sum=sum*r;
    n=Math.floor(n/10);
}
console.log(sum);

// product of numbers
var n=123;
var product=1;
while(n>0){
    var r=n%10;
    product=product*r;
    n=Math.floor(n/10);
}
console.log(product);

// rev the numbers
var n=123;
var rev=0;
while(n!=0){
    r=n%10;
    rev=rev*10+r;
    n=Math.floor(n/10);
}
console.log(rev);

// palindrome or not
var n=121;
var rev=0;
var pal=n;
while(n!=0){
    r=n%10;
    rev=rev*10+r;
    n=Math.floor(n/10);
}
if(pal==rev){
    console.log("true");
}
else{
    console.log("false");
}