function main(input) {
        if (input[0] == "F" && input[1] == "U" && input == "FUZZ"){
             throw("CRASH");
        }
        if (input == "CYD"){
             throw("ANOTHER CRASH");
        }
}
module.exports = { main };
