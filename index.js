  var object = { prop: 1 }

  function updateObjectWithKeyAndValue(object, key, value){
    var newObj = Object.assign({}, object)
     newObj[`${key}`] = val
     return object
  }
