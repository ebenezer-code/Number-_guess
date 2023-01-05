// let fruits = [];
// fruits[99999] = 5;
// fruits["age"] = 25
// console.log(fruits);



// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
//     {id: 4, name: "John"}
//   ];
// const newUser = users.find(user => user.id > 2);
// const newUser2 = users.filter(user => user.id > 2);
// const newUser3 = users.map(user => user.id > 2);


// console.log(newUser,newUser2,newUser3);
let evenArray = [1,3,2,3,4,5,2,1];
    var arrayOut = [];
    var count = 0;
    var start = false;

    for (i = 0; i < evenArray.length; i++) {
        for (j = 0; j < arrayOut.length; j++) {
            if ( evenArray[i] == arrayOut[j] ) {
                start = true;
           }
      }
     count++;
    if (count == 1 && start == false) {
        arrayOut.push(evenArray[i]);
    }
    start = false;
    count = 0;
    }
    console.log(arrayOut);

    let evenArray2 = [1,3,2,3,4,5,2,1];
    
    var newArray = evenArray2.filter((item,index,arr) => {
       return  arr.indexOf(item) === index;;
    })
    console.log(newArray);
    ;



    let value = [1,2,1,2,2,4,5];
    let a = [];
    for(let i = 0; i < value.length; i++) {
        if(a.indexOf(value[i]) === -1) {
            a.push(value[i])
        }
    }
    console.log(a);
function formatWords(str) {
    let char = str;

    let arr = [...char];
    for(let i = 0; i < arr.length; i++) {
        console.log(arr);
    }

}
formatWords("code is fun")

