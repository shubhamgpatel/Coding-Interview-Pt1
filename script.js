// https://flaviocopes.com/how-to-count-properties-object-javascript/
window.onload = function(){ 
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
        let empobjects = Object.values(employees);
        empobjects.forEach(empobject => {  //for each too displayemployees

            let empNameLength = empobject.employeefname.length + empobject.employeelname.length; // check the length of employeename and lastname to write on next line
        let roleDet = Object.values(empobject.roles);   // to convert from object into array
            
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let span = document.createElement('span');
            let empImg = document.createElement('img');
            let featureImg = document.createElement('img');

            div.setAttribute('class', 'card');  // div for card
            // employee is featured or not
            featureImg.setAttribute("src", "crown.png");    
            featureImg.setAttribute("class", "crown");
            empobject.employeeisfeatured == '1' ? div.appendChild(featureImg) : "";
            
            //employee image ane name
            empImg.setAttribute("src", "http://sandbox.bittsdevelopment.com/code1/employeepics/"+empobject.employeeid+".jpg");
            empImg.setAttribute("class", "img-employee");
            empImg.setAttribute("alt", "employeePhoto");
            div.appendChild(empImg);
            let empNamecheck = ((empNameLength < 16) ? (empobject.employeefname.concat(" ",empobject.employeelname)) : (empobject.employeefname.concat("<br>",empobject.employeelname)));   //check for length of emp name
            let empname = document.createTextNode(empNamecheck);
            h2.appendChild(empname);
            div.appendChild(h2);
            //employee Bio 
            let bio = document.createTextNode(empobject.employeebio);
            p.appendChild(bio);
            div.appendChild(p);
            //role details loop 
            roleDet.forEach(rolecontent => {
                let role = document.createElement('span');

                let roletext = document.createTextNode(rolecontent.rolename);   //getting text in roletext
             
                role.className ="roleClass";    //giving class to set properly
                role.style.backgroundColor = rolecontent.rolecolor;

                role.appendChild(roletext);   //adding text with span tag
                span.appendChild(role);     

            div.appendChild(span);  //adding all to body
            });
            document.getElementById("employee_card").appendChild(div);
        });
}
