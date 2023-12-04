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
 */
var element = document.getElementsByClassName("content")[0];
var input1 = document.querySelector("#input1");
var span1 = document.getElementsByTagName("span")[0];

var inputs = document.getElementsByName("choose");

function changeStyle() {
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
}

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
