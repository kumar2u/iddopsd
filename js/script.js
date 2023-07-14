$(function(){

    if(screen.width<=767){
        $("nav ul li a").click(function(e){
            $(".collapse").slideUp()
        })
    }

    $(".btn-mob").click(function(){
        $(".collapse").slideToggle();
    })


     $("nav ul li a").click(function(e){
           e.preventDefault();
           
           let top=$(this).attr("href");
           let offset=$(top).offset().top;
 
 
           $("html,body").animate({
             scrollTop:offset-80
           })
     });
     $(".top").click(function(e){
           e.preventDefault();
           $("html,body").animate({scrollTop:0},1000)
     });
     $(".accordion a").click(function(e){
           e.preventDefault();
           //$(this).next().slideToggle(400,function(){$(this).prev().toggleClass("active");})
           
           if( $(this).hasClass("active")==false ){
             $(".accordion p").slideUp(400); 
             $(this).next().slideDown(400,function(){$(".accordion a").removeClass("active");$(this).prev().addClass("active");});
           }
         //   else{
         //     $(this).next().slideUp(400,function(){ $(this).prev().removeClass("active");});
         //   }
     });
 
     $("#portfolio .btn").click(function(){
         $("#portfolio .btn").removeClass("active");
         $(this).addClass("active");
 
         if( $(this).text()=="All" ){
             $("#portfolio .col-4:has(.work)").fadeIn();
         }
         else  if( $(this).text()=="Website" ){
             $("#portfolio .col-4:has(.work)").fadeOut();
             $("#portfolio .col-4:has(.work):eq(0),#portfolio .col-4:has(.work):eq(1),#portfolio .col-4:has(.work):eq(2)").fadeIn();
         }
         if( $(this).text()=="Branding" ){
             $("#portfolio .col-4:has(.work)").fadeOut();
             $("#portfolio .col-4:has(.work):eq(3),#portfolio .col-4:has(.work):eq(4),#portfolio .col-4:has(.work):eq(5)").fadeIn();
         }
 
     });
 
 
     // bxSlider
 
     $(".slider").bxSlider({
         controls:false,
         auto:true,
         autoHover:true
     });
 
 });