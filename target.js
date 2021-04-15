const { main } = require ('./main.js');

function fuzz(buff){
        main(buff.toString());
}
module.exports = {
   fuzz
};

