$(function(){
    // $("#text_change_btn").on("click",function(){
    //     $("#sec1 h1").text("jQueryで更新");
    // });
    
    // $("#text_change_btn").on("click",function(){
    //     $("header").toggle();
    // });

    // $("#text_change_btn").on("click",function(){
    //     $("#sec1 h1").css("color","red");
    // });

 ////////////////
 //日本語とEnglsh 表示・非表示
    // $("#English_btn").click(function(){
    //     $("#English_btn").css("display","none");
    //     $("#japan_btn").css("display","block");
    // });

    // $("#japan_btn").click(function(){
    //     $("#japan_btn").css("display","none");
    //     $("English_btn").css("display","block");
    // });

    //english切り替え
    $("#lng-en").on("click",function(){
      $("#menu-sec1").text("Heading");
      $("#menu-sec2").text("flex");
      $("#menu-sec3").text("Centering");
      $("#menu-sec4").text("Portfolio");
  }); 
//日本語切り替え
  $("#lng-ja").on("click",function(){
      $("#menu-sec1").text("見出しのエリア");
      $("#menu-sec2").text("flexのエリア");
      $("#menu-sec3").text("センタリングエリア");
      $("#menu-sec4").text("制作実施");
  });



//  //english切り替え
//     $("#English_btn").on("click",function(){
//         $(".gr_midashi").text("Heading");
//         $(".gr_flex").text("flex");
//         $(".gr_sentaring").text("Centering");
//         $(".gr_seisaku").text("Portfolio");
//     }); 
//  //日本語切り替え
//     $("#japan_btn").on("click",function(){
//         $(".gr_midashi").text("見出しのエリア");
//         $(".gr_flex").text("flexのエリア");
//         $(".gr_sentaring").text("センタリングエリア");
//         $(".gr_seisaku").text("制作実施");
//     });
//              ///※
       
 //三角形を求める関数
     function triangle(x,y){
        var triangle = x*y/2;
        return triangle;
        //return x*y/2; 変数設定せずにreturnに書いてもいい
    }   

    console.log(triangle(2,8));

 //制作実績画像サイズ拡大
    $("#kakudai_btn").on("click",function(){
        $("#sec4 img").css("width","600px");
    });

 //画像変更
    $("#henkou_btn").on("click",function(){
        $("#sec4 img").attr("src","./img/dog.jpg");
    });

 //ブロックエリアをボタンで追加する
    $("#add_area").on("click",function(){
        $(".flex_area").append('<h2>flexを使って左から詰めていく</h2>');
        
    })  
 
 //ブロックエリアを入力した数字で追加する
 $(window).fadeThis(); 

 $(".drawer").drawer();

});