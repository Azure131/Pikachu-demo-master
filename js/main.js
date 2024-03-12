!function () {
    var duration = 1
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

        var code = `
.preview{
height: 100%;
display:flex;
justify-content:center;
align-items:center;
}
.wrapper{
    width:100%;
    position:relative;
}
.wrapper > :not(:last-child){
    z-index: 1;
}
.body{
    height: 100vh;
    background-color: #fff;
}
.body .border_H{
    width: 100%;
    height: 1.5vh;
    background-color: #44546b;
}
.body .head>.border_T{
    width: 25%;
    height: 0;
    margin:0 auto;
    border-width:  1.5vh  1.5vh 0 1.5vh;
    border-style: solid;
    border-color: #44546b transparent #44546b transparent;
}
.body .bottom {
  position: absolute;
  bottom: 0;
  width: 100%;

}
.body .bottom>.border_T_B{
    width: 25%;
    height: 0;
    margin:0 auto;
    border-width:  0  1.5vh 1.5vh 1.5vh;
    border-style: solid;
    border-color: #44546b transparent #44546b transparent;
}
`
        
    }
    writeCode('', code)

    
}.call();