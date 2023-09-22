document.addEventListener(
	"DOMContentLoaded",
	function () {
		document
			.querySelector(".header__hamburger")
			.addEventListener("click", () => {
				document.querySelector("header").classList.toggle("opened");
			});
	},
	false,
);
