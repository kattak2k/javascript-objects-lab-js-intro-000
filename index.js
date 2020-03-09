  var obj = { prop: 1 }

  function updateObjectWithKeyAndValue(obj, key, val){
    var newObj = object.assign({}, obj)
     newObj[`${key}`] = val
     return obj

  }
