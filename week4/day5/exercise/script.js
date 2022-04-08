const robots = [
{
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  image: 'https://robohash.org/1?200x200'
},
{
  id: 2,
  name: 'Ervin Howell',
  username: 'Antonette',
  email: 'Shanna@melissa.tv',
  image: 'https://robohash.org/2?200x200'
},
{
  id: 3,
  name: 'Clementine Bauch',
  username: 'Samantha',
  email: 'Nathan@yesenia.net',
  image: 'https://robohash.org/3?200x200'
},
{
  id: 4,
  name: 'Patricia Lebsack',
  username: 'Karianne',
  email: 'Julianne.OConner@kory.org',
  image: 'https://robohash.org/4?200x200'
},
{
  id: 5,
  name: 'Chelsey Dietrich',
  username: 'Kamren',
  email: 'Lucio_Hettinger@annie.ca',
  image: 'https://robohash.org/5?200x200'
},
{
  id: 6,
  name: 'Mrs. Dennis Schulist',
  username: 'Leopoldo_Corkery',
  email: 'Karley_Dach@jasper.info',
  image: 'https://robohash.org/6?200x200'
},
{
  id: 7,
  name: 'Kurtis Weissnat',
  username: 'Elwyn.Skiles',
  email: 'Telly.Hoeger@billy.biz',
  image: 'https://robohash.org/7?200x200'
},
{
  id: 8,
  name: 'Nicholas Runolfsdottir V',
  username: 'Maxime_Nienow',
  email: 'Sherwood@rosamond.me',
  image: 'https://robohash.org/8?200x200'
},
{
  id: 9,
  name: 'Glenna Reichert',
  username: 'Delphine',
  email: 'Chaim_McDermott@dana.io',
  image:'https://robohash.org/9?200x200'
},
{
  id: 10,
  name: 'Clementina DuBuque',
  username: 'Moriah.Stanton',
  email: 'Rey.Padberg@karina.biz',
  image:'https://robohash.org/10?200x200'
}
];

function createRobots(arr){

  let screen = document.getElementsByTagName("section")[0];
  arr.forEach(function (element){
   let robot = document.createElement("div");
   robot.setAttribute("id",element["id"]);
   
   let robotImage = document.createElement("img");
   robotImage.setAttribute("src", element["image"]);
   
   let robotTag = document.createElement("p");
   let robotName = document.createTextNode(element["name"]);
   robotTag.appendChild(robotName);
   
   let robotEmail = document.createElement("p");
   let eMail = document.createTextNode(element["email"]);
   robotEmail.appendChild(eMail);

   robot.appendChild(robotImage);
   robot.appendChild(robotTag);
   robot.appendChild(robotEmail);
   screen.appendChild(robot);
 })
}

createRobots(robots)

const searchBar = document.getElementsByTagName("input")[0];
searchBar.addEventListener("keyup", filterRobots);

function filterRobots(){
  let screen = document.getElementsByTagName("section")[0];
  screen.innerHTML = "";

  const matched = robots.filter ((element) => {
    return element.name.toLowerCase().includes(searchBar.value.toLowerCase())
  })
  if (searchBar.value.length) {
    createRobots(matched)
  } else {
    createRobots(robots)
  }
}


