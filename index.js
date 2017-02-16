function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  var nodes=document.querySelectorAll('.ranked-list')
  for(var i in nodes){
    var children=nodes[i].children
  for(var j in children){
    if (children[j]){
      children[j].innerHTML=parseInt(children[j].innerHTML)+n
    }
  }
  }
}
function deepestChild(){
  let current=document.querySelector('div#grand-node')
  let next=current.children[0]
  while(next){
    current=next
    next=next.children[0]
  }
  return current
}
