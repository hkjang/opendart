const opendart = require('./index.js');

var options = {
    'corp_code' : '00126380'
}
opendart.disclosure.company('ACCESS_KEY', options).then(function (res){
    console.log(res.data);
});
