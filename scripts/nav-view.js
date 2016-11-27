export class NavigationView {

	constructor(){
        this.navLinks = document.querySelectorAll(".nav-item");
	}

    setHandler(handler, resources) {
		for( let item of this.navLinks) {
			const link = item.getAttribute("data-url");
			const resource = resources[link];

			item.addEventListener("click", (e) => {
				handler(resource);
			});
		}
	}
}