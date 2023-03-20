/*
/alert("Merhaba Kelimoş");
console.log("Merhaba Kelimoşumm");
console.log(123456);
console.log(true);
console.log([1,2,3]);
console.error("hata oluştu");
console.warn("bu bir uyarı");

//tek satırlık yorum

/*

çoklu yorum satırları

*/

//console burdan temizlemek için 

//console.clear();   

//**************************************************************************


//Değişkenler ders 2


/*var age ;
 console.log(age); // tanımlamadan bastırdın undefined

age=20;
console.log(age); 
var fulname="Kelim ALMUSA";
console.log(fulname);

fulname="Nas ALMUSA";
console.log(fulname);


//Case senstive vardır tanımlama yaparken
var caseesens="NasKelimoş"; 
var Caseesens=" Almusa";
console.log(caseesens);
console.log(Caseesens);

//var , let ,  const 

let city="Kocaeli";
console.log(city); 

const tcNo=15245632145;
console.log(tcNo);

// const ile tanımlarsan eğer o değişkene bir daha asla farklı bir değer ataması yapmazsın
//Sabit değeerli değişknler için kullanmalısın

//yeniden değer atamaya çalıştığın için hata alacaksın

//tcNo=78965412325; // hata aldın

*/

//******************************* ***************************

//Ders 3 : DEğişken tipleri 

//Primitive Tipler

//Strings
//number
//boolean
//null
//undefined
//
///**********************************
//Reference tİpler --- Objects

//array
//object
//****************************

//Fonksiyonlar

/*var calculateAge= function(number ){
    return 8*number;
};

console.log(calculateAge);
console.log(calculateAge(7));
console.log(typeof calculateAge);
*/

//**************************************** */

//Ders 4 Tür Dönüşümü

/*let val;

//num to string

val=String(10);
console.log(val);
console.log(typeof val);
console.log(val.length);

//bool to string

let val2;
val2=String(true);
console.log(val2);
console.log(typeof val2);
console.log(val2.length);

//Date objesi

let val3= new Date();
console.log(val3);
console.log(typeof val3);
console.log(val3.length);

//date (object ) to String

val3=String(val3);      // let val4 = String(new Date());
console.log(val3);
console.log(typeof val3);
console.log(val3.length);

let val5=new Date();
console.log(val5.getSeconds());
console.log(val5.getMinutes());
console.log(new Date().getMinutes());
console.log(val5.getSeconds());
console.log(new Date().getSeconds());
console.log(val5);
console.log(new Date());

let val8= Number(undefined);
console.log(val8);
console.log(typeof val8);

let val9= parseInt("10.8");
console.log(val9);
*/

//*********************************************************************

//Ders 5 - 8. Uygulama  : Değişkenler


/*
let customerName="Kelim";
let customerSurname="ALMUSA";
let fullname= "Kelim ALMUSA";
let customerId="1236547889";
let total=205.6;
let gender=false; // erkek true , kadın false
//object
let adress={
    city: "Ankara",
    district: "Altındağ",
    body:"Alibey mah "
}

//Arrays
let hobbies=["Nasoş","Nasoş ile Sex","Nasoşu sevmek","Nasoşu sinir etmek","yemek","uyku"];

let order1=Number("100.2");
let order2=Number("150.2");

let totalOrder=order1+order2;
console.log(totalOrder);
console.log(parseInt(totalOrder)); // el alışkanlığıiçin let order1=parseInt("100.2"); ///Tam sayıya çevirdik 


const yearOfBirth=1986;
console.log(new Date().getUTCFullYear()-yearOfBirth);/// bu yolu daha çok seviyorum
let years= new Date().getUTCFullYear();
console.log(years);
console.log(typeof years);
years= years-yearOfBirth;
console.log(years);

var ozluSoz= "barabarabara bereberebere bara bara bere bere be ";
console.log(ozluSoz.length);


*/

/********************************************************/
//* 9.Video -Operatörler

//Artimetik Operatörelr

/* let val , dal ;
 const a=10;
 const b =5;
 let c= 3;
 let d=4;


val =a+b; 
val=a-b;
val=a*b;
val=a/b;
val = c++; // hala bu satrıda c=3 ++ operaörü bir sonraki satırda değeri artar Dolayısıyla val değişkenin değeri 3 olarak atanmış oldu 
dal=++d;// dal direk 5 dğerini alır bu şekilde arttırma hemen  bu satırda gerçkeleşir
// c--;
//c++ ; bu da çıkarna versiyonudur mantık aynı


  console.log(c); // yukarıda arrtırıldı ya c bir sonraki satıtda artar
 console.log(val); // val in niçin 3 olarak kaldığığ  2 yukarıda yazıyor
 console.log(typeof val);
 console.log(d);
 console.log(dal);


 //Atama Operatörleri

 let fal;
 let e=10;
 let f=5;

 fal=e;
 console.log(fal);
 fal+=e;  // fal =fal + e; 
 fal-=e;  //f fal =fal-a;
 fal*=e;  // fal=fal*e;
 fal/=e;  // fal=fal/e;
 console.log(fal);

 //Krşılatırma Operatörleri

let g=5 ;
let h=10;
let i=5;
let sal;
 
sal= g==h;// sadece değer kntrolü yapar
sal=g==i;
sal= g===h;// hem değer hem tip kontrolü yapar 
sal=5=="5"; // true çünkü tipe bakmaz değere bakar
sal=5==="5"; // false çümkü değer olarak aynı fakat tip farkı var
sal= "a"=="b"; // değere olarak eşit değil 
sal= 5=="k";
sal= g!=h;// g h ye eşit değil mi? evet değil
sal= g!==h;// g h ye eşit değil mi ? hem tip olarakta eşit değil mi ? tip kontrolü de yaptın burda
sal=h>g;
sal= h>=g; // hem büyüklüğü aynı zamanda eşitlik varsa da kontrol eder






//Mantıksal Operatörler

// && (and)
sal= (h>g) && (h>i);


//|| (or)

sal=(h<g) || (h>i);

//! (Not) kullanımı

sal=!(h>g);
sal=!(h<g);
console.log(sal);

*/


//******************************************************************** 

// 10. video  --operatörler Uygulama 

/*let indexCan, indexAda;

let canBoy = 1.70;
let canKg = 60;

let adaBoy = 1.50;
let adaKg = 40;

let hesaplaİndex = function (kg, boy) 
{

    let sonuc = kg / boy;

    if (sonuc >= 0 && sonuc <= 18.4)


        return "Zayıf";

    else ıf(sonuc >= 18.4 && sonuc <= 24.9)


    return "normal";

    else ıf(sonuc >= 25.0 && sonuc <= 29.9)


    return "ffazla kilolu";

    else (sonuc >= 30.0 && sonuc <= 34.9)

     return "Şİşman";

}
*/

// *********************************************************************
// 11.ders - Dates & Times

// Date Object

/*let d= new Date();

let birthday= new Date(1990,1,5);//yıl,ay ,gün

//set metotları
d.setFullYear(2016);
d.setMonth(8);
d.setDate(20);
d.setHours(21);
d.getMinutes(24);

// get metotlar
console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes());

console.log(d.getFullYear()-birthday.getFullYear());
console.log(d.getMonth()-birthday.getMonth());
*/

/////// *******************************************************

// 12.Ders---Dates Time UYgulama

/*let d= new Date();
console.log(d.getDay(),d.getMonth(),d.getFullYear());

 
var dtA= new Date("8/24/2010");// Nasoş bu şekilde string yazarak aslında tek seeferde tarihi belirtebilrisin
console.log(dtA);// dikkat saat bilgisi içermiyor saat bilgisi 00000
var dtA= new Date("8/24/2010 14:50:10");
console.log(dtA);
var dtB=new Date(2010,7,24,14,50,10);// bu şekilde de tek tek yazarsın // yıl,ay,gün,saat,dakika,saniye
console.log(dtB);


var dtC=new Date("1/1/1990"); // 1 gün öncesini yazdır
console.log(dtC);
dtC.setDate(dtC.getDay()-1); // nasos, mevcut  ayı bir gün öncesine setle sistem ayın kaçında olduğunu bilşnce ona göre otomatik o güne ait hangi gün olduğu bilinir
console.log(dtC); // yılıda bilmesinin sebebi zaten sen yukarıda atamanı yaptın yılda ona göre sistemden direk hesaplanır


// iki tarih arasında geçen zamanı bul

var start=new Date("1/1/1990");
var end= new Date("1/1/1992");// ay 1 iken cosnolda gun 730 ay 10 yap consolda gun 739 oluyor

console.log("geçen zaman :", end.getFullYear()-start.getFullYear(),"yıldır");//sen çözdün hoca farklı çözdü mal seni

var milsecond=end-start; // çıkan sınuç milisnaiye cinsindendir
var saniye= milsecond/1000;
var dakika=saniye/60;
var saat=dakika/60;
var gun=saat/24;
var yil=gun/365;

console.log("milisecond:"+milsecond);
console.log("saniye:",saniye);
console.log("dakiak:", dakika);
console.log("saat", saat);
console.log("gün:",gun);
console.log("yıl:",yil);
*/
/* *****************************Senin örneğin


var x;
var start1=new Date("9/5/1990");
var end1= new Date("1/1/1993");
console.log(start1.getDate());




console.log( start1.getMonth()-end1.getMonth());
console.log(start1.getUTCDate());


//end1.setDate(end1.getDate()-start1.getDate());// 5 gün geri gitmiş oldun sadece salak 





//console.log("Geçen zamannn:",end1.getFullYear()-start1.getFullYear(),"yıl",
          //  start1.getMonth()-end1.getMonth(),"ay",
           // start1.getDay()-end1.getDay());

*/





