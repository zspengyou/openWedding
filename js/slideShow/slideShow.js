window.onload = function myFunction() {
  var img = $("#blessingForJayAndYafei");
  playMusic();
  showPicturesFromFriends(img);

  function playMusic() {
    //   var audio = $("#MarryMe");
    var audio = document.getElementById("MarryMe");
    audio.play();
    console.log(
      "https://developers.google.com/web/updates/2017/09/autoplay-policy-changes"
    );
  }

  async function showPicturesFromFriends(img) {
    for (var continent in worldObj) {
      console.log("continent " + `${continent}`);
      // continent = "4Europe";
      var urls = worldObj[continent]["urls"];
      for (var index in urls) {
        var src = urls[index]["url"];
        console.log("src: " + `${src}`);
        img.attr("src", src);
        await sleep();
      }
    }
    showPicturesofUs(img);
  }

  function showPicturesofUs() {
    img.attr("src", "../data/us/we.jpg");
  }

  function sleep() {
    var slider = document.getElementById("myRange");
    var value = slider.value;
    var delay = value;
    return new Promise((resolve) => setTimeout(resolve, delay));
  }
};

// var slideIndex = 0;
// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }

//   slides[slideIndex].style.display = "block";
//   dots[slideIndex].className += " active";
//   slideIndex++;
//   setTimeout(showSlides, 2000); // 切换时间为 2 秒
// }
