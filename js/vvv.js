let pics = ["img/pic1.png","img/pic2.png","img/pic3.png","img/pic4.png"]
for (let i = 0; i < pics.length; i++) {
  let img = document.createElement("img");
  img.setAttribute("src", pics[i]);
  document.body.append(img);
 }
 console.log(img);