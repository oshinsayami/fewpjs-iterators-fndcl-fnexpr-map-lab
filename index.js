const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased =  (input) => {
  return tutorials.map((t) => {
    let str = t.split(" ")
    for (let i = 0; i<str.length; i++){
      // debugger
      str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
    } 
    let fulStr = str.join(" ");
    return fulStr;

  //   return t[0].toUpperCase() + t.substring(1);
  // }).join(" ");
  })
}