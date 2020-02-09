var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.add = function(intNum){
    if(this.root === null){
      let newNode = new Node(intNum);
      this.root = newNode;
      return;
    }
    let found = false;
    let currentNode = this.root;
    let parentLeft;
    let parentRight;
    while (!found){
      
      if (currentNode === null) {
        let newNode = new Node(intNum);
        if (parentLeft){
          parentLeft.left = newNode;
        }
        else {
          parentRight.right = newNode;
        }
        // console.log(parentLeft,parentRight)
        found = true;
        return;
      }
      else if(currentNode.value === intNum){
        found = true;
        return null;
      }

      else if (currentNode.value > intNum){
        parentLeft = currentNode;
        parentRight = undefined;
        currentNode = currentNode.left;
      }
      else if (currentNode.value < intNum){
        parentRight = currentNode;
        parentLeft = undefined;
        currentNode = currentNode.right;
      }
    }

  }
  // change code above this line
}
let tree = new BinarySearchTree();
tree.add(5);
tree.add(3);
tree.add(4);
tree.add(7);
console.log(tree.root)