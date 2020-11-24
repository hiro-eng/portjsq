str = "Teck-Teck World";
document.write("<hr>");
//document.write(str.fontsize(32).italics());
document.write("<hr>");
document.write("あなたのお気に入りのwebページを作ります。<br>".bold().italics());
document.writeln("<img src = 'https://github.com/hiro-eng/portjsq/blob/main/20201110-2240_260a3efb198a5af13819bb04f119ccf0.jpg?raw=true' width= '500px' height ='350px'　alt ='スマホを見る少女'>");
document.write("<br>>>>>>>このページはJavascript/Jqueryのみで作成してあります。".bold().italics());
document.write("<br><hr>");
document.write("HP作成/管理<br>".fontsize(16).italics());
document.write("企業ロゴ作成/SNS対策/SEO対策<br>".bold().italics());
document.write("お気軽にお問い合わせください。<br>".bold().italics());
document.write("Mail: walkerjpjp@gmail.com".bold().italics());
document.write("<br><hr>");
document.write("Teck-Teck Worldについて<br>".fontsize(16).italics());
document.write("埼玉県を拠点として、HIROHIROを中心に活動しています。<br>".bold().italics());
document.write("インターネット関係のお仕事なら、<br>".bold().italics());
document.write("個人のお客様、会社様問わずお引き受け致します。".bold().italics());
document.write("<br><hr>");
document.write("HIROHIROについて<br>".fontsize(16).italics());
document.write("さいたま市東大宮在住/一人暮らし/プログラマ/<br>".bold().italics());
document.write("HTML/CSS/Javascript/Jquery/PHP/Ruby/<br>".bold().italics());
document.write("食生活アドバイザー保持/簿記、会計、株式投資の知識あり".bold().italics());
document.write("<br><hr>");
document.write("このページで使用している画像は「ぱくたそ」のフリー画像です。<br><hr>".bold().italics());
document.write("「Teck-Teck World」オリジナルロゴ<br>".bold().italics())
document.write("<br><img src = 'https://github.com/hiro-eng/portjsq/blob/main/20201110-2158_1c68e0735d0a2c156c6ce1ed12204316.jpg?raw=true' width = '300px' height = '170px'>");
document.write("<br><hr>");
document.write("画面を二回クリックするとメッセージが表示されるよ！<br>".bold().italics());
document.write("<hr>");
document.write("当ページはPC専用です。<br>".bold().italics());
document.write("HTML/CSSバージョンはこちら".link("https://hiro-eng.github.io/teckteck/"));
document.write("<hr>");
document.write("<br>>>>>>>>>".bold());

window.onload = function(){
   setInterval(function(){
     var dd = new Date();
      document.getElementById("T1").innerHTML = dd.toLocaleString();
    },1000);
}
function msg1(){
  alert("ご来場ありがとうございます。お仕事のご依頼お待ちしております。　by HIROHIRO ");

}

document.bgColor="pink";

$(document).ready(function(){
   
 $("h1").hover(
//     function(){
//    $("h1").css("color","#ff6666");
//  },
//   function(){
//    $("h1").css("color","black");
// },
   function(){
      $("h1").text("WELCOME!!!!!!!!!!!!!!!!!").css("color","red");
   },
    function(){
       $("h1").text("ITのお仕事ならお任せ").css("color","black");
    });
   $("h2").hover(
      function(){
         $("h2").text("プログラマー大大大募集中!!!!").css("color","red");
      },
      function(){
         $("h2").text("Teck-Teck Workd").css("color","black");
      });        
   
  $("h1").click(function(){

    $("h1").slideUp();
  });

 $("#T1").hover(
   function(){
    $("#T1").css("color","#ff6666");
  },
  function(){
    $("#T1").css("color","black");

  });



});
