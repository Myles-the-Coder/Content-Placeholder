const header = document.getElementById("header");
const profileImg = document.getElementById("profile_img");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const date = document.getElementById("date");
const excerpt = document.getElementById("excerpt");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<figure class="image is-4by3"> <img src="https://images.unsplash.com/photo-1575736325437-cffaa43ebad4?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cm5TS0RId3dZVWt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Placeholder image"/></figure>';
  profileImg.innerHTML =
    '<figure class="image is-48x48"> <img src="https://images.unsplash.com/photo-1579776638229-1f37ebebcf8f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Placeholder image"/></figure>';
  title.innerHTML = "Adam Delroni";
  subtitle.innerHTML = "@adam_delroni";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laborequidem dignissimos illum harum deserunt iusto accusantium explicabo quo? Cupiditate, vel quasi! Nam consequatur ad nobis officia re accusamus veritatis!";
  date.innerHTML = "5:09 PM - 7 Apr 2021";

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bg_text.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });
}

