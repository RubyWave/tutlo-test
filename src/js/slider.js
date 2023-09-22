import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

document.addEventListener(
	"DOMContentLoaded",
	function () {
		// eslint-disable-next-line no-unused-vars
		const swiper = new Swiper(".swiper", {
			modules: [Navigation, Autoplay],
			loop: true,
			autoHeight: true,
			navigation: {
				nextEl: ".custom-swiper-button-next",
				prevEl: ".custom-swiper-button-prev",
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
		});
	},
	false,
);