//**örneklere devam hoca ile

//var birthday=new Date("8/1/1985");




/********************************************************************** */

// 13. Video--- Numbers & Number metotları



/*let val,val1;

val=parseInt("10.5");
val=parseInt("10b");// çevirir 10 a kadar
val=parseInt("a10"); // nan 
val= isNaN("10");
console.log(val);
val=isNaN("a10");
console.log(val);
val=isNaN("10b");
console.log(val);


//var num=10.123456789;
//val=num.toPrecision(2); // baştan 2 rakamı alır // 10
//val1=num.toPrecision(6);// ilk 6 rakamı alır yani 6 basamaklı bir sayı alır dikkat aldığı son elamanı bir üst tabana yuvarlar çünkü hani daha geride kalan rakamlar varya onlar için yani
//6.basamak 4 rakamı onu beş yaptı
//val = num.toFixed(2)// precioustan farkı bu virgülden sonrakiler için iki basamak alıyor

val=Math.PI;
val=Math.round(2.3); // hep en yakın tabana yuvarlar  burda 2 ye
val=Math.round(2.7);// burda 3 e yuvarlar
val=Math.ceil(2.1);//dAima yukarı tabana yuvarlar 3
val=Math.floor(2.8);// daima alt tabana yuvarlar 2
val=Math.sqrt(64);// karekökünü alır 
val=Math.pow(2,3);// üssünü alır 2 üssü 3 tür
val=Math.abs(-100);//daima mutlak değerli verir pzitif yaoar
val=Math.min(1,2,3,4,5,2,6);//diikat içi için sayı dizisi ister ve en küçüğünü verir
val=Math.max(1,8,5,6,9,23);//aynı şey en büyüğünü verir girdiğin sayı dizisi içinden 

val=Math.random();// dikkat sadece 0-1 arasında rastgele sayı üretir
val=Math.random()*10; // 0-9 arasında rastgele sayılar üretir
val=Math.floor(Math.random()*10);// küsüratlı kısım gelmesin ve 0 -9 arası olmaya devam etsin için 
// floor ne olursa olsun alt tabana yuvarlanır
val=Math.random()*100;// 0-99 arsı random sayı üretir 
val=Math.random()*100+1;// sıfır dahil olmasın istersen +1 eklersin böylece 
// artık 1-100 iki sayıda dahil olmak üzere random sayılar üretilir

val=Math.floor(Math.random()*100+1);

console.log(val);

console.log(typeof val);

console.log(val1);

*/

//// ***********************************************************************************************************************

// NUmbers ---Uygulama -----14.ders



/*var num= 15.123456789;

//topta 3 basamaklı yazdır
console.log(num.toPrecision(3));
//onalık kısmı 3 basaamk olsun
console.log(num.toFixed(3));
//en yakın sayıya yuvalra
console.log(Math.round(num));
//aşağı yuvaral
console.log(Math.floor(num));
//yukarı yuvarla
console.log(Math.ceil(num));

console.log(Math.min(1,2,10,56,20));
console.log(Math.max(1,2,10,56,20));

// aralığını kullanıcının belirleyeceği random syaı
var ara=100;
var ekle=1;

console.log(Math.floor((Math.random()*ara)+ekle));


// 50-100 arası olsun istiyor
var araaa=51;
var ekleee=50;

console.log(Math.floor((Math.random()*araaa)+ekleee));
// hocanın çözümü
var min =50;
var max=100;
console.log(Math.floor(min+Math.random()*(max-min)));//Güzel mantık yani en üst için olanı eklediği kadar azaltıyor 

var brutMaas=3700;
var mesaiUcreti=10.3;
var mesaiSuresi=42;


console.log(brutMaas+(mesaiUcreti*mesaiSuresi));
console.log((brutMaas-((brutMaas*25)/100))+(mesaiSuresi*mesaiUcreti));
*/


//// ***********************************************************

// 15. DERS --- Strin Sting metotları

//Strings

/*const firstName = 'Sadık'; // ister tek tırnak
const lastName= "Turan"; // ister çift tırnak
const age=35;
let val ;

// String concatenation

val=firstName + ' '+ lastName ;// ister sen çift tırnak ile yap boşluk bırakma bu 

val ="sadık";
val+=" Turan";


val= "benim adım "+firstName+" "+lastName+ " ve yaşım "+ age + " izmit'te yaşıyorum.";

//String concat

val=firstName.concat(" ",lastName); 

//string length

//val=val.length;//Dikkat bu bir property bu nedenle yani özellik metot değil parentez açıp kapamana gerek yok

//UpperCASE-LOWERCASE
val=val.toUpperCase();
val=val.toLowerCase();

//val=val[0];//stringteki her harf indekslidir ve sıfırdan başlar

//val=val.indexOf("turan");// aradığın karekterin bulunduğu ilk indeksini verir
let s="ahgzg";
s=s.indexOf("x");// olmayan karekterde sonuç -1 dir
console.log(s);

// susbstring

//val=val.substring(3,8); // bu indeks ile başlayıp biten eleamnları ve arada kalanları getirir

//slice

//val=val.slice(5,8);// susbstring ile mantık
//val=val.slice(6);// 6 indeks ve sınun akadar getirir

//String search metotları

//string replace
val="  " + val.replace('sadık',"çınar")+ "  ";//var olanı başka bir stirng ile değiştirmek istediğinde mial sadık ile cınar I yer değiştirdin
 //
 val=val.trim();/// başında ve sonunda olan boşlujları kaldırır

 let hobbies="sinema,kitap,yazılım,resim";
 hobbies=hobbies.split(",");// split ile stringi bölmek istediğin yeri beirtirsin yani virgül olan yerden ayırsın 
 // sonuç olarak 4 elemanlı bir dizi verir
 //.split(" ") demiş olsaydın boşluk karekterlerinden ayırmış olurdun 
 console.log(hobbies);

console.log(val);
console.log(typeof val);

*/

//******************************************************* 

//16.Ders---- Template Literals

// ${} string birleştime işemlemerinde bir değişkebi yazarken + + ile uğraşmadan yazabilirsin o parentezeler arasında değişkenin yazılır 
// ayrıca içerisinde ternary işlme bile yapabilrsin


/*const fullName= "sena turan";
const city="Kocaeli";
const yearOfBirth=1999;

// amele işi string birleştirme işlemi
let val;

//val="my name is "+fullName +"ı am " +(2022-yearOfBirth) + 
  //  " years ol "+ "and I live in "+city;


  ///template kullanımı ile  dikkat tırnağı farklı
  //müthiş hiç tıtnağı kesmeden aynen devam 

  val= `my name is ${fullName} I am ${2022-yearOfBirth} years old and ı live 
  in ${city}`;

// içinde ternary işlem bile yaptın 
  val=`my name is ${fullName} I am ${2022-yearOfBirth>=18 ?"over the 18":"under the 18"}
  and ı live in ${city}`;

console.log(val);

*/

/////  *************************************************************

//17.Ders --- String Uygulama 

