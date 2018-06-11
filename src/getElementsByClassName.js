// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  var sameClassName = [];
  function searchNode(node){
    if(node.classList && nodeList.contains(className)){
      sameClassName.push(node);
    }
    node.childNodes.forEach(elem => searchNodes(elem));
  }
  searchNodes(document.body);
  return sameClassName;
};