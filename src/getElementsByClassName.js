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

/*
  Thinking on how to implement this

  getElementsByClassName will accept a className as a parameter
  We'll have to get all the child nodes of the document by running document.body.childNodes
  
  Each index in the array may contain multiple classes. If they do, we should use recursion to call getElementsByClassName again on them until we're looking at just one element instead of another array

      If it's undefined, no childNodes exist?

  Then we can run element.classList.contains on each individual element to see if it contains the specific className. If it has it, we'll add it to our array. If not, skip over it.



  Traversing the DOM for this:

  1. document.body.childNodes returns all child elements in an array
  2. You can run each index through the .childNodes method to find further child elements
  3. For each node, you can run .classList to find a list of its classes.
  4. You can run classList.contains(className) to look for true/false
        If true, we'll want to add it to the resultArr
*/



var getElementsByClassName = function(className){
  //Let's create an array to store our results.
  var resultsArr = [];


  //Function to check each class to see if it contains the class name we are looking for
  var checkName = function(elem){
    if (elem.classList.contains(className)){
      resultsArr.push(elem);
    }
  };

  //Function iterates over each element in a collection to see if that collection's element is being recognized as a DOM element (confusing, I know). If it is, then checkName is run on it followed by recursion of checkNodes.
  var checkNodes = function(collection){
    _.each(collection, function(elem){
      if (_.isElement(elem)){
        checkName(elem);
        checkNodes(elem.childNodes);
      }
    });
  };

  //Haven't figured out a better solution here yet, but we first run checkName on document.body and then run checkNodes on document.body.childNodes. Initially this just ran checkNodes on document.body with a check to see if document.body was being run, but I thought that was too inelegant.
  
  checkName(document.body);
  checkNodes(document.body.childNodes);

  return resultsArr;

};