const live2d_path="https://cdn.jsdelivr.net/gh/CWHISME/CWHISME.github.io@master/live2d-widget/";function loadExternalResource(s,l){return new Promise((e,i)=>{let t;if(l==="css"){t=document.createElement("link");t.rel="stylesheet";t.href=s}else if(l==="js"){t=document.createElement("script");t.src=s}if(t){t.onload=()=>e(s);t.onerror=()=>i(s);document.head.appendChild(t)}})}if(screen.width>=350){Promise.all([loadExternalResource(live2d_path+"waifu.css","css"),loadExternalResource(live2d_path+"live2d.min.js","js"),loadExternalResource(live2d_path+"waifu-tips.js","js")]).then(()=>{initWidget({waifuPath:live2d_path+"waifu-tips.json",modelListPath:live2d_path+"model_list.json",cdnPath:"https://cdn.jsdelivr.net/gh/CWHISME/live2d_api@master/"})})}console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);