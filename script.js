
function size()
{
	var header = document.getElementById("header");
	var back_img = document.getElementById("background");
	header.style.height = ( window.innerWidth * 0.66  ) + "px";
	back_img.style.height = ( window.innerWidth * 0.66  ) + "px";
	back_img.style.width = (window.innerWidth-12) + "px";
}


size();
window.onresize = size;

