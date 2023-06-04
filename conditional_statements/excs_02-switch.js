function getLetter(s) {
    let letter = s.charAt(0);
         
    switch(letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'A'
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            return 'B'
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            return 'C'
        default:
            return 'D'
    }
}