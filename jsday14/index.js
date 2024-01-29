// posts using fetch method
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) =>response.json()) //convert into json
.then((result)=>console.log(result)); //get the result(data)


// using XML HTTP
let a=new XMLHttpRequest();
a.open("GET","https://jsonplaceholder.typicode.com/posts");
a.send();
a.onload=function(){
    if(a.status!==200){
        console.log("error");
    }
    else{
        console.log(a.response);
    }
}
a.onerror=function(){
    console.log("error");
}