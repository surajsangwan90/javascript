let employee= {
    "FirstName":"Suraj",
    "MiddleName":['singh',"kumar", "asdfsd", "afsdd"],
    "LastName":"Chaudhary",
    "Address":[
        
        {"type":"prmnt","HomeNo":271,"VillageName":"Kitholi","PostName":"Jani Khurd", "District":"Meerut"},

             {"type":"prsnt","FlatNo":229,"Tower":"G Block", "Area":"Gaur City", "District":"Gautam Budh Nagar"},
             {"type":"prsnt","FlatNo":229,"Tower":"B Block", "Area":"Gaur City", "District":"Gautam Budh Nagar"}
]

    }

let filteredAddress = employee.Address.filter((addr) => addr.FlatNo == 229);


// funtion persist db (xyz) - save database , print 

filteredAddress.forEach(xyz => console.log(xyz.Area));



let areas = []

filteredAddress.forEach(xyz => areas.push(xyz.Area));
console.log(areas);


console.log(employee)


