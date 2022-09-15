var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings-menu-hight");
}
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}

// Like Function
const likeBtn = document.querySelectorAll(".like-btn");

likeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let CountDisplay = e.target.parentNode.querySelector("span");
    let count = CountDisplay.innerHTML;
    count = parseInt(count, 10);
    if (e.target.classList.contains("fa-regular")) {
      e.target.classList.remove("fa-regular");
      e.target.classList.add("fa-solid");
      CountDisplay.innerHTML = `${count + 1}`;
    } else {
      e.target.classList.add("fa-regular");
      e.target.classList.remove("fa-solid");
      CountDisplay.innerHTML = `${count - 1}`;
    }
  });
});

// Comment Function
const commentBtn = document.querySelectorAll(".comment-btn");

commentBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let commentBoxId = e.target.getAttribute("data-target");
    let commentCountSpan = e.target.parentElement.querySelector("span");
    let commentCount = parseInt(commentCountSpan.innerHTML, 10);
    let commentBox = document.getElementById(commentBoxId);
    let comments = commentBox.parentElement.querySelector(".comments");
    let commentInput = commentBox.querySelector("input");
    let commentSubmit = commentBox.querySelector("span");
    if (e.target.classList.contains("fa-regular")) {
      commentBox.classList.add("show");
      e.target.classList.remove("fa-regular");
      e.target.classList.add("fa-solid");
      commentSubmit.addEventListener("click", () => {
        commentInput.placeholder = "Comment Here";
        if (commentInput.value !== "") {

          //   Prev-Comment
          let prevTag = document.createElement("div");
          prevTag.setAttribute("class", "prev-comment");

          // Post-Profile-Icon
          let postProfileIcon = document.createElement("div");
          let profileImg = document.createElement("img");
          postProfileIcon.setAttribute("class", "post-profile-icon");
          profileImg.setAttribute("src", "images/profile-pic.png");

          // Right-Half
          let rightHalf = document.createElement("div");
          let username = document.createElement("p");
          let span = document.createElement("span");
          rightHalf.setAttribute("class", "right-half");
		  username.innerHTML = "John Nicolson";
          span.innerHTML = commentInput.value;

          postProfileIcon.appendChild(profileImg);
          prevTag.appendChild(postProfileIcon);
		  rightHalf.appendChild(username)
		  rightHalf.appendChild(span)
          prevTag.appendChild(rightHalf);
          comments.appendChild(prevTag);
          commentCountSpan.innerHTML = commentCount + 1;
          commentInput.value = "";
        } else {
          commentInput.placeholder = "No Input";
        }
      });
    } else {
      commentBox.classList.remove("show");
      e.target.classList.add("fa-regular");
      e.target.classList.remove("fa-solid");
    }
  });
});