/*var sentence= " Template Lİtearals or template strings is the ability Have multi-line strings without any funny business.  ";

var url= "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";


// cümle kaç karakterlidir

console.log(sentence.length);// boşluklarda dahil bu sayıya

// cümle kaç kelimedir
// öncelikle baş ve sondaki boşlukları at daha sonra kelimelere erişmek için boşlujlardan böl


//sentence=sentence.trim();// baştaki ve sondaki boşuklar ataıldı
console.log(sentence.trim().split(" ").length);// dikkat split ile boluklardan böler ve her elamanı dizizye atar

//Tüm cümleyi küçük harfe çevirin
console.log(sentence.toLocaleLowerCase());

//Tüm cümleyi büyük harfe çevirin
console.log(sentence.toLocaleUpperCase());

//'-' karekterini silin.

console.log(sentence.replace('-',''));// slaş yerine kaldırdı eğere " "arasında boşluk bıraksaydın kaldırmak yerine boşluk koyardı

// url içindeki str kısımını çıkarınız

var str= 'http://';
console.log(url.substr(str.length));//str.lengt ile strnin son indekisne kadar ulaştın
// daha sonra substr ile sallayıyorum 7 indekslik 7 sayısı çıktı 
//url le substr ile ilk yedi elemandan sonra başlnır son vemedidğin için sonuna kadar gider url nin 
//substrşng ile substr arasında ki farkı öğrendin kağıdında yazıyor
console.log(url.slice(str.length));


// url hangi protocol u kullanmkatadır? (http ,https);

// starsWith() metodu ile kullanılır

console.log(url.startsWith("http"));
console.log(url.startsWith("https"));

//url ".com" ifadesini içeriyor mu ?
// indexof ile aradğın değerin başlngıç indeksini verir
console.log(url.indexOf(".com")); // 17 indeksini döndürdü com u buldu ve c nin indeksi 17
console.log(url.indexOf(".comm")); // -1 döndü çünkü öyle bir string yok 

// İncludes metodu aradğın değeri bulır varsa true yoksa false döner

console.log(url.includes(".com"));// bu 

// Url ifadesini geçerli bir url olarak düzenleyiniz

console.log(url.toLowerCase()
            .replace(/ /g,'-')
            .replace(/ı/g,"i")
            .replace(/ü/g,"u")
            .replace(/ö/g,"o")
);

// replace (" "."-") boşlukları tire ile değiştir deemek ama bulduğu ilk boşluğu yapar sadece sen tüm boşluklar arasına koysun istiyorsan 

// replace (/ /g,"-") slaşlar ve g harfi ile şunu dedin slaşlar arasına alınan her kareketeri tüm strinte tarar ve buluduğu her yerde tire ile değiştirir
// yani tüm metni aratır burda slaşlar arasına boşluk koydun bulduğun tüm boşluklarda tire ile yer değiştirir
// bulduğu her ı harfini i yapar 
// tip şu ki //g bu ifade tüm her yeri arat demek



console.log(sentence);

*/


/// ***************************************************************************************************

// 18. Dizi ve Dizi metotları 

/*let names= ["çınar","sena","ada","yiğit"]; // Diziler köşeli parentez içinde tanımlanır

let years=[1990,2010,2017,1998];

//diznin elamanları farklı tipler olabilir ve diznini elemanı başka bir dizi olabilir
let  mix=["sadık","turan",1983,null,undefined,["sinema","kitap"]];

/*
//elaman alma ---- get array item
console.log(names[0]);
console.log(names[3]);

// set array item

names[names.length]="emel"; // length son elamanı temsil eder dizilierde 0 indeksinden başladığı için hiç bir problem olmaz 
//names[5]="emel";
// burda sen son eleman olan 4. indekse değilde 5 e yüklediğin için 4. eleman boş atandı "empty "
//sen sürekli son elaman kaçıncı inekdste hesaplayamzsın amale gibi


// add item // array metodudur bu aynen eleman eklemedir yukarıda amale işi yine

years.push(1986);// push dizinin son eleamanı olarak atar
years.unshift(1986);//unshift ile eleamnı dizinin başına eklersin

// remove item --- array metodu ile diziden eleman silmedir

years.pop(); // dizinin son elemanı direk kaldırılır
years.shift();// dizinin ilk elamanı direk silinir

//indexof metodu 
let index=names.indexOf("ada");// adaaa desydin olmadığı için -1 dönerdi
//console.log("index: "+index);
console.log(`index : ${index} `);


// reverse metodu // dzizyi tersine çevirir sondakiler başa geçer sırayla
console.log(names);
// after reverse
names.reverse(); // metot uygulandı 


//sort metodu // elamanları sırayla düzenler sayısal ise küçükten büyüğe sözel ise alfabetik sıralar
console.log(years);
// after sort 
years.sort();


//concat metodu // dizi birleştşme metodudur

let val= years.concat(names); // years dizisinin sonuna names eklendi
console.log(val);
*/

// splice metodu // (başlangıç indeksi,kaç elaman silinsin, ne eklensin)
// başlangıç indeksinden sonra eklensin istersen başlangıç indeksinden sonra şu kadar elamanda silinsin 

/*console.log(names);

names.splice(2,0,"sedat");//2.elemandan sonra hiç eleman silinmesin ve sedat eklesnin o araya
//Nas dikkat 2 indeks değil elamanın direk olduğu sıradır 
//indeks olsaydı 2 nolu indeks ada olurdu 
console.log(names);
names.splice(2,2,"reşo huseyin");// sedat ev ada silindi 2 nolu eleman sena yani senadan sonra olsun ne olacaksa 
*/

// find metodu 


//filter metodu

/*function over18(year){
     
  let age=2022-year;
  return age>=18;

}

//console.log(over18(1998));
//find Metodu---- tek değer gelir
//let val= years.find(over18);// dikkat sadece fonksiyonun adı yazıldı parentezler açılmadı 
// find ile years dizisinin her bir elamınına over18 e gönderilir şartı ilk sağlayn değeri döner (find eder)yani bulur


// filter metodu --- find metodu ile aynı fakat her şartı sağlayan ilk buludğu elemanı değil
// tüm dizide sonuna kadar gider şartı sağlayan tüm buldudğu elemanları döner
// sonucu dizi olarak döner 
let val= years.filter(over18);
console.log(val);



console.log(names);
console.log(names.length)
console.log(typeof names);
//console.log(years);
//console.log(mix);
*/


//  *************************************************************************

// 19.video --- Diziler Uygulama 

/*let car=["Bmw","Mercedes","Opel","Mazda"];
//let carr2=new Array("Bmw","Mercedes","Opel","Mazda");
//console.log(carr2);

console.log(car.length);
console.log(car[0]);
console.log(car[car.length-1]);


//car[car.length]="Renault"; amaele işi

car.push("Renault");
console.log(car);

car.unshift("Toyata");
console.log(car)

car.pop();
console.log(car);

car.shift();
console.log(car);

car.reverse();
console.log(car);  

car.sort();
console.log(car); 


let num=new Array(1,2,5,80,15);
//let numm=[1,2,5,80];

num.sort();//dikkat alfabtik sıralar yine 
// sayısal sıralamak için

function compare(a,b){
  if(a>b) return 1;
  if(a==b) return 0;
  if (a<b) return -1;

}

console.log(num.sort(compare)); 

//**************** 

console.log(car.indexOf("Opel"));
console.log(car.includes("Opel"));




var str = "Chevrolet,Dacia";

str=str.trim().split(",");
console.log(str);
//console.log(str.trim().split(","));


let mixconcat=num.concat(str);
console.log(mixconcat);

// amaele işi son iki elemanı sildin
//mixconcat.pop();
//mixconcat.pop();
// slice metodu da kullanbilirisn
mixconcat.splice(5,2);

console.log(mixconcat);

let studentA=["yiğit","bilgi",2010];
let studentB=["sena","turan",1999];
let studentC=new Array("ahmet","turan",1998);

let students=[studentA,studentB,studentC];
console.log(students[0][1]);//0.satır 1. sütun // matris gibi gör 
// satır,sütun
console.log(students[2]);// direk 2. satır verilir 
console.log(students[0][0]);
console.log(mixconcat);

// yiğitin bilgileri gelir
console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students);
*/

// ***********************************************************

// 20.Video--- İf else 

/*const firstName="Sena";
const age=19;
const isStudent=true;
const school="universty"

if(firstName=="Sena"){ /// burda sadece değer kontrolü var 
  console.log("hello sena");
}

if(firstName==="Sena"){ // hem değer hemde tip kontrolü var DEğer sena mı sena, tip string mi string o zaman içi true olur

  console.log("hello sena");
}


if(age==19){
  console.log("yaşınız: "+age);
}

if(isStudent){
  console.log("hello öğrenci");

}

if(isStudent===true){ /// 
  console.log("hello öğrenci");
}

// her zaman === kontrolunu kullan daha sağlıklı 

if(isStudent){
  console.log("hello öğrenci");

}else{
  console.log("merhaba işler nasıl");
}


if(age>=18){

  if((school=="universty") || (school=="highschool")){
  console.log("ehliyet alabilirsiniz");
  }else{
    console.log("eğitim durumunuz yetersiz");
  }
}else{
  console.log("ehliyet alamazsınız")
}


if(age>0 && age<12){
  console.log(`${firstName} is a child`);
}else if(age>=13 && age<=19){
  console.log(`${firstName} is a teenager`);
}else{
  console.log(`${firstName} is an adult`);
}





let id="13"
if(typeof id !== "undefined"){
  console.log("id: "+id);
}else{
  console.log("no id");
}

*/


// **********************************************************************

// 21.videos---Switch case yapısı


