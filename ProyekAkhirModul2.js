const cafe = {
  name : "Mikopi",

  jamKerja: {
    opening : "20.00",
    closing : "05:00"
  },

  menuMakan : ["Steak", "Nasi Goreng", "Lalapan"],
  menuMinuman : ["Jus Alpukat", "Teh Es", "Es Jeruk"]

}

console.log(`Nama Kafe ini Adalah ${cafe.name}`);
console.log("----------------------------");
console.log(`Menu Makanan Di Cafe ${cafe.name} Adalah : `);

//.....Membuat cetakan menu makanan
for(let i = 0; i < cafe.menuMakan.length; i++){
  console.log((i+1)+  `   ${cafe.menuMakan[i]}`);
}

console.log();

console.log(`Menu Makanan Di Cafe ${cafe.name} Adalah : `)
//.....Membuat cetakan menu minuman
for(let i = 0; i < cafe.menuMinuman.length; i++){
    console.log((i+1)+  `   ${cafe.menuMinuman[i]}`);
   
}

