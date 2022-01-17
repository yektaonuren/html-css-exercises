/*
Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.

Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.

Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.

Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.

Yazdığınız js dosyasını projenize eklemeyi unutmayın.*/ 

//listeye boş karakter eklenemesin,hiçbir şey yazılmadığında hata versin.

if (inputDOM.value.length < 5) {  // 5 karakter altında, "boş bıraktınız" hatasını verecek
    alertDOM.innerHTML = alertFunction("Listeyi boş veya eksik birakmazsin :)", "(Başarisiz İşlem!)")
    submitOK = "false";
}


if (submitOK == "false") { // işlem false ise buradan ilerlemeyecek!
    return false; 
 }
 
 if (inputDOM.value){ 
    addItem(inputDOM.value) // boş şekilde gönder tuşuna bastığımda boş kutular olmayacak 
    inputDOM.value = "" // bilgileri girip gönder dediğim anda input kutusu sıfırlanacak
    alertDOM.innerHTML = alertFunction2("Listeye eklendi!", "(Başarili işlem!)")
} 


//eleman ekle
//elemansil
//yapıldı
//toast neidir

let inputDOM = document.querySelector('#task');// id'si task olan input

let ullistDOM = document.getElementsByTagName("li"); // li elementlerini ullistDOM altında topladım
let ulDOM = document.querySelector('#list'); // id'si list olan ul



