

const $h1 = $("h1");
const $button = $("#btn-show");
const $select = $("#select-base");
const $btnShow = document.querySelector("#btn-show");
const $btnShowCoins = document.querySelector("#btn-show-coins");
const $inputDate = $("#date");
const URL = 'https://api.frankfurter.app'
const $CURRENCIES = ["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","GBP","HKD","HUF","IDR","ILS","INR","ISK","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","SEK","SGD","THB","TRY","USD","ZAR"];



$CURRENCIES.forEach(i=> {
    $select.append(new Option(i,i));
})



$btnShow.onclick = function(e){

    bringData($select.val(), $inputDate.val());

    return false;
}

$btnShowCoins.onclick = function(e){
    $("ul").html('');

        $CURRENCIES.forEach(currency => {
        $("ul").append($(`<li>${currency}</li>`));
        });
}


function bringData(base, date){
    
    fetch(`${URL}/${date}?from=${base}`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        

        $("ul").html('');

        Object.keys(respuestaJSON.rates).forEach(currency => {
        $("ul").append($(`<li>${currency}: ${respuestaJSON.rates[currency]}</li>`));
        });
    })
    .catch(error => console.error("FALLÓ", error));
    
};

