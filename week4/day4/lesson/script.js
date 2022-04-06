// # Part I
// 1) Create a TV function constructor with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
function tv (brand_name, channel_num='1', volume_num='50') {
    this.brand = brand_name,
    this.channel = channel_num,
    this.volume = volume_num,
// 2) Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
this.increse = function () {this.volume++};
this.decrese = function(){this.volume--};
};


// 3) Create an object for the LG TV
const lgtv = new tv("LG");

// 4) Call the inscrease method, and check if the volume changed
lgtv.increse();
console.log(lgtv);

// ## Exercise1
// Pass this object {name: 'Harry Potter',house: 'Gryfindor',goodstudent : false}as an argument of the getDetails function.
// Destructure the object in the parameter (ie. you should have 3 parameters : name, house and goodstudents) and console.log them
function getDetails(name, house, goodstudent) {
    this.name = name,
    this.house = house,
    this.goodstudent = goodstudent, 
    console.log(name, house, goodstudent)
}

const hp = new getDetails('Harry Potter', 'Gryfindor', false);
console.log(hp)