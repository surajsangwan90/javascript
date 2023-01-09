const obj_empbaseinfo= require("/Users/nitil/Desktop/JS Code/source/emp_baseinfo.json");
let obj_empaddresses=require("/Users/nitil/Desktop/JS Code/source/emp_addresses.json")
let obj_empsalary=require("/Users/nitil/Desktop/JS Code/source/emp_salary.json")

let merge=[]
let mergedoutput=[]
for (i=0; i<obj_empbaseinfo.length;i++)
{
    for (j=0; j<obj_empaddresses.length;j++)
    {
        if (obj_empbaseinfo[i].EmployeeId==obj_empaddresses[j].EmployeeId)
        {
            merge.push({...obj_empbaseinfo[i],...obj_empaddresses[j]})
            //merge[j].Address = JSON.stringify(merge[j].Address)
            // console.log(" merge.Address ",j, " is ", merge[j].Address)
            //merge.Address[j]
        }
    }

    }
    // console.log(merge)
    for (i=0; i<merge.length;i++)
{
    for (j=0; j<obj_empsalary.length;j++)
    {
        if (merge[i].EmployeeId==obj_empsalary[j].EmployeeId)
        {
            mergedoutput.push({...merge[i],...obj_empsalary[j]})
        }
    }

    }
     


// console.log(mergedoutput);


for (i=0; i<mergedoutput.length;i++)
     {
    mergedoutput[i]["Name"]= mergedoutput[i].FirstName+' ' + mergedoutput[i].MiddleName.join(' ')+" "+ mergedoutput[i].LastName
    delete mergedoutput[i].FirstName
    delete mergedoutput[i].MiddleName
    delete mergedoutput[i].LastName

     }

//     for (i=0; i<mergedoutput.length;i++)
  //   {
    //    delete mergedoutput[i].FirstName
      //  delete mergedoutput[i].MiddleName
       // delete mergedoutput[i].LastName

     //}
// console.log('final transformed output is ',JSON.parse(mergedoutput))
// console.log(mergedoutput.indexOf(mergedoutput[0].Name))

// var element = arr[fromIndex];
// arr.splice(fromIndex, 1);
// arr.splice(toIndex, 0, element);


//console.log(mergedoutput.splice(1,0))
for (i=0; i<mergedoutput.length;i++)
{
    for (j=0; j<mergedoutput[i].Address.length;j++)
    {
        if (mergedoutput[i].Address[j].type=='prmnt')
        {
            (mergedoutput[i].Address[j]={"Permanent":mergedoutput[i].Address[j]})
        }
        else if(mergedoutput[i].Address[j].type=='prsnt')
        {
            (mergedoutput[i].Address[j]={"Persent":mergedoutput[i].Address[j]})
        }
    }
}

console.log(mergedoutput[0].Address)
// console.log(mergedoutput[0].Address[0].Persent.type)
for (i=0; i<mergedoutput.length;i++)
{
    for (j=0; j<mergedoutput[i].Address.length;j++)
    {
        if ((mergedoutput[i].Address[j]=='Permanent') )
        {
            console.log('executed permanent')
            delete (mergedoutput[i].Address[j].Permanent.type)
        }
        // if (mergedoutput[i].Address[j].Persent.type=='prsnt')
        // {
        //     console.log('executed persent')
        //     console.log ( mergedoutput[i].Address[j].Persent.type)
        // }

    }
}
console.log(mergedoutput[0].Address)
// const array = ["apple", "orange", "banana"]
// const jsonString = JSON.stringify(Object.assign({"Fruits": ""}, array))
// console.log(jsonString)



// mergeddoutput_string =JSON.stringify(mergedoutput)
// console.log(mergeddoutput_string[0].type)
    // for (i=0; i<mergedoutput.length;i++)
    // {

    // }
