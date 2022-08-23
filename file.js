



const namePass = prompt("Come ti chiami? (inserisci il tuo Nome e Cognome)");
const priceKm = 0.21
let distance = prompt("Segna in KM quanta distanza devi percorrere")
let agePasseger = prompt("Quanti anni hai?")
let priceTiket = 0.21 * (Number(distance))






if ((agePasseger < 18)) {
    let discount = (priceTiket / 100) * 20;
    let priceTiketDiscount = priceTiket - discount
    priceTiket = priceTiketDiscount.toFixed(2)
}
if ((agePasseger > 65)) {
    let OverDiscount = (priceTiket / 100) * 40;
    let priceTiketDiscountOv = priceTiket - OverDiscount
    priceTiket = priceTiketDiscountOv.toFixed(2)
}
console.log(priceTiket)

function myFunction() {
    document.write(namePass + distance + " = " + priceTiket);
}
