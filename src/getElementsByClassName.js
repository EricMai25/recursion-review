// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var array = [];

  var domBody = document.getElementsByTagName('body');

  // if(domBody.length === 0) {

  // } else {
    
  // }
  var run = function(element) {
    
    if (element[0].classList.length > 0) {
      for (var j = 0; j < element[0].classList.length; j++) {
        if (element[0].classList[j] === className) {
          array.push(element[0]);
        }
      }


    }
    if (element[0].children.length > 0) {
      for (i = 0; i < element[0].children.length; i++) {
        run(element[0].children[i].children);
      }
    }
    return array; 

   
  




  // input: className 

  // iterating thru the document body 
  // 

  // output: all elements with className 
  };
  
  run(domBody);

};

