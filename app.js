var x;
function getNumber(num){
    var input=document.getElementById("input");
    x=input.value+=num;
    
};
function forClear(){
    var input=document.getElementById("input");
    input.value="";
};
function getResult(){
    var input=document.getElementById("input");
    var a=eval(input.value);
    input.value= x + "=" + a+"";

}