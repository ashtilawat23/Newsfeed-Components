// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function menuMaker (menu){
const divMenuContainer = document.createElement('div');
const ulContainer = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li');
const menuButton = document.createElement('span');

divMenuContainer.classList.add("menu");
menuButton.classList.add("menu-button");

menuButton.addEventListener('click',(event)=>{
  menuButton.classList.toggle("menu")
});

li1.textContent = menuItems[0];
li2.textContent = menuItems[1];
li3.textContent = menuItems[2];
li4.textContent = menuItems[3];
li5.textContent = menuItems[4];
li6.textContent = menuItems[5];

divMenuContainer.appendChild(ulContainer);
ulContainer.appendChild(li1);
ulContainer.appendChild(li2);
ulContainer.appendChild(li3);
ulContainer.appendChild(li4);
ulContainer.appendChild(li5);
ulContainer.appendChild(li6);

return divMenuContainer
}

const menus = menuMaker(menuItems);
document.body.prepend(menus);

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
