/*const myHeading = document.querySelector("h1");

myHeading.textContent = "Hello World Am Job And Am Trying To Code";

let iceCream = "chocolate";

if (iceCream === "chocolate") {
	alert("Now  we are talking");
} else {
	alert(" Nahh thank you  but  i like  chocolate");
}

document.querySelector("button").addEventListener("click", () => {
	alert(" Now you getting  there");
});

const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === " https://placehold.co/600x400") {
		myImage.setAttribute("src", " https://placehold.co/700x500");
	} else {
		myImage.setAttribute("src", "https://placehold.co/400");
	}
};

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	return mySrc === "https://placehold.co/600x400" : "https://placehold.co/400" ;
};
*/

// let myButton = document.querySelector("button");

// let myTitle = document.querySelector("h1");

// function setUserName() {
//     const myName = prompt("Please enter your name .");
//     localStorage.setItem("name", myName)
//     myTitle.textContent = `Mozila is  cool`, ${ myName }

//     if (!myName) {
//     setUserName()
// } else {
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `Mozilla is cool, ${storedName}`;

// }
// }

// myButton.onclick = () => {
//     setUserName();
// }

// const marks = 100;
// let studentName = "Job";

// function student() {
// 	if (marks === 100) {
// 		return "You have Passed your  test";
// 	} else if (marks === 50) {
// 		return " Average ";
// 	} else if (marks >= 45) {
// 		return "You have  gat  to put more  effort" + studentName;
// 	}
// }

// console.log(student);

// student();
const form = document.getElementById("marksForm");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	// alert("yoo");

	const marks = document.getElementById("marks").value;
	const name = document.getElementById("name").value;

	if (!name) {
		result.textContent = "Please enter your name.";
	} else if (!marks) {
		result.textContent = "Please enter a valid number.";
	} else {
		const grade =
			marks > 79
				? "A"
				: marks >= 60
				? "B-"
				: marks >= 59
				? "C-"
				: marks >= 40
				? "D"
				: "E";
		result.textContent = `${name} You scored ${marks}. Your grade is ${grade}.`;
		console.log(result);
	}
});
