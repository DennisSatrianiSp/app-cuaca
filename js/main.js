let keyword = document.getElementById('inputKeyword');
let tombol = document.getElementById('searchButton');

tombol.addEventListener("click", function(){
let isi = keyword.value
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + isi + "&APPID=80c6a7494cd5abb1d4ca35bd1f468b3a&units=metric").then((response) => response.json()).then((response) => {
let hasil = document.querySelector(".result");
hasil.innerHTML = `<div class="row"><div class="col-md-12 hasil"><h3 class="judul"> ${response.name}, ${response.sys.country}</h3><button class="tombol">${response.main.temp}</button><button class="tombol1">${response.weather[0].description}</button><p class="pesan">Temperatur minimum adalah <b>${response.main.temp_min} C</b>  dan maksimum adalah <b>${response.main.temp_max} C</b> </p><p class="keterangan">Kecepatan angin : ${response.wind.speed} m/s</p><p class="keterangan">Intensitas Awan : ${response.clouds.all}%</p><h4>Lokasi (Bisa di cek di google maps): [${response.coord.lat},${response.coord.lon}]</h4></div></div>`

keyword.value=null;

});
});