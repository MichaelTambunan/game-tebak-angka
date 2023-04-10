// Mendefinisikan variabel global
var secretNumber;
var guessCount;
var guessLimit = 3;

// Fungsi untuk memulai game baru
function newGame() {
	secretNumber = Math.floor(Math.random() * 10) + 1;
	guessCount = 0;
	document.getElementById("guesses").innerHTML = "";
	document.getElementById("result").innerHTML = "";
	document.getElementById("guess-btn").disabled = false;
	document.getElementById("guess-input").value = "";
	document.getElementById("guess-input").focus();
}

// Fungsi untuk menebak angka
function guessNumber() {
	var guess = parseInt(document.getElementById("guess-input").value);
	if (isNaN(guess) || guess < 1 || guess > 10) {
		alert("Masukkan angka antara 1 dan 10.");
		document.getElementById("guess-input").value = "";
		document.getElementById("guess-input").focus();
		return;
	}
	guessCount++;
	document.getElementById("guesses").innerHTML += guess + " ";
	if (guess === secretNumber) {
		document.getElementById("result").innerHTML = "Selamat, tebakanmu benar!";
		document.getElementById("guess-btn").disabled = true;
	} else if (guessCount === guessLimit) {
		document.getElementById("result").innerHTML = "Maaf, kamu sudah gagal menebak sebanyak 3 kali. Jawabannya adalah " + secretNumber + ".";
		document.getElementById("guess-btn").disabled = true;
	} else {
		var remaining = guessLimit - guessCount;
		var hint = guess < secretNumber ? "terlalu rendah" : "terlalu tinggi";
		document.getElementById("result").innerHTML = "Tebakanmu " + hint + ". Kamu memiliki " + remaining + " kesempatan lagi.";
		document.getElementById("guess-input").value = "";
		document.getElementById("guess-input").focus();
	}
}

// Memulai game baru saat halaman dimuat
window.onload = function () {
	newGame();
};
