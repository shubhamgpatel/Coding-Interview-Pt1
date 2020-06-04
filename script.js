// https://flaviocopes.com/how-to-count-properties-object-javascript/
window.onload = function(){ 
    const employee_card = document.getElementById("employee_card");
const xhr = new XMLHttpRequest();
xhr.onload = (e) => {
    if(xhr.status == 404){alert("Employee not found");}
    let employees = JSON.parse(xhr.responseText); //taking response and parse into json
    empfuntn(employees);   //calling a method to keep it simple.
};
xhr.open('GET','http://sandbox.bittsdevelopment.com/code1/fetchemployees.php',true);
xhr.send();
}
function empfuntn(employees){
    let html = '';	//to write all data 
        let empobjects = Object.values(employees);
        empobjects.forEach(empobject => {  //for each too displayemployees
		let empNameLength = empobject.employeefname.length + empobject.employeelname.length; // check the length of employeename and lastname to write on next line
        let roleDet = Object.values(empobject.roles);   // to convert from object into array
		
            html += "<div class='card'>";
             html += "<div>"+ (empobject.employeeisfeatured == '1' ? "<img src='crown.png' class='crown'/>" : "") +"</div>";
            html += "<div><img src='http://sandbox.bittsdevelopment.com/code1/employeepics/" + empobject.employeeid +".jpg' alt='image' title='Employee' class='img-employee'/></div>";
            html += "<div><h2>" + ((empNameLength < 16) ? (empobject.employeefname.concat(" ",empobject.employeelname)) : (empobject.employeefname.concat("<br>",empobject.employeelname))) + "</h2></div>"; 
            html += "<div><p>" + empobject.employeebio +"</p></div>";
            roleDet.forEach(rolecontent => {
            html += "<span class='rolecolor' style='background: "+ rolecontent.rolecolor + "'>"+ rolecontent.rolename + "</span> "
        });
            html += "</div>";
        });
        employee_card.innerHTML = html;	//writing all data to innerhtml
}
