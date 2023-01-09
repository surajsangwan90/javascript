// const config = require("/Users/nitil/Desktop/JS Code/source/employee_addresses.json");
// console.log(config[0].FirstName)

// let objaddress=[]
// const fs =require('fs');
// fs.readFile('/Users/nitil/Desktop/JS Code/source/employee_addresses.json','utf-8', (err,jsonString)=> {
// if (err) {
// console.log(err)
// }
// else {
//     const data=JSON.parse(jsonString);
//     objaddress.push(data)
//     console.log(data[1].EmpoyeeId);
// }
// }
// )
// console.log(jsonString)


// const obj_baseinfo = require('/Users/nitil/Desktop/JS Code/source/employee_baseinfo.json');
// const obj_salary = require('/Users/nitil/Desktop/JS Code/source/employee_salary.json');
// const obj_address= require('/Users/nitil/Desktop/JS Code/source/employee_addresses.json');
// const obj_baseinfonew = require('/Users/nitil/Desktop/JS Code/source/employee_baseinfo.json');
// const obj_salarynew = require('/Users/nitil/Desktop/JS Code/source/employee_salary.json');
// const obj_addressnew= require('/Users/nitil/Desktop/JS Code/source/employee_addresses.json');
let x = { a: 1, b: 2, c: 3 }

let y = {c: 3, d: 5, e: 6 }

// let z = Object.assign(obj_baseinfo, obj_address, obj_salary)

// console.log(z)           
// let object= obj_baseinfo.concat(obj_salary,obj_address)
// console.log(object)
// let a= x.concat(y)
// console.log(a)
// let abc= [...obj_baseinfo, ...obj_salary, ...obj_address]
// console.log(abc)

// for (i=0; i<obj_baseinfonew.length; i++)
// {
//     console.log(obj_baseinfonew[i].EmployeeId)
// }




// let newobj_empbase= require("/Users/nitil/Desktop/JS Code/source/employee_baseinfo.json")
// let newobj_empsalary= require("/Users/nitil/Desktop/JS Code/source/employee_salary.json")
// let newobj_empaddress= require("/Users/nitil/Desktop/JS Code/source/employee_addresses.json")
// let obj_empbaseinfo=require("/Users/nitil/Desktop/JS Code/source/emp_baseinfo.json")
// let obj


// for (i=0; i<newobj_empbase.length; i++)
// {
    
//     console.log(newobj_empbase[i].EmployeeId)
// }
// console.log('object length is',newobj_empbase.length);


// for (i=0; i<obj_empbaseinfo.length; i++)
{
    
    // console.log(obj_empbaseinfo[i].EmployeeId)
}
// console.log('object or string is',obj_empbaseinfo);
var request1 = [{
    ObjId: 174864,
    ObjMutationD: "2010-07-09T00:00:00.000Z",
    ObjMitarbeiterS: "epf",
    ObjAufId: 142
  }, {
    ObjId: 175999,
    ObjMutationD: "2010-07-09T00:00:00.000Z",
    ObjMitarbeiterS: "epf",
    ObjAufId: 149
  }],
  request2 = [{
    ObjId: 174864,
    MulPfadS: "M:\\Originalbilder\\FGS\\95nn",
    MulDateiS: "9576.305-034-1",
    MulExtentS: "jpg"
  }, {
    ObjId: 177791,
    MulPfadS: "M:\\Originalbilder\\FGS\\95nn",
    MulDateiS: "9576.305-035-1",
    MulExtentS: "jpg"
  }];

  var result = [...[request1, request2].reduce((m, a) => (a.forEach(o => m.has(o.ObjId) && Object.assign(m.get(o.ObjId), o) 
  || m.set(o.ObjId, o)), m), new Map).values()];

  console.log(result);