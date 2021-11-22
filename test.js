var test = [
    {
        name: "hello",
        age: [{item: "world"}]
    }
];

for (var i = 0; i < test.length; i++) {
    console.log(test[i]);
}
// Object

for (var i = 0; i < test.length; i++) {
    for (var j = 0; j < test[i].age.length; j++) {
        console.log(test[i].age);
    }
}
// Array of Object which contains the item: "World".

for (var i = 0; i < test.length; i++ ) {
    for (var j = 0; j < test[i].age.length; j++) {
        console.log(test[i].age[j].item);
    }
}
// "world"
// Finally this is the one!

for (var element in test) {
    console.log(element);
}
// 0

for (var element of test) {
    console.log(element);
}
// Object

for (var element in test) {
    console.log(test[element]);
}
// Object

for (var element of test) {
    console.log(test[element]);
}
// undefined

for (var index in test) {
    for (var value of index) {
        console.log(index[value]);
    }
}
// 0

for (var index in test) {
    for (var value of test) {
        console.log(test[value]);
    }
}
// undefined

for (var index in test) {
    for (var value in index) {
        console.log(value[index]);
    }
}
// 0

for (var value of test) {
    for (var index in value) {
        console.log(value[index]);
    }
}
// Array of Object which contains the item: "World".

/////////////////////////////////////////////////////////////////////////

// Testing to access individual elements with the same class name
var elems = document.getElementsByClassName("apple");

for (var i = 0; i < elems.length; i++) {
    console.log(elems[i].innerText);
}
// prints out 1 2 3 4 5 vertically

for (var i = 0; i < elems.length; i++) {
    console.log(elems[i].innerHTML);
}
// prints out 1 2 3 4 5 vertically


for (var i = 0; i < elems.length; i++) {
    const testVar = document.createElement("div");
    testVar.innerText = "Hello World";
    elems[i].appendChild(testVar);
}
// All the divs with the class apple gets a div with the innerText
// "Hello World" inserted into them.

for (var i = 0; i < elems.length; i++) {
    console.log(elems[i]);
}
// Prints out 5 divs with an inner div.