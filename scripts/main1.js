//schimba fundalul paginii
function changeBackground() {
    var color1 = "#" + Math.random().toString(16).substr(2, 6);
    var color2= "#" + Math.random().toString(16).substr(2, 6); 
    console.log(color1);
    console.log(color2);
    $("body").css({
        background: "linear-gradient(45deg," + color1 + "," + color2 + ")"
    });
    
};

//genereaza citat nou

function randomQuote() {
    var citate = [
        "„Prefer să mor în mocirlă într-o Românie Mare decât să mor în paradisul unei Românii mici.” Ion Antonescu",
        "„Atunci când justiţia nu reuşeşte să fie o formă de memorie, memoria singură poate să fie o formă de justiţie.” Ana Blandiana",
        "„Noi suntem, sau am fost, unul din puţinele neamuri europene care am experimentat contemplaţia în suferinţă.” Mircea Eliade",
        "„O viață avem români… și-o cinste! Deșteptați-vă că am dormit destul!” Mihai Viteazul",
        "„Viaţa popoarelor este o veşnică şi încordată luptă; o luptă pentru drepturi şi pentru dreptate, o luptă pentru afirmare şi înălţare.” Ion Antonescu",
        "„Citește! Citind mereu, creierul tău va deveni un laborator de idei și imagini, din care vei întocmi înțelesul și filosofia vieții.” Mihai Eminescu",
        "„Mă mişc între Dumnezeu şi neamul din care fac parte. În afară de aceşti termeni, nu văd nimic semnificativ între cer şi pământ” Petre Ţuţea",
        "„Civilizaţia este fructul unei bătălii neîncetate şi în orice bătălie înfrangerea e posibilă, la fel ca şi victoria.” Spiru Haret",
        "„Soarta este scuza celor slabi şi opera celor tari.” Nicolae Titulescu",
        "„Ţara noastră nu are ce face cu tineri îmbătrâniţi; ei ii trebuiesc bătrâni, mulţi bătrâni, însă tineri.” Tudor Arghezi",
        "“Teoriile nu-s decât mostre fără de valoare. Numai fapta contează.” Constantin Brâncuși",
        "„Trăim cu frenezie o flecăreală continuă, mulţumiţi că avem ce bârfi, fără să ne pese că ţara în care locuim ar putea fi părăsită de Istorie.” Octavian Paler",
        "„Un popor care nu îşi cunoaşte istoria este ca un copil care nu îşi cunoaşte părinţii.” Nicolae Iorga",
        "„Egalitatea nu există decât în matematică.” Mihai Eminescu",
        "„Menirea vieţii tale e să te cauţi pe tine însuţi.” Mihai Eminescu",
        "„Munca unui om se poate plăti. Caracterul, cultura lui, nicicând.” Mihai Eminescu",
        "Dacă n-ar fi proştii, deştepţii ar muri de foame.” Camil Petrescu",
        "„Marea înţelepciune e să-ţi alegi prieteni care nu te vor sili la compromisuri.” Camil Petrescu",
        "„Inima omului e largă, de ce unii şi-o poartă strâmtă şi plină de ură?” Marin Preda",
        "„O furnică nu poate răsturna un munte, dar îl poate muta din loc încet, bucăţică cu bucăţică.” Marin Preda",
        "„A şti să râzi în clipele tragice înseamnă a stăpâni tragicul.” Marin Preda",
        "„Viaţa poate fi trăită oriunde. Decorul nu are nicio importanţă, esenţială este intensitatea.” Cezar Petrescu",
        "„A ierta e o manieră teribilă de a te răzbuna.” Cezar Petrescu",
        "„Dacă visul unora a fost să ajungă în Cosmos, eu viața întreagă am visat să trec Prutul. ” Grigore Vieru"
    ];
    var randomNumber = Math.floor(Math.random() * citate.length);
    return citate[randomNumber];
    
}

//slideshow pt text


//butoanele
$(document).ready(function() {
    var a = 0;
    $("#slideBtn").removeClass("active");
    changeBackground();
    $("#backgroundBtn").click(function(event) {
        changeBackground();
    });
    $("#quoteBtn").click(function(event) {
        $("#quote").fadeOut(600, function() {
            $("#quote").text(randomQuote()).fadeIn("fast");
        });
    });
    $("#slideBtn").click(function(event) {
        var jThis = $(this);
        jThis.addClass("active");
        $("#quote").text(randomQuote());
        a = setInterval(function() {
        $("#quote").fadeOut(600, function(){
        $("#quote").text(randomQuote()).fadeIn("fast")})},6000);
    
    });
    
    function stopIt() {
        $("#slideBtn").removeClass("active");
        clearInterval(a);
    };
    
    $("#stop").click(function(event){
        stopIt();
    })
});
