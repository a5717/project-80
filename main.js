function get1 (){
    var input = [];
for(var i  = 1; i<=6; i++ ){
input.push(document.getElementById("input"+ i).value);
}
document.getElementById("display_paragraph1").innerHTML = input.join(". ") ; 
}
function get2 (){
    var input2 = [];
for(var f  = 1; f<=6; f++ ){
input2.push(document.getElementById("text"+ f).value);
}
document.getElementById("display_paragraph2").innerHTML = input2.join(". ") ; 
}