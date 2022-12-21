


/*В HTML-документе задан тег <button> с идентификатором btn и тег <input> с идентификатором val.
 Напишите скрипт, который выводит в консоль значение тега <input> при клике на кнопку.*/

function But() {
    let val = document.getElementById("val").value;
    console.log(val);
  };
  let btn = document.querySelector("#btn");
  btn.addEventListener('click' , But);

/*В HTML-документе есть тег <button> с идентификатором clicker. 
Напишите скрипт, который добавит обработку события клика на кнопку с идентификатором clicker.
 При нажатии на кнопку число внутри тега <button> должно увеличиваться на один.*/

let cl = document.getElementById('clicker');
cl.onclick = function() {
  var linkText = +cl.textContent;
  cl.textContent = ++linkText;
}

/*В HTML-документе задан тег <button> с идентификатором delete и тег <ul> c идентификатором points
 и c элементами <li> внутри. Напишите скрипт, который позволяет удалить последний
  элемент <li> в списке <ul> при нажатии на кнопку.*/

var removeButton = document.getElementById("delete");

removeButton.addEventListener("click", removeItem);

function removeItem() {
    let list  = document.getElementById("points");
    let listItems = list.getElementsByTagName("li");

    let last = listItems[listItems.length-1];
    list.removeChild(last);
};
////////////////////////////////////////////////////////
/*В HTML-документе задан тег <div> c идентификатором square в виде красного квадрата. 
У него есть атрибут style с указанными высотой и шириной в 100 пикселей. 
Напишите скрипт, который уменьшает ширину и высоту квадрата на 10% при клике по нему.*/

let removeDiv = document.getElementById("square");
removeDiv.addEventListener("click", Square);

function Square() {
  let square = document.getElementById("square");
  let squareHeigth = parseFloat(square.style.height) - parseFloat(square.style.height)*10/100;
  let squareWidth = parseFloat(square.style.width) - parseFloat(square.style.width)*10/100;
  square.style.height = squareHeigth + "px";
  square.style.width = squareWidth + "px";
};
//////////////////////////////////////////////////////////
/*В HTML-документе есть несколько тегов <p>. Внутри них указаны числа. 
Напишите скрипт, который позволяет при нажатии на любой параграф
 увеличить его содержимое на единицу.*/

 document.querySelector(".card").addEventListener('click', (event) => 
 event.target.innerHTML = parseInt(event.target.innerText) + 1)