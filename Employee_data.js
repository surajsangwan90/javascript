let employee= [{
    "FirstName":"Suraj",
    "MiddleName":['singh',"kumar"
],
    "LastName":"Chaudhary",
    "Address":[
        
        {"type":"prmnt","HomeNo":271,"VillageName":"Kitholi","PostName":"Jani Khurd", "District":"Meerut"},

             {"type":"prsnt","FlatNo":229,"Tower":"G Block", "Area":"Gaur City", "District":"Gautam Budh Nagar"},
             {"type":"prsnt","FlatNo":229,"Tower":"B Block", "Area":"Gaur City", "District":"Gautam Budh Nagar"}
]

    }]
// var result= employee.Address.filter(addrs =>addrs.type=="prsnt");
// console.log(result)
// console.log(employee[0].Address)


// for(let i = 0; i < employee.length; i++) {
//     if (employee[0].Address.District=="Meerut") {
//         console.log("employee[0].Address")

//     }
// }
let addresses=[]
for(i=0; i<employee.length;i++) 
{
for (j=0; j<employee[i].Address.length; j++)
{
    if(employee[i].Address[j].FlatNo==229)
    {
        addresses.push(employee[i].Address[j])
        // console.log(employee[i].Address[j])
    }
}
}
addresses.push({"type":"prsnt","FlatNo":239,"Tower":"B Block", "Area":"Gaur City", "District":"Gautam Budh Nagar"})
console.log(addresses)
console.log(employee[0])