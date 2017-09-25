var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var url = 'b7YXoji0ucE';
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video_frame', {
        videoId: url,
        playerVars: {
            autoplay: 0,
            rel: 0,
            showinfo: 0
        }
    });
}
$(window).on('resize', function () {
        var mX = 0,
        direction = '';
        $('.main_view').on('mousemove', function (e){
        var wid_h = $('.hand_shake').outerWidth(),
            width_m = $('.main_keep').outerWidth(),
            full_w = $('.main_view').outerWidth(),
            offset_m = $('.main_keep').offset(),
            width_part = width_m/2,
            full_w_p = full_w/2,
            wirth_men = $('.man.left').outerWidth(),
            loz_off_l = $('.left>.loz_keep').offset().left,
            loz_off_r = $('.right>.loz_keep').offset().left,
            loz_keep_w = $('.left>.loz_keep').outerWidth(),
            loz_part = loz_keep_w/2,
            ofs_to_man = (loz_off_l/full_w)*100,
            del_l = full_w/2-loz_off_l-loz_part,
            del_r = loz_off_r + loz_part - full_w/2,
            ser_left = loz_off_l+loz_part,
            width_r=full_w - loz_off_r-loz_keep_w,
            part_h = offset_m.left+wid_h/2;
        if (e.pageX < mX) 
            {
                direction='left';
            } else 
            {
                direction='right';
            }
        //hand
        if((e.pageX-wid_h/2)>=loz_off_l && (e.pageX+wid_h-wid_h/2)<=(loz_off_r+loz_keep_w))
        {
            $('.hand_shake').css({
                left:  e.pageX-part_h
            });
        }
        //car_l
        if((e.pageX)>=(loz_off_l+loz_keep_w) && e.pageX<=(full_w_p))
        {
            var trans_c = (full_w_p-loz_off_l)*(full_w_p-e.pageX)/(full_w_p-loz_off_l-loz_keep_w);
            if(direction=='left')
                {
                    $('.car').css({
                        transform: 'translateX(-'+trans_c+'px)'
                    });
                    
                    if(!$('.car').hasClass('left'))
                    {
                        $('.car').addClass('left');
                    }
                    
                    if($('.car').hasClass('right'))
                    {
                        $('.car').removeClass('right');
                    }
                    
                }
            else if(direction=='right')
                {
                    $('.car').css({
                        transform: 'translateX(-'+trans_c+'px)'
                    });
                    
                    if(!$('.car').hasClass('right'))
                    {
                        $('.car').addClass('right');
                    }
                    
                    if($('.car').hasClass('left'))
                    {
                        $('.car').removeClass('left');
                    }
                    
                }
             mX = e.pageX;
        }
        //car_r
        if((e.pageX)>=(full_w_p) && e.pageX<=(loz_off_r))
        {
            var trans_c = (loz_off_r+loz_keep_w-full_w_p)*(e.pageX-full_w_p)/(loz_off_r-full_w_p);
            if(direction=='left')
                {
                    $('.car').css({
                        transform: 'translateX('+trans_c+'px)'
                    });
                    
                    if(!$('.car').hasClass('left'))
                    {
                        $('.car').addClass('left');
                    }
                    
                    if($('.car').hasClass('right'))
                    {
                        $('.car').removeClass('right');
                    }
                    
                }
            else if(direction=='right')
                {
                    $('.car').css({
                        transform: 'translateX('+trans_c+'px)'
                    });
                    
                    if(!$('.car').hasClass('right'))
                    {
                        $('.car').addClass('right');
                    }
                    
                    if($('.car').hasClass('left'))
                    {
                        $('.car').removeClass('left');
                    }
                    
                }
             mX = e.pageX;
        }
        //left_man
        if((e.pageX)>=(loz_off_l+loz_part) && e.pageX<=(offset_m.left+width_part))
        {
            mX = e.pageX;        
            var trans_l = loz_off_l - loz_off_l*((e.pageX-ser_left)/del_l);
            if(trans_l<=25 && direction=='right')
                {
                    trans_l=0;
                }
            if($('.man.left').hasClass('unluck')){
                $('.man.left').removeClass('unluck');
            }
            if($('.man.right').hasClass('luck')){
                $('.man.right').removeClass('luck');
            }
            $('.man.left').css({
                        transform: 'translateX('+trans_l+'px)'
                    });
            $('.man.right').css({
                        transform: 'translateX(-'+trans_l/1.5+'px)'
                    });
        }

        //right man
        if((e.pageX)>=(offset_m.left+width_part) && e.pageX<=(loz_off_r+loz_part))
        {   
            mX = e.pageX; 
            var trans_r = width_r*(e.pageX-full_w_p)/del_r;
            if(trans_r<= 25 && direction=='left')
                {
                    trans_r=0;
                }
            if(!$('.man.right').hasClass('luck')){
                $('.man.right').addClass('luck');
            }
            if(!$('.man.left').hasClass('unluck')){
                $('.man.left').addClass('unluck');
            }
            $('.man.right').css({
                        transform: 'translateX(-'+trans_r+'px)'
                    });
            $('.man.left').css({
                        transform: 'translateX('+trans_r/1.5+'px)'
                    });
        }
        else{
            return;
        }
    });
});
var play = true;
$(document).scroll(function(){
    var scroll_top = $(document).scrollTop();
    var offset_mac = $('.macbook').offset().top;
    var mac_height = $('.macbook').outerHeight();
    if((scroll_top>=offset_mac-100 && (scroll_top<=offset_mac+mac_height)) && play)
    {
        var vid = document.getElementById("myVideo"); 
        vid.play();
        play=false;
    }
    else if(scroll_top>offset_mac+mac_height)
    {
        play=true;
        var vid = document.getElementById("myVideo"); 
        vid.pause();
    }
    else if(scroll_top<offset_mac-100)
    {
        play=true;
        var vid = document.getElementById("myVideo"); 
        vid.pause();
    }
    
});
$(document).ready(function() {
    $(window).trigger('resize');
    $('input[name="tel"]').mask("+7 (999) 999-99-99");
	$('input[name="phone"]').mask("+7 (999) 999-99-99");
    var search_str='';
    var massiv = ['1','11','111','1111','11111'];//для отлова занятых адресов подключить json или залить полный массив
    $(document).on("click", '.search_btn', function(event) {
        let value_f = $('.search_inp').val();
        if(value_f==''){
            return;
        }
        else if(massiv.indexOf(value_f)== -1){
            var suc_str =   '<div class="succec_log">'+
                            '<span class="sm_err">Address is free!</span>'+
                            '<span class="big_err">'+value_f+'</span>'+
                            '</div>'+
                            '<span class="btn_repeat suc">Repeat it!</span>';
            search_str = $('.search_form').children().detach();
            $('.search_form').addClass('success').html(suc_str);
            $('#radio_'+value_f.length+'2').prop('checked', true);
        }
        else{
            var err_str =   '<div class="err_log">'+
                            '<span class="sm_err">Address already taken</span>'+
                            '<span class="big_err">'+value_f+'</span>'+
                            '</div>'+
                            '<span class="btn_repeat">Repeat it!</span>';
            search_str = $('.search_form').children().detach();
            $('.search_form').addClass('err').html(err_str);
        }
    });
    
    $(document).on("focusout", '.search_inp', function(event) {
        $('.search_btn').click();
    });
    
    $(document).on("click", '.btn_repeat', function(event) {
        $('.search_form').removeClass('err').html(search_str);
    });
    
    $(document).on("click", '.btn_repeat.suc', function(event) {
        $('.search_form').removeClass('success').html(search_str);
    });
    
    $('.access_btn.orange, .cheking').click(function(e){
        if($('.succec_log .big_err').text()=='' && $('input:radio[name="radio1"]:checked').length == 0)
        {
            $('.col_text.address_str').text('not selected');
            $('.col_text.address_str').addClass('no_sel');
            $('.col_text.tarif_str').text('not selected');
        }
        else if($('.succec_log .big_err').text()=='' && $('input:radio[name="radio1"]:checked').length > 0)
        {
            $('.col_text.address_str').text('not selected');
            $('.col_text.address_str').addClass('no_sel');
            var label=$('input:radio[name="radio1"]:checked').prop("labels"),
                text = $(label).text().replace("Promo!","").replace(" Profitable!","");
                var title = $('input:radio[name="radio1"]:checked').parent().find('.col_head').text();
                var crop_text = text.split('/');
                if(crop_text[0]=='$100' && title == '4-digit'){
                    crop_text[0] = '$50';
                }
                $('.col_text.tarif_str').text(crop_text[0]);
        }
        else if($('.succec_log .big_err').text()!='' && $('input:radio[name="radio1"]:checked').length > 0)
        {
            $('.col_text.address_str').removeClass('no_sel');
            $('.col_text.address_str').text($('.big_err').text());
            var label=$('input:radio[name="radio1"]:checked').prop("labels"),
                text = $(label).text().replace("Promo!","").replace(" Profitable!","");
                $('.col_text.tarif_str').text(text);
        }
        $('.overlay.order').css('display','block');
        $('body').css({'overflow':'hidden'});
    });
    
    $('.btn_top').click(function(e){
        player.playVideo();
        $('.overlay.video').css('display','block');
        $('body').css({'overflow':'hidden'});
    });
    
    $(document).on("click", '.review_keep', function(event) {
        var text_in = $(this).data('text'),
            komp_name = $(this).data('name'),
            img_url = $(this).find('.rev_firm').attr('src'),
            count_r = $(this).find('.rev_count').text(),
            link_navi = $(this).data('linknavi');
        $('.init_text_r').html(text_in);
        $('.rev_firm_f').attr('src',img_url);
        $('.rev_head_f').text(komp_name);
        $('.rev_count_f').text(count_r);
        $('.rev_count_f').attr("href",link_navi).attr("target","_blank");
        $('.overlay.rewiew_f').css('display','block');
        $('body').css({'overflow':'hidden'});
    });
    
    $('input:radio[name="radio1"]').click(function(e){
        if(!$('.search_inp').length)
        {
            if($(this).attr('id').substr(-2, 1)!=$('.succec_log .big_err').text().length)
            {
                $('.search_form').removeClass('err success').html(search_str);
                $('.search_inp').val('');
            }
        }
    });
    
    $('.close_btn_f, .overlay_ord').click(function(e){
        $('.overlay.order').css('display','none');
        $('body').removeAttr('style');
    });
    
    $('.close_btn_r, .overlay_rewiew_f').click(function(e){
        $('.overlay.rewiew_f').css('display','none');
        $('body').removeAttr('style');
    });
    
    $('.close_btn_v, .overlay_video').click(function(e){
        player.pauseVideo();
        $('.overlay.video').css('display','none');
        $('body').removeAttr('style');
    });
    
    $('.form_order_field input,.bottom_form input').click(function(){
        if($(this).hasClass('error_field')){
            $(this).removeClass('error_field');
        }
    });
    
    $('.zakaz_init').click(function(e){
        var error = 0;
        if($('input[name="tel"].field').val().length!==18){
            $('input[name="tel"].field').addClass('error_field');
            error+=1;
        }
        else{
            $('input[name="tel"].field').removeClass('error_field');
        }
        if(!isEmail($('input[name="email"].field').val())){
            $('input[name="email"].field').addClass('error_field');
            error+=1;
        }
        else{
           $('input[name="email"].field').removeClass('error_field');
        }
        if($('input[name="fname"].field').val().length>3 && isletter($('input[name="fname"].field').val())){
            $('input[name="fname"].field').removeClass('error_field');
        }
        else{
           $('input[name="fname"].field').addClass('error_field');
            error+=1;
        }
        if($('input[name="org"].field').val().length>3){
            $('input[name="org"].field').removeClass('error_field');
        }
        else{
            $('input[name="org"].field').addClass('error_field');
            error+=1;
        }
        if(error==0)
        {
            //send ajax to henler php on success=>
            $('.overlay.order').css('display','none');
            $('body').removeAttr('style');
            $('.field').each(function(){
                $(this).val('');
            })
        }
        
    });
	
	$('.submit_btn_b').click(function(e){
        var error = 0;
        if($('input[name="phone"].bf_in').val().length!==18){
            $('input[name="phone"].bf_in').addClass('error_field');
            error+=1;
        }
        else{
            $('input[name="phone"].bf_in').removeClass('error_field');
        }
        if(!isEmail($('input[name="mail"].bf_in').val())){
            $('input[name="mail"].bf_in').addClass('error_field');
            error+=1;
        }
        else{
           $('input[name="mail"].bf_in').removeClass('error_field');
        }
        if($('input[name="nameFirst"].bf_in').val().length>3 && isletter($('input[name="nameFirst"].bf_in').val())){
            $('input[name="nameFirst"].bf_in').removeClass('error_field');
        }
        else{
           $('input[name="nameFirst"].bf_in').addClass('error_field');
            error+=1;
        }
        if(error==0)
        {
            //send ajax to henler php on success=>
            $('.bf_in').each(function(){
                $(this).val('');
            })
        }
        
    });
	
    var owl = $('.owl-carousel');//courosel
    owl.owlCarousel({
        loop:true,
        responsive : {
            0 : {
                items:3,
            },
            900 : {
                items:4,
            },
            1100 : {
                items:5,
            }
        }
    });
    
    $('.arr_sl.next,.next_b.form_nav').click(function() //arr
    {
        owl.trigger('next.owl.carousel');
    });
    
    $('.arr_sl.prev,.prev_b.form_nav').click(function() //arr
    {
        owl.trigger('prev.owl.carousel');
    });
    
    var map = new google.maps.Map(document.getElementById('map'), {//map
        zoom: 17,
        center: {lat: 55.781470 ,lng: 37.609668},
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
    });
    
	var currCenter = map.getCenter();
    
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(currCenter);
	});
});

$(document).on('keydown', '.search_inp', function (e) {//valid input for search
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
        (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
        (e.keyCode >= 35 && e.keyCode <= 39)) {
             return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) 
    {
        e.preventDefault();
    }
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isletter(letter) {
  var regex = /^[a-zа-яё\s]+$/iu;
  return regex.test(letter);
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};