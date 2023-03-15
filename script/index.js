var homeLink = document.getElementsByClassName("navbar-brand")[0];
var pages = Array.prototype.slice.call(document.getElementsByClassName("container-fluid")).slice(1);
var links = [homeLink, ...document.getElementsByClassName("nav-link")];

function linkClick(target) {
	for (let i=0;i<pages.length;i++) {
		if (pages[i].style.display != "none")
			pages[i].style.display = "none";
		if (target == links[i]) {
			pages[i].style.display = "block";
			if (i != 0)
				homeLink.style.display = "block";
			else
			homeLink.style.display = "none";
		}
	}
}
