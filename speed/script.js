const form = document.getElementById("speedForm");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	alert("yoo");
	const speed = document.getElementById("speed").value;

	const points =
		speed < 70
			? "OK"
			: Math.floor((speed - 70) / 5) > 12
			? "License suspended"
			: `Points: ${Math.floor((speed - 70) / 5)}`;

	result.textContent = `${points} `;
});
