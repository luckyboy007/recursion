// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



/*
  document.getElementsByClassName() returns an array-like object of all child elements which have all of the given class names. The entire document is searched, including the root node.
      For example, document.getElementsByClassName('main') will return an array of all elements that have the class name of 'main'. If the parameters were instead ('main red'), only elements that contain both 'main' and 'red' classes would show up.

  For this assignment, I have to use document.body, element.childNodes, and element.classList.

  document.body returns the <body> or <frameset> node of the current document, or null if no such element exists
  document.body is the element that contains the content for the document.

  element.childNodes will return the child elements of a selected node in the form of an Array.
    document.body.childNodes will return all the child elements of the body of the current document in the form of an array.

  element.classList returns a token list of the class attribute of the element.
    classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className. It contains the following methods:
      add - adds a class to an element's list of classes. If class already exists in the element's list of classes, it will not add the class again.

      remove - removes a class from an element's list of classes. If class does not exist in the element's list of classes, it will not throw an error or exception.

      toggle - toggles the existence of a class in an element's list of classes

      contains - checks if an element's list of classes contains a specific class

*/


var getElementsByClassName = function(className){
  // your code here
};
