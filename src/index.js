module.exports = function toReadable (number) {
    let x = String(number);
    let first = x[0];
    let second = x[1];
    let third = x[2]; 
    
    if (first != undefined && second == undefined && third == undefined) {
        return primitiv(first);  
    }
    if (first == '1' && second == '0' && third == undefined) {
        return ten(second);  
    }
    if (first == '1' && second != undefined && third == undefined) {
        return ten(second);  
    }
    if (first >= '2' && second == '0' && third == undefined) {
        return desyatki(first);  
    }
    if (first >= '2' && second > '0' && third == undefined) {
        return desyatki(first)+' '+ primitiv(second);  
    }
    if (first >= '1' && second == '0' && third == '0') {
        return primitiv(first)+' hundred';  
    }
    if (first >= '1' && second == '0' && third >= '0') {
        return primitiv(first)+' hundred ' +primitiv(third);  
    }
    if (first >= '1' && second == '1' && third >= '0') {
        return primitiv(first)+' hundred ' +ten(third);  
    }
    if (first >= '1' && second > '1' && third == '0') {
        return primitiv(first)+' hundred ' + desyatki(second);  
    }
    if (first >= '1' && second > '1' && third > '0') {
        return primitiv(first)+' hundred ' + desyatki(second)+' '+ primitiv(third);  
    }
    
    
    
    function primitiv(arg) {
        switch (arg) {
            case '0':
                return 'zero';
            case '1':
                return 'one';
            case '2':
                return 'two';
            case '3':
                return 'three';
            case '4':
                return 'four';
            case '5':
                return 'five';
            case '6':
                return 'six';
            case '7':
                return 'seven';
            case '8':
                return 'eight';
            case '9':
                return 'nine';
        }
    }
    
    function ten(arg) {
        switch (arg) {
            case '0':
                return 'ten';
            case '1':
                return 'eleven';
            case '2':
                return 'twelve';
            case '3':
                return 'thirteen';
            case '4':
                return 'fourteen';
            case '5':
                return 'fifteen';
            case '6':
                return 'sixteen';
            case '7':
                return 'seventeen';
            case '8':
                return 'eighteen';
            case '9':
                return 'nineteen';
        }
    }
    
    function desyatki(arg) {
        switch (arg) {
            case '2':
                return 'twenty';
            case '3':
                return 'thirty';
            case '4':
                return 'forty';
            case '5':
                return 'fifty';
            case '6':
                return 'sixty';
            case '7':
                return 'seventy';
            case '8':
                return 'eighty';
            case '9':
                return 'ninety';
        }
    }
    



}