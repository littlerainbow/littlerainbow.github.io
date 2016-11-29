export class NavigationView {

    setHandler(handler, resources, links) {
		for( let item of links) {
			const link = item.getAttribute("data-url");
			const resource = resources[link];

			item.addEventListener("click", (e) => {
				handler(resource);
			});
		}
	}
}