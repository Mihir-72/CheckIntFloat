function res() {
  const data = Number(document.getElementById("data").value);

if(Number.isInteger(data) === true){
  // console.log("true")
  document.getElementById("output").innerText = `${data} is a integer`;
}
else{
  // console.log("false")
  document.getElementById("output").innerText = `${data} is a float`;

}

}
    // console.log(typeof data)
 