let items = document.querySelectorAll('.item')
items.forEach(item => {
    item.innerHTML = 0
    let endValue = item.getAttribute('data-num')
    let increament = endValue / 20    //if put 10 became faster, if 30 lower
    function changeNumber(){
        let value = +item.innerHTML
        if(value < endValue){
            value += Math.round(increament)
            item.innerHTML = value
            setTimeout(changeNumber, 80)
        }else{
            item.innerHTML = endValue
        }

    }
    changeNumber()
})