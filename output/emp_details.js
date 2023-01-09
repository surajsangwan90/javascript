const obj_empbaseinfo=require("/Users/nitil/Desktop/JS Code/source/emp_baseinfo.json");
let obj_empaddresses=require("/Users/nitil/Desktop/JS Code/source/emp_addresses.json")
let obj_empsalary=require("/Users/nitil/Desktop/JS Code/source/emp_salary.json")

var employee= obj_empbaseinfo.concat(obj_empaddresses,obj_empsalary)

let details= []

for (i=0;i<obj_empbaseinfo.length;i++)
{
    for(j=0;j<obj_empaddresses.length; j++)
    {
        if (obj_empbaseinfo[i].EmployeeId==obj_empaddresses[j].EmployeeId)
        {
            details.push(obj_empbaseinfo[i])
            details.push(obj_empaddresses[j])
        //    let acd=obj_empbaseinfo[i]
        //    let acf= obj_empaddresses[j]
        //     // let abcd=acd.concat(acf)
        //     console.log(acd)

        }
    }
}
let fulldetails= []

for (i=0;i<details.length;i++)
{
    for(j=0;j<obj_empsalary.length; j++)
    {
        if (details[i].EmployeeId==obj_empsalary[j].EmployeeId)
        {
            fulldetails.push(details[i])
            fulldetails.push(obj_empsalary[j])

        }
    }
}

// console.log("least details is", details.flat())

// console.log(' \n')
// console.log("Full details is", fulldetails)

var result = [...[obj_empbaseinfo, obj_empaddresses,obj_empsalary].reduce((m, a) => (a.forEach(o => m.has(o.EmployeeId) && Object.assign(m.get(o.EmployeeId), o) 
|| m.set(o.EmployeeId, o)), m), new Map).values()];

//   console.log(result);

//   console.log(result[1])

// for (i=0; i<results.length; i++)
// {

// }
let data_1= result.map((object,i) => {
    return {...object, fullName: result[i].FirstName+' '+result[i].MiddleName[0]+' '+result[i].MiddleName[1]+' '+result[i].LastName};
  
  });
  console.log(data_1)
  for (i=0; i<data_1.length;i++)
  {
      delete data_1[i].FirstName;
      delete data_1[i].MiddleName;
      delete data_1[i].LastName;
  }
  console.log(data_1)
