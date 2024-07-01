let seher = prompt('Yola çıxacağınız şəhəri qeyd edin:')
let teyinat = prompt('Getmək istədiyiniz  şəhəri qeyd edin:')
let suret = prompt('Maşınınızın sürətini qeyd edin:')
let mesafe = prompt('Yolun məsafəsini qeyd edin qeyd edin:')
let saat = mesafe/suret
let result = 'Siz' + ' ' + seher + ' ' + 'şəhərindən' + ' ' + teyinat + ' ' +'şəhərinə olan' + ' ' + mesafe + 'km məsafəni' + suret + 'km\saat lıq maşınla' + saat + ' saata dəf edərsiniz.'


document.getElementById('result').innerHTML = Netice