// https://flaviocopes.com/how-to-count-properties-object-javascript/
window.onload = function(){ 
    const employee_card = document.getElementById("employee_card");
const xhr = new XMLHttpRequest();
xhr.onload = (e) => {
    if(xhr.status == 404){alert("Employee not found");}
    let arrObj1 = JSON.parse(xhr.responseText);
    emp(arrObj1);
};
xhr.open('GET','http://sandbox.bittsdevelopment.com/code1/fetchemployees.php',true);
xhr.send();
}
function emp(arrObj1){
    var html = '';
    for(let i = 1; Object.keys(arrObj1).length ; i++){
          
        let store =  arrObj1[i].roles;
         let arrconvert = Object.values(store); 
            for(let j = 0; j < store.length; j++){
               console.log(arrconvert);

            employee_card.innerHTML += "<div class='card'><div>"+ (arrObj1[i].employeeisfeatured == '1' ? "<img src='crown.png' class='crown'/>" : "") +"</div><div><img src='http://sandbox.bittsdevelopment.com/code1/employeepics/" + arrObj1[i].employeeid +".jpg' alt='image' title='Employee' class='img-employee'/></div><div><h2>" + arrObj1[i].employeefname + " " + arrObj1[i].employeelname +"</h2></div><div><p>" + arrObj1[i].employeebio +"</p></div><div class='rolecolor' style='background:"+ arrconvert[j].rolecolor + "'>"+ arrconvert[j].rolename  + "</div></div><br/>";
            }
    }
    employee_card.innerHTML = html;
}
