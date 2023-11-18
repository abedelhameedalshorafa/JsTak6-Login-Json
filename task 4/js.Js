copy=()=>{
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;

    let nameSpan=document.getElementById("nameSpan");
    let emailSpan=document.getElementById("emailSpan");
    let mobileSpan=document.getElementById("mobileSpan");

    nameSpan.innerHTML=name;
    emailSpan.innerHTML=email;
    mobileSpan.innerHTML=mobile



    let table=document.getElementById("table");
    let tableRow=document.createElement("tr");
    tableRow.innerHTML=`
    <td>${name}</td>
    <td>${email}</td>
    <td>${mobile}</td>`;
    table.appendChild(tableRow);

    
}