/*let category = "telefon";

switch (category) {
  case "telefon":
    console.log("telefon kategorisi");
    break;

  case "bilgisayar":
    console.log("biligisyar kategorirsi");
    break;

  default:
    console.log("yanlış kategori")
}


let day;

switch (new Date().getDay()) { /// bu koşul ifadesi öok iyi

  case 0:
    day = "Pazar";
    break;

  case 1:
    day = "Pazartesi";
    break;

  case 2:
    day = "Salı";
    break;

  case 3:
    day = "Çarşamba";
    break;


  case 4:
    day = "Perşembe";
    break;

  case 5:
    day = "Cuma";
    break;

  case 6:
    day = "Cumartesi";
    break;

  default:
    console.log("seçenek no");

}


console.log(`bu gün günlerden ${day}`);


// koşullarını birleştirebilirsin

let hafta;

switch ( new Date().getDay() ){
  
  case 0:
  case 6:
    console.log("buldun")
    hafta = "hafta sonu";
    break;

  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("break kullnamaz isen boku yersin")
    hafta = "hafta içi"
    break;


  default:
    console.log("boş yapma");
}

console.log(`hafta durumu: ${hafta}`);

*/

// *****************************************************************

// 22. video --- Koşullu ifadeler uygulama


/*var trafigeCikis= new Date("04/20/2016");
trafigeCikis.setHours(0,0,0,0);
var trafikteMs= Date.now()-trafigeCikis.getTime();

var trafiktekiGun=Math.floor(trafikteMs/(1000*60*60*24));

if(trafiktekiGun<=365){
  console.log("1. servis bakım süreniz geldi");
}else if(trafiktekiGun>365 && trafiktekiGun<=365*2){
  console.log("2. servis bakım süreniz geldi");
}else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
  console.log("3. servis bakım süreniz geldi");
}else{
  console.log("bilinmeyen süre");
}


console.log(trafiktekiGun);


//*****************

var result= prompt("who's there?");

//console.log(result);

if(result=="cancel"){
  console.log("cancelled");
}else if(result=="Admin"){
  console.log("welcome admin");

  var password= prompt("enter your password");
  if(password=="cancel"){
    console.log("cancelled");
  }else if(password=="1234"){
    console.log("hoşgeldin admin");
  }else{
    console.log("hoşgeldin admin");
  }
}else{
  console.log("ı dont know");
}

*/



// ************************************************

// 23.video ----- Object Literal (nesne yapısı) 

/*

let val;

let person = {  // nesne oluşturdun

  firstName: "Çınar",
  lastNAme: "Turan",
  age: 7,
  hobbies: ["music", "game"], // nesne içinde dizi tanumladın
  adress: {  // nesne içinde nesne tanımladın
    city: "Kocaeli",
    country: "Türkiye"
  },
  getBirthYear: function () { // fonksiyon oluştruma bu şekilde
    return 2022 - this.age;// this içinde bulunduğu person nesnesini refere eder yani this .age person nesnesi içindeki age =7 yi kast etti oluyor
  }

}



val = person.firstName;
val = person.hobbies[0];
val = person.age;
val = person["firstName"];// objeye ulaşmnı  farklı bir yoludur 
val = person.hobbies.length;
val = person.adress;
val = person.adress.city;
val = person.adress["country"];
val = person.getBirthYear();
console.log(val);



// nas yukarıda ki gibi nesne tanımında tek bir eleman için değer tutabildin
// bu şekilde ise hoca elemanları nesen olana bir dizi oluşturdu 

let people = [


  { firstName: "cınar", lastNAme: "turan" },
  { firstName: "sena", lastNAme: "turan" },
  { firstName: "seda", lastNAme: "turan" }



];

let dal;
dal = people[2];// dizinin son elemanı olan nesne gelecek 
dal = people[2].firstName;
console.log(dal);
console.log(typeof dal);
console.log(typeof people);


// tüm dizi elemanları olan nesnlerinin isimlerini yazdırmak için 

for (let i = 0; i < people.length; i++) {
  console.log(people[i].firstName , people[i].lastNAme);
}


*/



// **********************************************

// 24. Video --- Object Literal UYgulamalar


/*
var aracBilgileri = {

  id: "bmw116d_1234",
  model: "116d",
  yil: 2015,
  renk: "white",
  servisKayitlari:[

    {
      id: "bmw116d", tarih: new Date("30/01/2016"), km: 13000, toplam_ucret: 900,

      servisdetayı:[

        { id: 1, islem: "yagdegismi", ucret: 300 },
        { id: 2, islem: "filtredegisimi", ucret: 300 },
        { id: 3, islem: "frenhidroligi", ucret: 300 }
      ]
    },
    {
      id: "bmw116d", tarih: new Date("10/01/2017"), km: 28000, toplam_ucret: 1800,

      servisdetayı:[

        { id: 1, islem: "yagdegismi", ucret: 350 },
        { id: 2, islem: "filtredegisimi", ucret: 350 },
        { id: 3, islem: "frenhidroligi", ucret: 350 },
        { id: 3, islem: "balata degisimi", ucret: 350 }
      ]
    }

  ]

}

console.log(aracBilgileri.id);

console.log(aracBilgileri.servisKayitlari[0].servisdetayı[2].islem);


*/


/// ********************************************************

// 25.video ----- Döngüler Looops




// for loop

/*for (let i = 0; i < 10; i++) {
  
if(i==3){
  console.log("en sevdiğim rakam :"+i);
}

if(i!=3){
console.log(i);
}

}*/

//yukarıdaki örneği continue ile kullanımı

/*for (let i = 0; i < 10; i++) {
  
  if(i==3){
    console.log("en sevdiğim rakam :"+i);
    continue; // 3 tekrar yazılmasın diye
  }

  if(i==6){
    console.log("en sevmediğim rakam :"+i);
    break;// içinde bulunduğu döngüyü sonlandırır
  }
  
  
  console.log(i);
  
}
*/


/* //deneme

for(let i=0; i<5; i++){

console.log(i);

for(let b=0; b<5; b++){

  console.log("***");
  if(b==2){
    console.log("iç döngüde sadece bir sonraki tura geçildi")
    continue; // sadece içinde bulunduğu döngüyü etkiler 
  } 
  
  if(b==3){
    console.log("iç döngü sonlanrıdırıldı")
    break; // sadece içinde bulunduğu döngüyü sonlandırır
  } 


}


}
*/

/// While loop

/*for(let i=0; i<10; i++){

  console.log(i);
}


console.log("************************");

let i=0;
while(i<10){
  console.log(i);
  i++;
}
console.log("döngü sonunda i= "+i);

console.log("************************");

let c=0;
while(c<10){
  c++;
  console.log(c);
  
}

console.log("döngü sonunda c= "+c);
*/

// do-while loop


/*let i=0;
do{
  console.log(i);
  i++;

}while(i<10)
*/


/*for(let i=10; i>0; i--){
  console.log(i);
}
*/

/*let toplam=0;
for(let i=10; i>0; i--){
  console.log("***");
  toplam+=1;
}

console.log(toplam);
*/

// en iç döngüde dahi olsa dışarıdaki değişkeni etkiler 
/*let val=0;
for(let i=0; i<10; i++){

for(let j=0; j<5; j++){

  let k="*";

  val+=j;
}

console.log(val);

}

console.log(val);



// fakat döngü içinde tnaımlanmış değişken dışarıda yani döngü dışında tanımlı olmaz 
// döngü dışında tanım olan değişken en iç döngüde bile tanınır ve en iç döngüde olan işele bile onu değiştirir

*/

/*// 10*10 luk bir yıldızlardan oluşan bir kare 
let val="\n";// en üstte bir boşluk oluşsun 
for(let i=0; i<10; i++){
   for(let j=0; j<10; j++){
     val+=" *"
   }
   
   val+="\n";//satır başı olsun diye her üst döngü tekrarladığında 

}

console.log(val);


// \n direk seni satır başına götürür

// nasoş val e string atandığı için toplama işleminde bir sonraki stringi hep ekler yanına yazar yani

*/

// **************************************************

// ***********************************************************************************************
// for each- map - for in ( hem diziler için hem objeler için)
// 26. ders video -----Loops in Array & Objects 

//let cars =["Bmw","Mercedes","Toyata"];

//let people=[// obeji dizi olarak tanımladın
//   {firstName:"Ada",lastName:"Bilgi"},
//  {firstName:"Yigit",lastName:"Bilgi"},
// {firstName:"Çınar",lastName:"Turan"}

//];

/*
Amele işi
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
*/

// for döngüsü ile
/*for(let i=0; i<cars.length;i++){

  console.log(cars[i]);
   
}
*/


/// diizlere ve objelere özel döngülerdir


// for-in 


//for(let i in cars){  
//  console.log(i); cars dizisinin index no ları gelir

/*if(i==1){
  console.log(cars[i]);
}*/
//    console.log(`index : ${i} value : ${cars[i]}`);
//}

//console.log(typeof cars);// obje tipidir //obje tipinde sahip olabileceğin metotlar vardır
//console.log(cars);// direk dizi iskeleti ile gelir ve açonca proto kısmında bu obje tipi dizi için neler kullanabilrisin var 


