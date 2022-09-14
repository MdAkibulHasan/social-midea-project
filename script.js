var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");


function settingsMenuToggle(){

       settingsmenu.classList.toggle("settings-menu-hight");
}
darkBtn.onclick=function(){
	darkBtn.classList.toggle("dark-btn-on");
	document.body.classList.toggle("dark-theme");

if (localStorage.getItem("theme")=="light"){

 	localStorage.setItem("theme","dark");
} 
else{
	localStorage.setItem("theme","light");
	}

}


if(localStorage.getItem("theme")=="light"){
	darkBtn.classList.remove("dark-btn-on");
	document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
	darkBtn.classList.add("dark-btn-on");
	document.body.classList.add("dark-theme");

}
else{
	localStorage.setItem("theme","light");
}


// Like Function 
const likeBtn = document.querySelectorAll(".like-btn");

likeBtn.forEach(btn => {
	btn.addEventListener("click" , (e) => {
		let CountDisplay = e.target.parentNode.querySelector("span");
		let count = CountDisplay.innerHTML;
		count = parseInt(count,10);
		if(e.target.classList.contains("fa-regular"))
		{
			e.target.classList.remove("fa-regular");
			e.target.classList.add("fa-solid");
			CountDisplay.innerHTML = `${count + 1}`;
		}
		else{
			e.target.classList.add("fa-regular");
			e.target.classList.remove("fa-solid");
			CountDisplay.innerHTML = `${count - 1}`;
		}
	})
})



