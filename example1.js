$(document).ready(function(){

    /** basic selector**/
    
   // $('#lesson-1').css('border', '4px solid red');

    /**basic animation**/

    // $('.box:first').hide(500).delay(300).show(800);
    // $('.box:first').slideUp(500).slideDown(500);
    // $('.box:first').fadeOut(500).fadeIn(500);
    // $('.box:first').animate({height:'100px'},1000).slideUp(1000);
    //$('.box:first').animate({bottom:'200px', left : '200px'},1000).slideUp(1000);
   
    /**index filter**/

    // $('p:first').css('border', '4px solid red');
    // $('p:last').css('border', '4px solid red');
    // $('p:gt(2)').css('border', '4px solid red');
    // $('p:lt(2)').css('border', '4px solid red');
    // $('p:eq(2)').css('border', '4px solid red');

    /**relationship filter**/

    // $('h2:has(span)').css('border', '4px solid red');
    // $('.box:empty').css('border', '4px solid red');

    //attribute filter
    //$('p[class = "lead"]').css('border', '4px solid red');
    //$('p[name = "shorty"]').css('border', '4px solid red');
    //find all the string that contain the name sho in the start
    //$('p[name ^= "sho"]').css('border', '4px solid red');
    //find all the links that contain the href .co.uk in end
    $('a[href $= ".co.uk"]').css('border', '4px solid red');
});
