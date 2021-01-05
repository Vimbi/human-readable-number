module.exports = function toReadable (number) {

  const func1 = function(num) {
    let x;
    switch (num) {
      case '1':
        x = 'one';
        break;
      case '2':
        x = 'two';
        break;
      case '3':
        x = 'three';
        break;
      case '4':
        x = 'four';
        break;
      case '5':
        x = 'five';
        break;
      case '6':
        x = 'six';
        break;
      case '7':
        x = 'seven';
        break;
      case '8':
        x = 'eight';
        break;
      case '9':
        x = 'nine';
        break;
      case '10':
        x = 'ten';
        break;
      case '11':
        x = 'eleven';
        break;
      case '12':
        x = 'twelve';
        break;
      case '13':
        x = 'thirteen';
        break;
      case '14':
        x = 'fourteen';
        break;
      case '15':
        x = 'fifteen';
        break;
      case '16':
        x = 'sixteen';
        break;
      case '17':
        x = 'seventeen';
        break;
      case '18':
        x = 'eighteen';
        break;
      case '19':
        x = 'nineteen';
        break;
    }
  
    return x;
  }  
  
  const func2 = function(num) {
    let z;
    switch (num) {
      case '10':
        z = 'ten';
        break;
      case '2':
        z = 'twenty';
        break;
      case '3':
        z = 'thirty';
        break;
      case '4':
        z = 'forty';
        break;
      case '5':
        z = 'fifty';
        break;
      case '6':
        z = 'sixty';
        break;
      case '7':
        z = 'seventy';
        break;
      case '8':
        z = 'eighty';
        break;
      case '9':
        z = 'ninety';
        break;
      default:
        z = ''
        break;
    }
  
    return z;
  }

  if(number === 0) {
    return 'zero';
  }

  if(number < 20) {
    return func1(number.toString());
  }
  
  if (number < 100) {
    let digits = number.toString().split('');
    let a = func2(digits[0]);

    if(Number(digits[1]) !== 0) {
      let b = func1(digits[1]);
      return `${a} ${b}`;
    } else {
      return `${a}`;
    }
  }  
  
  if (number > 99) {
    let digits = number.toString().split('');    
    let a = func1(digits[0]);

    if (Number(digits[1] + digits[2]) > 19) {
      let b = func2(digits[1]);

      if(Number(digits[2]) !== 0) {
        let c = func1(digits[2]);
        return `${a} hundred ${b} ${c}`;
      } else {
        return `${a} hundred ${b}`;
      }
    }

    if (Number(digits[1] + digits[2]) < 20 && Number(digits[1] + digits[2]) !== 0) {
      return `${a} hundred ${func1(Number(digits[1] + digits[2]).toString())}`;
    } else {
      return `${a} hundred`;
    }  
  }

}
