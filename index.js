var domain = require('domain');
var d = domain.create();

var ar = require("ar-drone");
var client = ar.createClient();

process.on('exit', function () {
    client.land();
});

client.on('error', function (error) {
    client.land();  
    console.log(error);
});

d.run(function  () {
    try {
        client.takeoff();
        /*var stream = client.createPngStream();

        stream.on('error', function (err) {
            console.error(err);
        });

        stream.on('data', function (data) {
            console.log(data.length);
        });
*/

    } catch (error) {
        console.log(error);
        client.land();
    }

});

d.on('error', function  (error) {
    console.log(error);
    client.land();
});
