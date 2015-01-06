// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//JSON.stringify() converts a value to JSON.
/* It accepts a value which is then converted into string form.
If the value is an array, the brackets are made part of the string.
If the value is an object, the brackets are made part of the string with the key (but not the colon) being in quotation marks within the string
Spaces in arrays and objects are ignored.


  Properties of non-array objects are not guaranteed to be stringified in any particular order.
  Boolean, number, and string objects are converted to the corresponding primitive values, in accord with traditional conversion semantics.
  If 'undefined', a function, or a symbol is encountered during conversion, it is either omitted (when it is found in an object) or censored to 'null' (when it is found in an array)
  All symbol-keyed properties will be completely ignored, even when using the replacer function.


    Non-Array Objects: return stringified objects
      Undefined, functions, and symbols are omitted when found within objects.
      Keys are in quotes
    Booleans, Numbers, and Strings are converted to primitive values
    Arrays are returned as stringified arrays.


*/

var stringifyJSON = function(obj) {
  //Function to remove the last comma and trailing whitespace of a string. Used for check in objects.
  var removeLastComma = function(str){
    return str.replace(/,(\s+)?$/, '');
  };
  //Strings and null should be addressed here. Strings have quotes inside the string so I can't lump them together with booleans and numbers.
  if (_.isString(obj)){
    return '"' + obj + '"';
  }
  if (_.isNull(obj)){
    return 'null';
  }
  //Arrays get a temporary array that their stringified elements get pushed to, and then that temporary array is joined together and concatenated with the brackets that exist within the returned string.
  if (_.isArray(obj)){
    var tempArr = [];
    if (_.isEmpty(obj)){
      return '[]';
    } else {
      _.each(obj, function(elem){
        tempArr.push(stringifyJSON(elem));
      });
    }
    return '[' + tempArr.join(',') + ']';
  }
  //Objects get a temporary string to add their stringified daya to. Including a check for undefined values and function keys.
  if (_.isObject(obj)){
    if (Object.keys(obj).length){
      var tempStr = '';
      for (var k in obj){
        if (_.isUndefined(obj[k]) || _.isFunction(k)){
          return '{}';
        } else {
          tempStr += stringifyJSON(k) + ':' + stringifyJSON(obj[k]) + ',';
        }
      }
      return '{' + removeLastComma(tempStr) + '}';
    } else {
      return '{}';
    }
  }
  //Everything else = booleans, numbers
  else {
    return obj.toString();
  }
};