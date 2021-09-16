var receptek=[];
$(function(){

    
$.ajax(
    {url: "etelek.json", 
    success: function(result){
    console.log(result);
    receptek = result.receptkonyv;
    console.log("ajax hívásban");
    console.log(receptek);
        megjelenit();
        /*$("#div1").html(result);*/
      }
    }
      );
    
      console.log("kívül"+receptek);
      //$("article").append(receptek[0].nev);
});
function megjelenit(){
    console.log(receptek);
    //az adatok megjelenitése táblázatban
    //$("article").append(receptek[0]["nev"]);
    $("article").append("<table>");
    $("article table").append("<tr id='fejlec'><th>Név: </th><th>Elkészítési idő: </th><th>Kép: </th><th>Leírás: </th><th>Hozzávalók: </th></tr>");
    for (var i = 0; i < receptek.length; i++) {
        $("article table").append("<tr id='" + i + "'></tr>");
        for (var item in receptek[i]) {
            $("table tr").eq(i+1).append("<td>"+ receptek[i][item]+"</td>");

            
        }
        
        
    }
    
    $("article table tr").hover(hatter);
    $("article table tr").click(kattintottRecept);

}
/*$(".fejlec").mouseover(function(){
    $(".fejlec").css("background-color", "yellow");

  });*/


  function hatter(){
      console.log($(this).attr("id"));
      $(this).toggleClass("jelenlegiSor");
  }

  function kattintottRecept(){
        if($(this).attr("id") !== "fejlec"){
            var sorID = $(this).attr("id");
            console.log(sorID);
            $("section div").eq(1).empty();
            $("section div").eq(1).append("<img src='" + receptek[sorID].kep + "'>");

        } 
  }