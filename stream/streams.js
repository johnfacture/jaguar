$('.lazy').Lazy();function hoverLeft(element){element.setAttribute('src','img/arrow-left-hover.png');}
function unhoverLeft(element){element.setAttribute('src','img/arrow-left.png');}
function hoverRight(element){element.setAttribute('src','img/arrow-right-hover.png');}
function unhoverRight(element){element.setAttribute('src','img/arrow-right.png');}
function hideChatControls(){$('.chat-attach').hide();$('.chat-smile').hide();}
function showChatControls(){$('.chat-attach').show();$('.chat-smile').show();}
function formChoose(element){$('.form-picker a').removeClass('active');$(element).addClass('active');}
function hideModal(){$('.login').hide();}
function showModal(e){e.preventDefault();$('.login').fadeIn(250);}
$('.intro-text-slides').slick({dots:true,arrows:false,slidesToShow:1,slidesToScroll:1,infinite:true,autoplay:true,autoplaySpeed:3000,appendDots:$('.slick-slider-dots'),});$('.games-slider').slick({lazyLoad:'ondemand',dots:false,arrows:true,slidesToShow:1,slidesToScroll:1,infinite:true,appendArrows:$('.games-arrows'),prevArrow:"<button class='slick-prev'><img src='img/arrow-left.png' onmouseover='hoverLeft(this);' onmouseout='unhoverLeft(this);'></button>",nextArrow:"<button class='slick-next'><img src='img/arrow-right.png' onmouseover='hoverRight(this);' onmouseout='unhoverRight(this);'></button>",})
$('.categories-previews').slick({lazyLoad:'ondemand',dots:false,arrows:true,slidesToShow:1,slidesToScroll:1,infinite:true,appendArrows:$('.categories-arrows'),prevArrow:"<button class='slick-prev'><img src='img/arrow-left.png' onmouseover='hoverLeft(this);' onmouseout='unhoverLeft(this);'></button>",nextArrow:"<button class='slick-next'><img src='img/arrow-right.png' onmouseover='hoverRight(this);' onmouseout='unhoverRight(this);'></button>",})
$('a[data-slide]').click(function(e){e.preventDefault();var slideno=$(this).data('slide');$('.categories-previews').slick('slickGoTo',slideno-1);});$('.categories-previews').on('beforeChange',function(event,slick,currentSlide,nextSlide){$('.category').removeClass('active');let slideno=nextSlide+1;let selector='#category'+slideno;$(selector).addClass('active');console.log({currentSlide,nextSlide});});$('.categories-previews-stream').slick({lazyLoad:'ondemand',dots:false,arrows:true,slidesToShow:1,slidesToScroll:1,infinite:true,appendArrows:$('.categories-arrows-stream'),prevArrow:"<button class='slick-prev'><img src='img/arrow-left.png' onmouseover='hoverLeft(this);' onmouseout='unhoverLeft(this);'></button>",nextArrow:"<button class='slick-next'><img src='img/arrow-right.png' onmouseover='hoverRight(this);' onmouseout='unhoverRight(this);'></button>",})
var art1=new Artplayer({container:'.artplayer-app1',url:'img/video.mp4',volume:0.5,isLive:true,muted:true,autoplay:true,loop:true,flip:true,rotate:true,playbackRate:true,fullscreen:true,miniProgressBar:true,networkMonitor:false,mutex:true,light:true,backdrop:true,quality:[{default:true,name:'SD 480P',url:'img/video.mp4',},{name:'HD 720P',url:'img/video.mp4',},],});$('video').removeAttr('controls');function getRandomInt(min,max){min=Math.ceil(min);max=Math.floor(max);return Math.floor(Math.random()*(max-min))+min;}
setInterval(function(){let randomNumber=getRandomInt(0,7);randomNumber+=1;let headings=['入告遂覧効','長稿改認泉散線協康権井','出区。組音議谷','講絞運小法極写話訴試','弥試材仏近。存掛','更奏属座','付庁索掲調間教医改','要関映予。止約','康経画用禁占速企','立功拒意政貫事欠占学。','金権着覧究介企','給強目','賞耕児活編挙七走','界辞。計裁属賞人','昭綱作政井手少統','崎井騎生。票題森川','黒実名共験直更案白座事','使。賞団返注非応','教海財講懐大若。'];let texts=['後洋聴日送折義買公注滅速竹。毎禁効堀対軽告野認','内東江気済告。却理成浜国山小温権供面製降戦','町更読朝遺作配高公題裂旅定引','約越被事著。想聞就付写戦合質預開弾介続用。律毎女衛','項施間御恵円','新人幅月度備集職線。先術構実会治児甘中全就食。目応自問内性','型読子幹斉特。','囲型音本備','備母告催','朝読渡護。戸戦表無調都展山退測勝意口教。','放上販朝熱苦新早給載森言変手。個省与頭','中地満売内聞三際。著会奪済専性','今聖妙変統州外展前支納','承。矢開治書賠不話登組前市極重産一築社','区図南。野燼名更案津起席母遅提作本緑。載','格文事情図損人会短致関察速入投楽','通今能。県図記反航賞木聞界','更改料所。麻半政見少造'];var heading=headings[Math.floor(Math.random()*headings.length)];var text=texts[Math.floor(Math.random()*texts.length)];let newComment=`
    <li class="comment">
    <img src="img/comment_ava${randomNumber}.png" class="comment-photo" alt="">
    <div class="comment-text">
      <h5>${heading}</h5>
      <p>${text}</p>
    </div>
  </li>`;$('.comments').prepend(newComment);},getRandomInt(1000,3000));setInterval(function(){let randomNumber=getRandomInt(0,7);randomNumber+=1;let headings=['入告遂覧効','長稿改認泉散線協康権井','出区。組音議谷','講絞運小法極写話訴試','弥試材仏近。存掛','更奏属座','付庁索掲調間教医改','要関映予。止約','康経画用禁占速企','立功拒意政貫事欠占学。','金権着覧究介企','給強目','賞耕児活編挙七走','界辞。計裁属賞人','昭綱作政井手少統','崎井騎生。票題森川','黒実名共験直更案白座事','使。賞団返注非応','教海財講懐大若。'];let texts=['後洋聴日送折義買公注滅速竹。毎禁効堀対軽告野認','内東江気済告。却理成浜国山小温権供面製降戦','町更読朝遺作配高公題裂旅定引','約越被事著。想聞就付写戦合質預開弾介続用。律毎女衛','項施間御恵円','新人幅月度備集職線。先術構実会治児甘中全就食。目応自問内性','型読子幹斉特。','囲型音本備','備母告催','朝読渡護。戸戦表無調都展山退測勝意口教。','放上販朝熱苦新早給載森言変手。個省与頭','中地満売内聞三際。著会奪済専性','今聖妙変統州外展前支納','承。矢開治書賠不話登組前市極重産一築社','区図南。野燼名更案津起席母遅提作本緑。載','格文事情図損人会短致関察速入投楽','通今能。県図記反航賞木聞界','更改料所。麻半政見少造'];var heading=headings[Math.floor(Math.random()*headings.length)];var text=texts[Math.floor(Math.random()*texts.length)];let newComment=`
    <li class="comment">
    <img src="img/comment_ava${randomNumber}.png" class="comment-photo" alt="">
    <div class="comment-text">
      <h5>${heading}</h5>
      <p>${text}</p>
    </div>
  </li>`;$('.comments').prepend(newComment);},getRandomInt(1000,3000));setInterval(function(){let randomNumber=getRandomInt(0,7);randomNumber+=1;let headings=['入告遂覧効','長稿改認泉散線協康権井','出区。組音議谷','講絞運小法極写話訴試','弥試材仏近。存掛','更奏属座','付庁索掲調間教医改','要関映予。止約','康経画用禁占速企','立功拒意政貫事欠占学。','金権着覧究介企','給強目','賞耕児活編挙七走','界辞。計裁属賞人','昭綱作政井手少統','崎井騎生。票題森川','黒実名共験直更案白座事','使。賞団返注非応','教海財講懐大若。'];let texts=['後洋聴日送折義買公注滅速竹。毎禁効堀対軽告野認','内東江気済告。却理成浜国山小温権供面製降戦','町更読朝遺作配高公題裂旅定引','約越被事著。想聞就付写戦合質預開弾介続用。律毎女衛','項施間御恵円','新人幅月度備集職線。先術構実会治児甘中全就食。目応自問内性','型読子幹斉特。','囲型音本備','備母告催','朝読渡護。戸戦表無調都展山退測勝意口教。','放上販朝熱苦新早給載森言変手。個省与頭','中地満売内聞三際。著会奪済専性','今聖妙変統州外展前支納','承。矢開治書賠不話登組前市極重産一築社','区図南。野燼名更案津起席母遅提作本緑。載','格文事情図損人会短致関察速入投楽','通今能。県図記反航賞木聞界','更改料所。麻半政見少造'];var heading=headings[Math.floor(Math.random()*headings.length)];var text=texts[Math.floor(Math.random()*texts.length)];let newComment=`
    <li class="comment">
    <img src="img/comment_ava${randomNumber}.png" class="comment-photo" alt="">
    <div class="comment-text">
      <h5>${heading}</h5>
      <p>${text}</p>
    </div>
  </li>`;$('.comments').prepend(newComment);},getRandomInt(1000,3000));$('.stream-preview-wrapper').slick({slidesToShow:4,arrows:false,dots:false,vertical:true,})
function videoControl(elem){$('.video-active .art-icon-pause').trigger('click');$('#app1, #app2, #app3, #app4').removeClass('video-active');$('#streamer1, #streamer2, #streamer3, #streamer4').removeClass('active');let videoId=$(elem).data('videoid');let id='#app'+videoId;let streamer='#streamer'+videoId;$(id).addClass('video-active');$(id+' .art-icon-play').trigger('click');$(streamer).addClass('active');}
$(function(){function incHeight(){var el=$('.stream-preview-wrapper .slick-list')
var height=el.height();var newHeight=height+10+'px';console.log({newHeight});el.css('height',newHeight);}
setTimeout(function(){incHeight();},1000);});