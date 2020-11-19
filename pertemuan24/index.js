console.log("Basic JavaScript");

//Conditional JvaScript

/*
let firstName = "john";
let isMarried = true;
if (isMarried) {
    console.log(firstName + " is married");
}
else {
    console.log(firstName + " is not married");
}
*/

/*
    jika umur < 13 tahun maka tampilkan kategori anak-anak
    jika umur 13 sampai 16 tahun tampilkan kategori remaja
    jika umur 17 sampai 25 tahun tampilkan kategori anak muda
    jika umur 25 sampai 50 tahun tampilkan kategori orang dewasa
*/

/*
let firstName = "John";
let job = "teacher";
switch (job) {
    case "teacher":
        console.log(firstName + " is a teacher");
        break;
    case "driver":
        console.log(firstName + " is a driver");
        break;
    case "instructor":
        console.log(firstName + " is a instructor");
        break;
    default:
        console.log(firstName + " does something else");
        break;
}
*/


/*
let umur = 40;
if (umur < 13) {
    console.log("Kategori anak-anak");
}
else if (umur >= 13 && umur < 17){
    console.log("Kategori remaja");
}
else if (umur >= 17 && umur < 26){
    console.log("Kategori anak muda");
}
else if (umur >= 26 && umur <= 50){
    console.log("Kategori orang dewasa");
}
*/

/*
let umur = 25;
switch(true){
    case umur < 13:
        console.log("Kategori anak-anak");
        break;
    case umur >= 13 && umur < 17:
        console.log("Kategori remaja");
        break;
    case umur >= 17 && umur < 26:
        console.log("Kategori anak muda");
        break;
    case umur >= 26 && umur <= 50:
        console.log("Kategori orang dewasa");
        break;
    default:
        console.log("Tidak ada dalam range");
        break;
}
*/

// JaveScript Function

/*
helloWorld();
function helloWorld(){
    console.log("Hello World function declaration");
}
*/

/*
let age = 20;
let helloWorld = function (nama) {
    console.log(
        "Hello nama saya " + nama + ". umur saya adalah " + age + " tahun."
    );
};
console.log(age);
helloWorld("rizky ramadhana");
*/

let tinggi = prompt("Masukan Tinggi (Satuan Meter) : ");
let berat = prompt("Masukan Berat (Satuan Kilogram) : ");

function bmi(){
    let hasil = berat / (tinggi * tinggi);
    switch(true){
        case hasil < 18.5:
            console.log("BMI " + hasil + " = Underweight");
            break;
        case hasil >= 18.5 && hasil < 25.0:
            console.log("BMI " + hasil + " = Healthy Weight");
            break;
        case hasil >= 25.0 && hasil < 30:
            console.log("BMI " + hasil + " = Overweight");
            break;
        case hasil >= 30 && hasil < 35:
            console.log("BMI " + hasil + " = Obese");
            break;
        case hasil >= 35 && hasil < 40:
            console.log("BMI " + hasil + " = Severely Obese");
            break;
        case hasil >= 40:
            console.log("BMI " + hasil + " = Morbidly Obese");
            break;
        default:
            console.log("Tidak ada Range");
            break;
    }
}

bmi();