submitForm = function(){    
    var left_currency_value = document.getElementById('left_value').value,
    left_currency = document.getElementById('left-group').value,
    right_currency = document.getElementById('right-group').value,
    result = document.getElementById('result'),
    data,
    sum;

    var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "http://api.fixer.io/latest?base=" + left_currency;
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
       data = JSON.parse(xhr.responseText);

      sum = left_currency_value * data.rates[right_currency];
      result.innerHTML = sum.toFixed(4) + ' ' + right_currency;
      if(left_currency === right_currency){
        result.innerHTML = left_currency_value + ' ' + right_currency;
      }
    }
    };
    xhr.send();
}

reverse = function(){
    console.log('reverse')
        var left_currency = document.getElementById('left-group').value,
        right_currency = document.getElementById('right-group').value;
        document.getElementById('left-group').value = right_currency;
        document.getElementById('right-group').value = left_currency;

};