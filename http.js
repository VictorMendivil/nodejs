/*jshint esversion: 6 */

const http = require('http');
const url = 'http://nodeprogram.com';
http.get(url, (response) => {
    let buff='';
    let c = 0;
    response.on('data', (chunck) => {
        buff += chunck;
        ++c;
    });
    response.on('end', () => {
        console.log(buff, c);
    }); 

}).on('error', (error) => {
    console.error(`Got error ${error.message}`);
}); 