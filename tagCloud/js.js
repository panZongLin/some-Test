;$(function(i){
    $('body').hide().fadeIn(1000);
});

var tags = $(".tag");
for (var i = tags.length - 1; i >= 0; i--) {
    tags[i].style.fontSize = random_num(1,30) + 'px';
    tags[i].style.color = random_color();
};
// ----------------
var tagCloud = $("#tagCloud");
var boxWidth = tagCloud.width();
// ----------------
tags[0].style.marginLeft = boxWidth / 2 - 50 + 'px';

tags[2].style.clear = 'left';
tags[2].style.marginLeft = boxWidth / 3 - 50 + 'px';

tags[6].style.clear = 'left';
tags[6].style.marginLeft = boxWidth / 4 - 50 + 'px';
// // ----------------
tags[tags.length-2].style.clear = 'left';
tags[tags.length-2].style.marginLeft = boxWidth / 2 - 50 + 'px';

tags[tags.length-6].style.clear = 'left';
tags[tags.length-6].style.marginLeft = boxWidth / 3 - 50 + 'px';

tags[tags.length-12].style.clear = 'left';
tags[tags.length-12].style.marginLeft = boxWidth / 4 - 50 + 'px';



// 随机字号
function random_num(min,max){
    return Math.floor(min + Math.random() * (max-min));
}
// 随机字体颜色
function random_color(){
    return Math.ceil(Math.random()*16777215).toString(16);
}