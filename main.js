function main(input) {
        if (input[0] == "F" && input[1] == "U" && input[2] == "Z" && input == "FUZZ"){
             throw("CRASH");
        }
        if (input[0] == "C" && input[1] == "Y" && input[2] == "D" && input == "CYD"){
             throw("ANOTHER CRASH");
        }
}

module.exports = { main };
