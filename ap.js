var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
const btn = document.getElementById("btn");

const livepriceUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd";
const inrurl = "https://api.exchangerate-api.com/v4/latest/USD";
async function inrx() {
    let response = await fetch(inrurl);
    let data = await response.json();
    return data.rates.INR;
}
async function btx() {
    let response = await fetch(livepriceUrl);
    let data = await response.json();
    let INDinr = await inrx();
    console.log(INDinr);
    /* console.log(data); */
    btc.innerHTML = (data.bitcoin.usd * INDinr).toFixed(2);
    ltc.innerHTML = (data.litecoin.usd * INDinr).toFixed(2);
    eth.innerHTML = (data.ethereum.usd * INDinr).toFixed(2);
    doge.innerHTML = (data.dogecoin.usd * INDinr).toFixed(2);
}
btx();
btn.addEventListener("click", btx);