//foreach
//arrays
/*
cars.forEach(function(item){
  //console.log(cars[item]); // item direk değerdir salak
  console.log(item);
});

//obejects
for(let i=0; i<people.length; i++){
  console.log(people[i].firstName);
}



//for in-- object

for(let i in people){
  console.log(`index : ${i} value : ${people[i].firstName}`);
}


// forEach --- object

people.forEach(function(item){

console.log(item.firstName)

});


//map : returns an array // bu geriye dizi döndürür bu bir objedir

let val = people.map(function(item){
  return item.firstName + " " + item.lastName; // her elemının değeri olacak
});

console.log(val); // elinde bir dizi oluştu 

let numbers = [1,5,6,8,10];

let num= numbers.map(function(n){
  return n*n; // dizinin her elamın içeriği
});
console.log(num);// eline dizi geldi

console.log(num[1]);

*/


//* *****************************************************

// Döngüler uygulama ---- 27. video


/*
let sayi = Math.floor(Math.random() * 10 + 1);// 1-10 arası random sayi üretildi
//console.log(sayi);


let bilirim = prompt("Kaç kerede bileceksiniz ? ")
let tahmin = prompt("1-10 arası bir sayı giriniz");

let sayac = 2;
let scala=100;

while (sayac <= bilirim) {
  if (tahmin == sayi) {
    console.log(`bravo % ${scala} başarılısın`);
    break;
  } else if (tahmin > sayi) {
    tahmin = prompt("daha küçük gir");
    scala-=10;
    sayac++;
  } else if(tahmin<sayi){
    tahmin = prompt("daha büyük gir");
    scala-=10;
    sayac++;
  }

}

if(sayac>bilirim){
  window.alert("kaybbetin taahhüt etiiğin sürede bilemedin");
}



*/





















/*for(; i<=bilirim; i++){

 if(tahmin==sayi){
   console.log("bravo doğru tahmin");
     sayac++;;
     break;
 }
 else if(tahmin<sayi){
  // console.log("daha yüksek bir sayı giriniz ");
    sayac+=1;;
    tahmin=prompt("daha yüksek bir sayı giriniz ");
 }else if (tahmin>sayi){
   //console.log("daha küçük bir sayı giriniz");
   sayac+=1;;
   tahmin=prompt("daha küçük bir sayı giriniz");
 }

}

if(sayac>bilirim){
  console.log("ayıp git ");

}


/*if(sayac==bilirim){


}

console.log(sayac);
console.log(typeof sayac);
*/



//**************************************************

// 28. video ------ Fonksiyonlar

/*function yasHesapla(dogumYili){

  return 2022-dogumYili;

}

console.log(yasHesapla(1983));


let Kelim=yasHesapla(1996);

console.log(Kelim);


function EmekKac(dogumYili,isim){
  let yas=yasHesapla(dogumYili);
  let emeklilik=65-yas;

  if(emeklilik>0){
    console.log(`emekli olmana ${emeklilik} yıl kaldı ${isim}`);
  }else{
    console.log(`${yas-65} yıldır emeklisin ${isim}`);
  }

}


EmekKac(2012,"Sibel");
EmekKac(1952,"Müşerref")
console.log(yasHesapla(1952));

*/

// *****************************************************

// 29. Video --- Function DEclaration & Expressions

//Fonksiyon tanımlaması ---- declaration yani

/*function sum (a,b){
  var c = a+b;
  return c;
}
console.log(sum(10,20));

*/



// Function ifadesi ---- expression yani

// farklı fonksion tanımıdır
// bu tanımlamada fonksiyonun ismi bir değişken içinde tanımlanır

/*const sum=function(a,b){
  var c=a+b;
  return c;
}

console.log(sum(10,30));
console.log(sum(10));// çıktı nan çünkü b değeri için undefined atar sistem 
// undefined +10 nan olur

console.log(sum(10,20,30,40));
// gönderilen fazla parametre göz ardı edilir 

// tek parametre gönderip nan olmasın dersen 

const sum=function(a,b){
  if(typeof a === "undefined"){a=0;};
  if(typeof b === "undefined"){b=0;}
  var c=a+b;
  return c;
}

console.log(sum(10)); // çıktı 10
*/


// ES6 ile gelen özellik 
// default parametre (varsayılan parametre özelliği)

/*const sum=function(a=0,b=0){
  var c=a+b;
  return c;
}

console.log(sum(10));
*/
// a için gnderilen 10 değeri 0 ı ezer yerini alır b için gnderilen yok deafult 0 değerini kullanır



/*const sum=function(a=0,b=0){
  var c=a+b;
  return c;
}


//Arguments --- fosnksiona gnderilen parametreleri sırayla tutat dizi içnde skalr

//function args(){
//  console.log(arguments);
//}

//args(10,80,40,75);


//**********  Arguments olayı çok güzel anladın basit********


function sumAll(){
  var total=0;
  //total+=arguments;// böyle olmaz çünkü argumnets dizidir dizi elemanları böyle toplanmaz 
  //console.log(total)

  for(let i=0; i<arguments.length; i++){

  total+=arguments[i];
  console.log(total);
  }
}

sumAll(1,2,3,4,5);

*/


/*var hesapA={
  ad:"Sena Turan",
  hesapNo: "12345678",
  bakiye:2000,
  ekHesap:1000
}

var hesapB={
  ad:"Emel Turan",
  hesapNo: "123456789",
  bakiye:3000,
  ekHesap:2000
}


function paraCek(hesap,miktar){

  console.log(`Merhaba ${hesap.ad}`);
  if(hesap.bakiye>=miktar){
    hesap.bakiye=hesap.bakiye-miktar;
    console.log("paranızı alabilirisniz");
  }else{
    var toplam = hesap.bakiye+hesap.ekHesap;
    if(toplam>=miktar){
      if(confirm("ek hesabınızı kullanmak ister misiniz")){
        console.log("paranızı alabilirsiniz");
        var bakiye=hesap.bakiye;
        var ekHesap=miktar-bakiye;
        hesap.bakiye=0;
        hesap.ekHesap=hesap.ekHesap-ekHesap;
      }else{
        console.log(`${hesap.hesapNo}' lu hesabınızda ${miktar} bulunmamaktadır`)
      }

      }else{
        console.log("bakiye yetersiz");
      }
    }

  }


paraCek(hesapA,2000);
paraCek(hesapA,1000);

*/


/****************Çoook önemli  ********************/
/*var para=2000;


function deneme(miktar){
  para=para-miktar;

  console.log(para);
}

console.log(para);
// dışaırda tanımlanan değişken fonk içinde direk kullnılırsa içerik değişir

deneme(250);
console.log(para);

/*********************** */
/*var para=2000;

function denemeee(miktar,x){
  x=x-miktar;

  console.log(x);
}

console.log(para);
// dışaırda tanımlanan değişken fonknun direk parametresi olarak kullanılırsa 
// sadece o değişkenin kopyası kullanılır dolayısıyla asıl değşken değişmez

denemeee(250,para);
console.log(para);

/***********************//////

/*var a = {para:2000};


function denemee(miktar,b){
  b.para=b.para-miktar;

  console.log(b.para);
}

console.log(a.para);
// dışaırda tanımlanan obje fonkun direk parametresi olarak kullanılrsa içeriği değişir
// çünkü her halükarda objenin adresi alınır
denemee(250,a);
console.log(a.para);

 */


//////////////////////////////////////////////////////////////////

// 31.Video------ Window nesnesi



// 32.  Vİdeo -- Let   ve Const scopes





/// quiz sorusu

/*var start=new Date("10/10/2016");
var end=new Date("10/11/2018");
let fark=((((end-start)/1000)/60))/60;
console.log(fark);
*/



// ****************************************************
// 33. Video -- Dom nedir ?


/*let val ;
val=window.document;// windows nesnesi altındaki document nesnesine ulaştın 
// tüm hmtl sayafsı olduğu gibi val e atadın


// document ile html de ki her şeyi çağırabilrisn tüm etiketlere yani tüm 
//tüm elemanları getiri ulaşabilrisin 


val=document.all;
val=document.all.length; // html sayfanad ki tüm elemanların sayısına ulaşırısn
val=document.all[10];
val=document.body;
val=document.anchors;
val=document.URL;
val=document.domain;
val=document.images;
val=document.scripts;// tüm scriptler gelir // dizi içndeler her elamnı script
val=document.scripts[0];
val=document.scripts[0].getAttribute("src");
val=document.scripts[0].getAttribute("id");
console.log(val);
*/


// ********************************************************

// 35. Video Tekil eleman seçimi 


// Single elements
// document.getelemanbyıd(); kullanımı 
/*let val ;

val=document.getElementById("header");// header id li html elemanını getiridn
val=document.getElementById("header").id;
val=document.getElementById("header").className;

val=document.getElementById("header");
//val=val.id;
//val=val.className;

val.style.fontSize="50px";
val.style.color="green";
val.style.fontWeight="bold";
//val.style.display="none";
// içerinde ki text i değiştermek için innerText kullanırsın
//<b></b> etiketi kalın yapma etiketidir

val.innerText="My To Do List Nasoş"
val.innerText="<b>My To Do List Nasoş</b>"// NASOS SEN başlığı kalın yapmak istedin aynı zamanda 
// ama inner text ile bunu bunu yapamazsın yani tırnak içinde yazılanları direk string olarak algılar
// b etiketini ayırt edemiyor
val.innerHTML="<b>My To Do List Nasoş</b>";
// innerHTML ise etiketleri ayırt edebiliyor 
// html etikeletirini algılıyor ve ayırt edip uyguluyor yani 
// innerHTML İle innerText arasında ki fark budur.
console.log(val);
*/


