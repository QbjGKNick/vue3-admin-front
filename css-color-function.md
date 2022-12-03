```js
// 下面color函数以及 shade tin是css的color-mod函数
// 了解文档 http://cdn1.w3cplus.com/css4/color-mod.html
'color(#11A983 shade(10%))' => 'rgb(15, 152, 118)'
'color(#11A983 tint(10%))' => 'rgb(41, 178, 143)'
'color(#11A983 tint(20%))' => 'rgb(65, 186, 156)'
'color(#11A983 tint(30%))' => 'rgb(88, 195, 168)'
'color(#11A983 tint(40%))' => 'rgb(112, 203, 181)'
'color(#11A983 tint(50%))' => 'rgb(136, 212, 193)'
'color(#11A983 tint(60%))' => 'rgb(160, 221, 205)'
'color(#11A983 tint(70%))' => 'rgb(184, 229, 218)'
'color(#11A983 tint(80%))' => 'rgb(207, 238, 230)'
'color(#11A983 tint(90%))' => 'rgb(231, 246, 243)'
// 利用css-color-function转换为rgb
import color from 'css-color-function'
color.convert('color(#11A983 shade(10%))') // 'rgb(15, 152, 118)'
```