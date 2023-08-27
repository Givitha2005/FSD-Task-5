var jsonData = [{
    "person" : "John", 
    "message"   : "hi, how are you?",
    "mail": "john@gmail.com"
},
{
    "person" : "George", 
    "message"   : "yes, I'm fine.",
    "mail": "george@gmail.com"
}];

//for loop
for(var i = 0; i < jsonData.length; i++) {
    var obj = jsonData[i];

    console.log(obj.person);
    console.log(obj.message);
    console.log(obj.mail);

}
//for Each
// jsonData.forEach(function(obj) { console.log(obj.message); });
jsonData.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} : ${value}`);
    });
});  

//for In
for (var key in jsonData) {
if (jsonData.hasOwnProperty(key)) {
  console.log(jsonData[key].person);
  console.log(jsonData[key].message);
}
}

//for Of

for (let element of jsonData) {
    console.log(element.person);
}


