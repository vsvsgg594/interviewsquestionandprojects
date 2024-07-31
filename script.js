// Write a program which consist of single line and multiline comments.
console.log("this is a way to wirte single line comment");
// Write a program which consist of single line and multiline comments.
// Write a program which consist of single line and multiline comments.
// Write a program which consist of single line and multiline comments.
console.log("this is way to write to multi-line comment");
// . Create an array consisting of fruits names and when we click on a button sort it in 
// descending order.
let arr=["apple","mango","pineapple","lemon","carrot"];
let btn=document.querySelector(".btn");
btn.addEventListener("click",function(){
    arr.sort();
    

})
console.log(arr);
// Write a program with FOR/IN loop.
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for( let i in arr){
    console.log(i);
}
// Create an object "person" with properties firstname and lastname. Display these 
// properties using 2 different ways of accessing.
person={firstName:"vikash",lastNmae:"sharma"};
console.log(person.lastNmae);
console.log(person.firstName);
console.log(person[firstName]);
console.log(person[lastNmae]);