//  **************

//document.querySelector();

/*console.log(document.querySelector("#header"));// querselector ile id den çağıracaksan öncesinden # işareti kullanırsın
console.log(document.querySelector(".checked")); // nokta ile class ismi girersin
// bulduğu ilk checked class isimli elemanı getirir
// Dikkat query selector ile buludğu ilk elemanı getirir sadece
// id ve ya class ismi ile değilde direk etiket yani elemanı direk çağırmak istersen 
// direk elemanın adını girmen yeterli
console.log(document.querySelector("h2")); 
console.log(document.querySelector('li'));//
// birden fazla etiket varsa bulduğu ilk elemanı getirir
// li yi çağrınca "" çift tırnak ile görmedi tek '' tırnak ile gördü
document.querySelector('li').style.color='purple';
// son elemanı çağırnak için 
document.querySelector('li:last-child').style.color='yellow';
//son değilde  nth -child ile index numarası ile ulaşabilirsin
document.querySelector('li:nth-child(2)').style.color='blue';

// query selector ile gördüğün gibi css işlemleri de yapabiliyorsun
// geteleman by ıd den daha esnek bir yapı bu yüzden

document.querySelector('li:nth-child(3)').textContent='Meet George and James';
document.querySelector('li:nth-child(4)').innerText='buy egg and read novel';

// textcontent ile innerText aynı amaçla kullanılır içerisine text yazamak için
 
 
// className ile var olan class adını değiştirir yenisini yazar
document.querySelector('li').className='che-cahanged'
//classlİST.add ile varv olan classlara yenisini ekler 
document.querySelector('li').classList.add('extra');

*/

//  Seelecting Elements

// ***** Single Elements--- yapıldı


// Multiple Elements 

// class name
// document.getElementsByClassName();

//let val;
//checked claslı elemanlar geldi
//val=document.getElementsByClassName('checked');
// çoklu getirin içnden tekli getiri yapmak istersen

//val=document.getElementsByClassName('checked')[0];
///val=document.getElementsByClassName('checked');
//val=val[1];

/*val[1].style.color='orange';
val[1].style.fontSize='20px';
val[0].textContent='new İtem';

// diiikat bu şekilde yani classNAme 
//le gelen toplu elemanlarda proto kısmına git foreach yok 
for(let i=0; i<val.length; i++){
  console.log(val[i].style.color='green');
  console.log(val[i].style.fontSize='25px');

}

*/
// etiket isimleri ile ulaşabiliriz 
/// document.getElementByTagName()
// sayfada ki tüm li etiketlerini getirir
//val=document.getElementsByTagName('li');
// sayfadaki h1 etiketli tüm elemanları getirir
//val=document.getElementsByTagName('h1');
// ul etiketi altındaki li etiketleri istiyroum diyelim diğer li leri deği
// önce ul yi getiridm
//val=document.getElementById("myUL");
//val=val.getElementsByTagName('li');


//console.log(val);

// çoklu eleman seçmenin diğer yolu
// *********** document.querySElevtorAll()
// bu şekilde gelen elemanlar bir NodeList şeklinde gelir (yine bir dizidir tabi)
// yani proto kısmına bak fOREACH kullanabilirsin

/*let vall;
vall=document.querySelectorAll('li');
/*vall.forEach(function(item){// bu şeklilde teker teker yazdırdın
  console.log(item);
});
*/

/*vall.forEach(function(item,index){
  item.textContent=`${index} - hello`;
});
*/
// sadece tekil indexli olan li etiketleini istiyorsa böyle 
// ama sende çalışmadı 
//val=document.querySelectorAll('li:nth-child(odd)');
//console.log(vall);

// ********************************************************

// 37. video --------------------------------

/*
let val ;
let list=document.querySelector('.list-group');

val=list;// ul nesnesini val e atadın

// ul nesnesinin alt elemanlarına ulaşabilirsin
// tüm her şeye text nodea bile
val=list.childNodes;

// seçtiğin düğümüm altındaki sadece etiket olan elamanalrına ulaşırısın
// yani text node gibi şeyelere değil

//val=list.children;



val=list.childNodes[0];
val=list.childNodes[0].nodeName;
val=list.childNodes[0].nodeType;

// childrenlara direk etiketler olsun diğlerler olmasıni

val=list.children;
val=list.children[0];
val=list.children[0].textContent;
val=list.children[2].textContent='new iTEM';

val=list.firstChild;// seçtiğin elemanın altında ki ilk node larşına gelir
val=list.firstElementChild;// seçtiğin elemanın altında ki ilk etiket yani element gelir

val=list.lastChild; // son  için node için 
val=list.lastElementChild;


//seçtiğin elemanın ya da nodeun altında kaç tane eleman sayılarını bulmak için
// çıktı 6 hakıkatende 6 adet li etiketi elemanı var 
val=list.childElementCount;


// parent node seçtiğin elemanı içinde barındıran onu kapsayan hemen onun üstündeki ilk eleman ya da nodeddir

// aynı kapsayıcı içinde farklı ayrı ayır tanımlanan elemaN YA DA Node ler de kardeş nodeelrdir

val=list.parentNode;

// parentı ama etiket olsun sadece 
val=list.parentElement;

// parentın da parentınını alabilirsin
val=list.parentNode.parentNode;

val=list.children[0].nextSibling;//seçtiğin elemanın altındaki ilk elamanı ile aynı seviyede olan her agni bir nodeu yani kardeşi bir sonraki olan ama 
val=list.children[0].nextElementSibling//yukarıdaki ile aynı şey ama 
// sadece bir sonraki etiket yani eleman olsun 

// yukarıdaki ile aynı meslee sadece bir önceki için geçerlidir
val=list.children[0].previousSibling;
//val=list.cildren[0].previousElementSibling;// bir önceki kardeşi yok ki hata  verir o yüzden 

// dikkat kardeşler aynı seviyede olmamlı yoksas kardeş olmazlar 
// kapsayıcıları parentları oluyor

// element diye belirtmezsen onunnla aynı seiyede olan her node  için geçerli olur
// element ile belirtirsen onunnla aynı seiyede olan her element için geçerli olur sadece


for(let i=0; i<list.children.length; i++){

    console.log(list.children[i]);

}






for(let i=0; i<list.childNodes.length; i++){

  console.log(list.childNodes[i]);

}

console.log("************************************")

// manuel sadecee elementleri istiyorsan // en baştaki forun aynısı 
for(let i=0; i<list.childNodes.length; i++){

  if(list.childNodes[i].nodeType===1){
         console.log(list.childNodes[i]);
  }

};


//nodetype 1 ise element demekti o eleman

//console.log(val);

*/



//// ***********************************************

// 38. video 


// Creating Elements (etiket) // yani bir etiket oluşturma

// create element // create element ile oluşturulur
/*co.video nst li= document.createElement('li');

// add class
li.className='checked';

//add id
//li.id='2';


// tittle değeri ekle
li.setAttribute('title','new İtem');//('attributtipi','atanacak değer');
li.setAttribute('data-id','5');

// li etiketi içerisnde 'text node ' oluşturma

// text node 

const cat= document.createTextNode('new item');

//oluşturulan text node i li etiketi ile ilişkilendirelim
// appendchild kullanırsın // li etiketinin bir alt elemanı childı olaraka eklemeye yardımcı olır


//append to cat to li
li.appendChild(cat);
// sona ekler 

//append li to ul

document.querySelector('#myUL').appendChild(li);


var val=document.getElementById('myUL');

for(let i=0; i<val.children.length; i++){
  console.log(val.children[i]);

}

//console.log(li);

*/

// **************************************************

// 39. video -------- Elemet silme ve güncelleme ve node için yani


