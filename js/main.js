!function () {
    var duration = 20
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'nornal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTags = document.querySelector('#styleTags')
        let n = 0
        let id = setTimeout(function run(){
            n = n + 1
            container.innerHTML = code.substring(0, n)
            styleTags.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else { 
                fn && fn.call()
            }
        }, 50);

        var code = `/*首先准备皮卡丘的皮*/
.preview{
height: 100%;
display:flex;
justify-content:center;
align-items:center;
background:#FFE600;
}
.wrapper{
    width:100%;
    height:165px;
    position:relative;
}
.wrapper > :not(:last-child){
    z-index: 1;
}
/*然后画一个皮卡丘的鼻子*/
.nose{
    width:0;
    height:0;
    border:10px solid black;
    border-width:10px 12px;
    border-radius:50%;
    border-color:black transparent transparent transparent;
    position:absolute;
    left:50%;
    top:28px;
    transform:translateX(-50%)
}
/*画皮卡丘的眼睛*/
.eye{
    width:49px;
    height:49px;
    background:#2E2E2E;
    position:absolute;
    border-radius:50%;
    border:2px solid black;
}
/*接下来画皮卡丘的眼珠子*/
.eye::before{
    content:'';
    display:block;
    width:24px;
    height:24px;
    background:white;
    border-radius:50%;
    border:2px solid black;
    position:absolute;
    left:6px;
    top:-1px;
}
/*把左眼放到正确的位置*/
.eye.left{
    right:50%;
    margin-right:90px;
}
/*把右眼放到正确的位置*/
.eye.right{
    left:50%;
    margin-left:90px;
}
/*然后画皮卡丘的脸蛋*/
.face{
    width:68px;
    height:68px;
    background:#FF0000;
    border:2px solid black;
    border-radius:50%;
    position:absolute;
    top:85px;
}
.face.left{
    right:50%;
    margin-right:116px;
}
.face.right{
    left:50%;
    margin-left:116px;
}
/*然后画皮卡丘的上嘴唇*/
.upperLip{
    width:80px;
    height:29px;
    border:3px solid black;
    border-top:none;
    position:absolute;
    top:46px;
    background:#FFE600;
}
.upperLip.left{
    border-right:none;
    border-bottom-left-radius:45px 30px;
    transform:rotate(-25deg);
    right:50%;


}
.upperLip.right{
    border-left:none;
    border-bottom-right-radius:45px 30px;
    transform:rotate(25deg);
    left:50%;
}
/*最后画皮卡丘的嘴*/
.lowerLip-wrapper{
    bottom:-45px;
    position:absolute;
    left:50%;
    margin-left:-105px;
    height:152px;
    width:200px;
    overflow: hidden;

}
.lowerLip-wrapper .lowerLip{
    height:1300px;
    width:210px;
    background:#990513;
    border-radius:110px/650px;
    border:3px solid black;
    position:absolute;
    bottom:0px;
    overflow: hidden;
}
/*然后画皮卡丘的舌头*/
.lowerLip-wrapper .lowerLip::after{
    content:'';
    position:absolute;
    bottom:0;
    width:140px;
    height:122px;
    background:#FC4A62;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
}
/*完成！现在把这只可爱的皮卡丘送给你！*/`
        
    }
    writeCode('', code)

    
}.call();