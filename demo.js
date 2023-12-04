/** Agenda
 * -------------------
 *  Events
 * ---------------------
 *  1- Add Attribute on the Element
 *  2- attach function
 *  3- addEventLisenter
 * -----------------------------
 * 1- Dome
 *  -- How to select from dom object
 *  -- Change Content
 *  -- Change Style
 *  -- Attributes
 *  -- CreateElement
 */

/** Change Content
 * -------------------------
 *  1- innerText
 *  2- innerHTML
 *  3- textContent(search)
 * ---------------- Input -----------
 *  == value
 *  == checked
 * -----------------Change Style----------------------
 *  1- Style Object
 *  2- ClassName
 *  3- ClassList
 *      == add
 *      == remove
 *      == toggle
 *
 *
 * -----------------Attributes--------------
 *  == getAttribute
 *  == setAttribute
 *  == removeAttribute
 *  == hasAttribute
 *
 */
// var element = document.getElementsByClassName("content")[0];
// var input1 = document.querySelector("#input1");
// var span1 = document.getElementsByTagName("span")[0];
// var inputs = document.getElementsByName("choose");

// var link1 = document.links[0];
// var link2 = document.links[1];
// var link3 = document.links[2];
// var img = document.images[0];

//function execute() {
//img.setAttribute("src", "./Images/2.jpg");
// console.log(img.getAttribute("src"));
// if (link1.hasAttribute("id")) {
// 	link1.removeAttribute("id");
// } else {
// 	link1.setAttribute("id", "newID");
// }
// console.log(link1.hasAttribute("test"));
// link1.removeAttribute("id");
//link1.setAttribute("class", "jsClass");
// link1.setAttribute("id", "newID");
//console.log(link3.getAttribute("id"));
//}
// function changeStyle() {
// element.classList.toggle("jsClass");
// element.classList.remove("myP");
// element.classList.add("jsClass");
// console.log(element.classList);
// element.className += " jsClass";
// console.log(element.className); // get
// style Object
// element.style.backgroundColor = "orange";
// element.style.color = "#fff";
// element.style.padding = "30px";
// }

// function execute() {
// 	for (var i = 0; i < inputs.length; i++) {
// 		if (inputs[i].checked) {
// 			console.log(inputs[i].value);
// 			span1.innerHTML = inputs[i].value;
// 		}
// 	}
// }
// function execute() {
// 	console.log(input1.value);
// 	span1.innerHTML = input1.value;
// 	// input1.value = "React Course"; // set Value
// 	// console.log(input1.value); // get
// }
// function changeContent() {
// 	element.innerHTML = "Hello";
// 	console.log(element.innerText);
// 	element.innerText = "<h1>Hello From ITI</h1>"; // set
// 	element.innerHTML = "<h1>Hello From ITI</h1>"; // set
// }

// var parent = document.getElementById("parent");
// var element = document.createElement("p");
// var myText = document.createTextNode("welcome dot net track");

// var span = document.createElement("span");
// span.setAttribute("id", "span1");
// span.innerHTML = "Welcome Span";
// console.log(span);
// element.appendChild(myText);
// element.innerHTML = "Welcome Dot net Track";

// element.setAttribute("id", "p1");
// element.setAttribute("class", "jsClass");
// function createNewElement() {
// 	var element = document.createElement("p");

// 	element.innerHTML = "Welcome Dot net Track";
// 	console.log(element);
// 	// parent.appendChild(element);
// 	// parent.appendChild(span);
// 	// parent.append(element, span);
// }

/**----------- */

// var tbody = document.getElementById("tbody");
// function addNewRow() {
// 	var tr = document.createElement("tr");
// 	var td1 = document.createElement("td");
// 	var td2 = document.createElement("td");
// 	var td3 = document.createElement("td");
// 	td1.innerHTML = "1";
// 	td2.innerHTML = "Mona";
// 	td3.innerHTML = "30";

// 	tr.append(td1, td2, td3);
// 	tbody.append(tr);
// }