/*const tasklist=document.querySelector('#myUL');// ul nesnesini getiridn

// remove elementmnj 
//tasklist.remove(); // listenin kednisini siler


// 1 indeklsi nodu siler siler 
// ilk yani 0 inkedlsi olan textnode idi

//tasklist.childNodes[1].remove();

// direk elemana ulaş ordan node larrı ile uğraşmak istemiyorsan
//tasklist.children[5].remove();


// removevchild adlı metott  var --- seçtiğin nodeun altında bukanınan 

// childlerdan birini siler hangisimi sşldermek istersen ona belirititrin

//tasklist.removeChild(tasklist.children[0]);

// ******* attribute silme
// removeAttribute() metodu ile
// 1. li etiketinin class attributı silindi
//tasklist.children[0].removeAttribute('class');
//console.log(tasklist.children[0]);


// tüm li etiketlerini dolaşığ class attributlerını remove etsin
//for(let i=0; i<tasklist.children.length; i++){
//          tasklist.children[i].removeAttribute('class');
 
//};


// *************************

// Replacing Elements--- herhangi bir elemanı değiştirme yapma


/*const cardHeader=document.querySelector('#header');

// create element
const h2= document.createElement('h2');
h2.setAttribute('class','card-header');
h2.appendChild(document.createTextNode('My To Do List New'));

// ************
//h2.appendChild(h2.innerHTML='My To Do List New And Moon'); hata alırısın 
// nas bir h2 oluşturup içine yazı koymak istiyorsun i
// adam yazıyı textnode olarak oluşturdu yani sonuç olarak bir node 
// daha sonra oluşturduğu textnodu append etti h2 ye
// appenchild metoto bu şekilde çalışıyor yani bir noda diğierni append edetek
// ama sen node olmayan düz bir yazıyı farklı bir node ya append etmeye çalışıyorsun olmaz 
// hata alrısın
// append child kullanmadan şöyle yapabilrisin yazıyı eklemek için
//h2.innerHTML='My To Do List New And Moon';
// artık istediğin h2 hazır aşağıda replacing yapıldı

//h2.appendChild(document.createTextNode('My To Do List New'));
// adam burda yazıyı daha profosyeonel şekilde bir textnıde adı altında bir node gibi yaptı




// değişim için replaceChild()
const parent=document.querySelector('.header');
parent.replaceChild(h2,cardHeader);

console.log(cardHeader);

*/

// class atribute değiştirme ekleme silme
/*let val;
// ul nesnesiiin ilk elemanın getirir
link=tasklist.children[0];
// tüm class isimleri tek stringte gelir
val=link.className;
// her bir class adı bir dizi elemanı olarak gelir böylece ayrı ayrı 
//müdahale edebilirsin
 val=link.classList;
 val=link.classList[1];
 // yeni class ekleme 
 
 link.classList.add('kelimclass');
val=link.classList;

// remove class
link.classList.remove('kelimclass');
val=link.classList;

//Attributes

// attributleri getirme-- getAtrıbute
//ilk li etiketinin attributelerini getirir
val=link.getAttribute('style');
val=link.getAttribute('class');
val=link.getAttribute('id');
 

// attribute ekleme --- set etme

val=link.setAttribute('href','http://sadikturan.com');
 


// attribute varlığını kontrol etme -- hasAtrtrıbute

val=link.hasAttribute('href');

console.log(val);
//console.log(tasklist);


*/

//* **********************************************************

// 40.Video


// Event Listeners  

// bir olay event oluşturmak için öncelikle bir nesneyi seçmemiz gerekir

/*const btn= document.querySelector('.addBtn');
const btn2=document.querySelector('.Buton');

//seçtiğin nesneye bir event ekle
//addEventListener ile yapılır 
// fonk içine eventin türü yazılır
//yani kullanıcı html elamanın üzerine gelince 
// yada tıklayınca mı event türü yazılır
// event türünden sonra ikinci parametre olarak 
// eventten sonra gerçekleşecek fonksiyon yazılır

btn.addEventListener('click',function(){
  console.log('btn clicked');
});

// dışarıdan oluşturduğumuz bir fonksiyonu 
// addEventLİstener 2 parmertersi olana functionın yerine nasıl yaparız

// bir fonk oluştur

/*function btnClick(){
  console.log('btn clickeddd');
};

btn.addEventListener('click',btnClick);
btn2.addEventListener('click',btnClick);


//  böyle daha iyi yani eventi gerçekleince olacak olan eylemi oluşturan 
// fonku başka yerde tanımlamak daha profesyonel
// aynı fonk u başka eventler için de kullanabiliriz
 
btn2.addEventListener('click',btnClick);

// ya da 2 ayrı fonksiyonun olsun bir click ile iki  ayrı fonksiyon açlışşsın



function btnClick2(){
  console.log('2. clkic olayı ');
};

btn2.addEventListener('click',btnClick2);

/*function newElement(){
     console.log('btn Clicked')
}
*/
/// Nasssssssssssssss çok önemli sen. video  - 40. video -- 6-7-8. dakikalrda
/// çok önmeli ollan preventDefault olayını ve target i not almamışsın
////// allllll çok önmeli

// *********************************************************************



// 41. Video ---- Mouse Events

//const btn = document.querySelector('#addBtn');
/*const ul= document.querySelector('#myUL');



/* click olayı 
//btn.addEventListener('click',eventHandler);// hatalı bunu 
ul.addEventListener('click',eventHandler);
*/


// double click olayı -- iki kere tıkleyınca olan event
//ul.addEventListener('dblclick',eventHandler);

// mouse down // mouse ile gidip tıkladığın an mousedown olur
// mouse ile üzerine tıkleuıp parmağını kaldırmadğıın sürece de mouse down devam eder
//ul.addEventListener('mousedown',eventHandler);


// mouse up olayı // mousedown olup sen tıklama için basıp parmağını çektiğin an mouse down olur
//ul.addEventListener('mouseup',eventHandler);


// mouse enter olayı --- beiirrtiğin herhangi bir bölge içine 
// o kordınasyon içine mouse ile girdiğin an mouse enter olayı olur
// misal bir ul nin çerçevesi içinde olduğun sürece mouse enter olur
// her belirttiğin bölgeden girip çokman bir kere sayılır tekrar girersen ikinciye sayılır
// ul çerçevesinin dışına çıktığın an mouse leave  olur
// burda ul yi belirrtiğimiz için ul dedim

//ul.addEventListener('mouseenter',eventHandler);


//mouse leave olauı -- ul çerçevesinin dışına çıktığın an mouse leave  olur
//ul.addEventListener('mouseleave',eventHandler);

// dikkat mouseenter ve mouse leave olayı belirrtiğin alanın
//sınırları içine girmen yeterli bir kere girdin mi bir kere sayılır 



// mouse enter ve leave den farkları
// enter ve leaveden belirttiğin sınırın içine giridn mi bir kere sayar
// mouse over ve out olayında ise 
// belirttiğin yerin sınırları içine girmen ve o sınırlar içinde gezdiğin her yeri sayar
// alan içine girdin bir  nokta kaydırsan mouse over olur aynı noktadan biraz kaysan bile mouse out olur
// diğer nokta için ise yeni mouseover olur
// mouse over  olayı
//ul.addEventListener('mouseover',eventHandler);
// mouse out olayı
//ul.addEventListener('mouseout',eventHandler);



// mouse move olayı
// belirttiğin yer de mouse ile gezdiğin her yeri sayar hareketeleri sayar yani
// mouse move ile bulunduğun yerin kordinatını da bulursun
// korinati event nesnesi üzerinden alırsın -- ul nesnesini eventHandler ile event te atayan ilşki var ordan anla
// x kordinatını  // event üzeründen offsetX ile
// y kordinatını   // event üzerinde offstY ile alabilirsin

/*ul.addEventListener('mousemove',eventHandler);
const h5=document.querySelector('h5'); // yeni başlık oluşturdun html de ve burda çağırdın
// ki ul içinde move ettiğin an x ve y kordinatları gözüksün
// nasıl alınır öğrendin
// event ile kimin üzerinden olay gerçkleşttiemk istiyorsan mutlaka 
//onları ilişkilendir
// misal ul ile event i fonkiyon ile ilşkişlendirdin 
// adı muhakkak event olmak zorunda değil istersen e de 
//nas ezberci olma her şeyin bir mantığı ve bağlantısı olmalı


function eventHandler(event){
  console.log(`event type : ${event.type}`);
  //console.log(event);// kordiant bilgisini alabilrisin bu şeklde her kaymada o yerşn kordinatını anlık veriyor

  h5.textContent=`Mouse X : ${event.offsetX}
  Mouse Y : ${[event.offsetY]}`;
   
}

*/



// **************************************************************



// 42. Keyboard Events ---- Klavye eventleri 

// kullanıcı herhangi bir klavye tuşuna bastığında olabilecek olaylar

//

