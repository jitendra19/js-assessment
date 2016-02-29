exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var a = 0;
    for(var i = 0 ; i<arr.length; i++)
    {
    a=a+arr[i];
    }
    return a;
  },

  remove : function(arr, item) {
    var a = arr.indexOf(item);
    while(a>-1){
      arr.splice(a, 1);
      a = arr.indexOf(item)
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var a = arr.indexOf(item);
    while(a>-1){
      arr.splice(a, 1);
      a = arr.indexOf(item)
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice( 0, 0, item);
    return arr;
  },

  curtail : function(arr) {
    var c = arr.splice(1);
    return c;
  },

  concat : function(arr1, arr2) {
    var c = arr1.concat(arr2);
    return c;
  },

  insert : function(arr, item, index) {
    arr.splice( index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count=0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == item){
            count++;
        }
    }
    return count;
  },

  duplicates : function(arr) {
    var arr1 = [];
    for(var i = 0; i<arr.length;i++){
      if(arraysAnswers.count(arr, arr[i])>1){
        arr1.push(arr[i]);
       arraysAnswers.remove(arr, arr[i]); 
      }
    }
    return arr1;
  },

  square : function(arr) {
    for(var i = 0; i<arr.length;i++){
      arr[i] = arr[i]*arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var indexArr = [];
    for(var i = 0; i<arr.length;i++){
      if(arr[i]===target){
        indexArr.push(i);
      }
    }
    //console.log(indexArr);
    return indexArr;
  }
};
