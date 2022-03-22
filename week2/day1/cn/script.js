let addressNumber = 1;
let addressStreet = "Hukok";
let country = "Israel";
let globalAddress = addressStreet + " " + addressNumber + ", in " + country;
//document.write("I live in " + globalAddress);

let year = 1984;
let future = 2525;
let age = future - year;
//document.write("I will be " + age + " in " + future);

let pets = ['cat','dog','fish','rabbit','cow'];
//document.write(pets[1]);
pets.splice(3, 1, "horse")
document.write(pets);
document.write(pets.length);

