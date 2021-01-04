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
    default:
      x = ''
      break;
  }

  return x;
}

const func2 = function(num) {
  let y;
  switch (num) {
    case '10':
      y = 'ten';
      break;
    case '11':
      y = 'eleven';
      break;
    case '12':
      y = 'twelve';
      break;
    case '13':
      y = 'thirteen';
      break;
    case '14':
      y = 'fourteen';
      break;
    case '15':
      y = 'fifteen';
      break;
    case '16':
      y = 'sixteen';
      break;
    case '17':
      y = 'seventeen';
      break;
    case '18':
      y = 'eighteen';
      break;
    case '19':
      y = 'nineteen';
      break;
  }

  return y;
}

const func3 = function(num) {
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

if (number > 99) {
  let digits = number.toString().split('');
  let a = func1(digits[0]);

  if (Number(digits[1] + digits[2]) > 9) {
    if (Number(digits[1] + digits[2]) < 20) {
      let b = func2(digits[1] + digits[2]);
      return `${a} hundred ${b}`;
    } else {
      let b = func1(digits[1]);
    }    
  } else if (digits[2] > 0) {
    let c = func3(digits[2]);
    return `${a} hundred ${b} ${c}`
  }
}




  // let digits = number.toString().split('');
  // if (Number(digits[1] + digits[2]) > 9 && Number(digits[1] + digits[2]) < 20) {
  //   switch (Number(digits[1] + digits[2]) {
  //     case 1:

  //   }
  // }
}