// keydown -- klavyede basılan her tuş için keydown çalışır 
// klavyede herhnagi bit tuşa tuşa basma işidir 
//keyup -- bastığın tuştan elini çektiğin an çalışır
/*const input=document.querySelector('#myInput');
const form=document.querySelector('form');// select ve submit olayı için
const select =document.querySelector('#select');
//input.addEventListener('keydown',eventHandler);
///input.addEventListener('keyup',eventHandler);
//input.addEventListener('keyup',eventHandler);
//input.addEventListener('focus',eventHandler);
//input.addEventListener('blur',eventHandler);
 //input.addEventListener('cut',eventHandler);// input içinde kesme işlemi yaparsın ctrl x yaptığın an bu event çalışır
 
 // ******************
 //input.addEventListener('paste',eventHandler);// paste yapmanı sağlar
//*******************  Form Submit ve Selecet olayaı için yorum satırır yaptın
 // 

 //function eventHandler(e){
//console.log('event type :',e.type);


//console.log('key code: '+ e.keyCode);// keyCode ile bu event ile kullanıcı hangi tuşa basmış bilgiyi alabilrisin
//console.log('value: ', e.target.value);//
//e.target.style.backgrounColor='yellow';// çalışmadı niye sor Kelime


//}

//target olayı şöyle target ile e den gelen nesneye elemana ulşır ve onun içinde ki değeri alır
//yani target ile sen e myInput id li ınput elemenaını ulaştın
// input a atama yaptın sonra inputa eventhandlerı fonksiyonu ile ilşiki kurdun
//event handlerda o fonkta e diye bir parametre oluşturdun
// e ye inputu kopyalıyor gibi anla uff bilşiyorsun işte
//dolayısıyla keycode esnasında value bulamazsın çünkü 
//inputun içi hala tam dolmadı parmağını çekincve value yi alırsınü

//*****************

// focus eventi --- sen belirlediğin inputa mouse ile üzerine gittiğin an onu algılar
// misal ınputa gidince üzeri sarı olsun

// tam tersi ise blur eventi-----focus olup o ınputtan ayrıldığın gibi o eski haline döner


// Submit ve select , change olaylarını çalışmadın 8. dakikada 42. video

//input.addEventListener('select',eventHandler);
//form.addEventListener('submit',eventHandler);

select.addEventListener('change',eventHandler);

function eventHandler(e){
  console.log('event type :',e.type);
  console.log(`value : ${e.target.value}`);// seçim yaptığın kutucukta ki değer ne diye 

  e.preventDefault();
  
}
*/

// **********************************************************

// Event Bubling---Capturing OLayları--43.video

/*
const cardHeader = document.querySelector('.header');
const cardBodyNew = document.querySelector('.cardBody')
const cardForm = document.querySelector('.cardForm');
const cardSelect = document.querySelector('.cardSelect');



/*function eventHand(e){
  console.log(e);
}

cardHeader.addEventListener('click',eventHand('header'));
*/

//event bublng dursun diye
//stopProbagation() kullanılır

/*cardHeader.addEventListener('click',function(e){
console.log('header');
e.stopPropagation();
});

cardBodyNew.addEventListener('click',function(e){
  console.log('Body');
  e.stopPropagation();
  });

cardForm.addEventListener('click',function(e){
    console.log('Form');
    e.stopPropagation();
    });

cardSelect.addEventListener('click',function(e){
      console.log('Select');
      e.stopPropagation();
      });
      
    
*/



// event Capturing olayı

/*cardHeader.addEventListener('click', function (e) {
  console.log('header');
  e.stopPropagation();
}, true);

cardBodyNew.addEventListener('click', function (e) {
  console.log('Body');
  e.stopPropagation();
}, true);

cardForm.addEventListener('click', function (e) {
  console.log('Form');
  e.stopPropagation();
}, true);

cardSelect.addEventListener('click', function (e) {
  console.log('Select');
  e.stopPropagation();
}, true);
*/



// ***********************************************************

// 44.Video-----Tarayıcı Bilgi Saklama--LOcal&Session storage 

//

// bazeb yaprığın uygulmaların bilgilerini tarayıcı hafızasında saklamak istersin
// 2 yol var -- LOcal storage -- Session Storage


// lOcal Storage
// localStorage window nesnesinin bir elemanıdır
//localrStorage eleman böyle set edilri set İtem ile
// önce değişkeni tanımla sonra set item içine 2 parae-metre ilki 
// kaydetmek istediğin değişkenin adı 2. ise o değiişkene atayacağın value
/*let val;
const firstName=localStorage.setItem('firstName','Nas');
const lastName=localStorage.setItem('lastName','Şimşek');
let hobies=['sinema','araba','gezmek'];


// local in içine iki eleman kaydettin 

// get item
val=localStorage.getItem('firstName');
val=localStorage.getItem('lastName');

//remove item
//localStorage.removeItem('firstName');
//localStorage.removeItem('lastName');

//clear // storagın içini full temizler
//localStorage.clear();

// set array to storage
//localStorage.setItem('hobies',hobies);// dikkat direk aralarında virgül olan bir string olarak kayıt eder 
// halbu ki bu bir arrayb t-yani obje tipli

// arrayi array olarak kayıt etmek için yani obje tipini bozmadan kayıt için
//JSON.stringify kullanılır
localStorage.setItem('hobies',JSON.stringify(hobies));
// artık bir obje tipind ebir arry

// storage den obje tipini cekmek için

val=JSON.parse(localStorage.getItem('hobies'));






console.log(val);
console.log(localStorage);
// *************************************************
/*
//Session Storage
const city =sessionStorage.setItem('city','Mardin');
const country=sessionStorage.setItem('country','Türkiye');
console.log(sessionStorage);
*/

// *********************
// local ve seesion arasındaki fark 

// hepsini kağıda özelce yazdın -- notlarında --35-36.sayfa da



// **************************** 80.video Constructor Uygulaması

//cosntructor oluşturuldu

/*function Employee(name,salary){
  this.name= name;
  this.salary=salary;

}

// fonk manuel ekleyebilrisin ama bellek açısından ve kalıtım açısından 
// proto yöntemi ile yap

Employee.prototype.calculateVergi=function(){
  var month=new Date().getMonth()+1;
  var tax=0;
  var total=this.salary*month;

  if(total<=20000){
    tax=total*0.2;
  }else if(total >20000 && total<=30000){
    tax=total*0.25;
  }else{
    tax = total*0.3;
  }

  // geriye bir obje döndün
  return{
    tax: tax,
    paid: total - tax
  }

}


var emp1=new Employee('Yiğit',3000);
var emp1_Salary=emp1.calculateVergi(); // böyle atama sebebi dönüş tipi bir obje ve objenin içindeki alana ulaşmak. sen direk emp1.calculate().tax yapınca kabul eetmedi neden?
// üstteki yorum satırını sor?
console.log(emp1.calculateVergi());


console.log(`${emp1.name} isimli personel ${emp1_Salary.tax} vergi
kesintisi ile ${emp1_Salary.paid} maaş almıştır`)

var emp2=new Employee('Can',4000);
console.log(emp2.calculateVergi());


*/


// ************** 82. Video 
// Prototype tabanlı kalıtıtm

/*let Person = function(name,yearOfBirth,job){
  this.name=name;
  this.yearOfBirth=yearOfBirth;
  this.job=job;
}

// Kurucu fonksiyonun Protoypına calculateage adlı metodu ekledin
Person.prototype.calculateAge=function(){
  return 2022-this.yearOfBirth;
}


let Teacher=function(name,yearOfBirth,job,subject){
  Person.call(this,name,yearOfBirth,job);
  this.subject=subject;

}


//ınherit the persın protoype methods 
Teacher.prototype=Object.create(Person.prototype);

//set teacher constructor
Teacher.prototype.constructor=Teacher;



console.log(Teacher.prototype.constructor);

let arif=new Person('arif',1885,'dr');
let emel=new Teacher ('emel',1989,'teacher','math');

console.log(arif);
console.log(emel);
console.log(emel.calculateAge());


*/

/*var str1='Sadık';
var str2= new String('Betüş');
console.log(str1);// primitive vir string sadece hazır string metotları kullanabilir prottype kısmı yoktur
console.log(str2);// String constractordan oluşturlmuş string bir değerdir Prototype var TÜm hazır string metotları dışında ekleyebilirisn

String.prototype.Ekle=function(){// String consturtoruna Ekle adlı metot etkledin inspect yapına en üstte 
    return  console.log(this+this);
}

console.log(str1); // protosu yok
console.log(str2);// Ekle gelmiş prototype kısmında gözüküyor en üstte 


str1.Ekle(); // primitive olduğu için ekle den faydalanamz 
str2.Ekle();// ama artık ekle onun için hazır bir fonk 
// ve artık String constoructurondan üretien tüüüm stringler içinde var 

var str3=new String('Dudu'); // prototypeında Ekle var artık tüm String constructorundan üretilen strigler için var dedik
console.log(str3);
str3.Ekle();


 */




/*class Deneme{
  constructor(ad,soyad){
    this.ad=ad;
    this.soyad=soyad;
  }

  }
*/

/*let ex1=new Deneme("Ali","Oya");
console.log(ex1);




let array=["Kelim","Nas","Almusa"];
console.log(array);

*/
class Kisi{
  constructor(ad,soyad){
    this.ad=ad;
    this.soyad=soyad;
  }
}


class Ogr extends Kisi{
  constructor(ad,soyad,yıl){
    super(ad,soyad);
    this.yıl=yıl;
  }
  kendiniTanıt(){
    console.log("benim adım"+this.ad);
  }
}

let kisi1=new Kisi("Al","oyalı");
let ogr1=new Ogr("omer","mısır",1992);

console.log(kisi1);
console.log(ogr1);


ogr1.kendiniTanıt();

kisi1.kendiniTanıt();



























































































































