var object = { key: "value"}

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = object.key;
  delete newObject
  return newObject
}
