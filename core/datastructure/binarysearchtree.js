class BinarySearchTree{
    constructor(){
        this.root = null;
        this.size = 0;
    }
    add(value, current = this.root){
        let newNode = new BSTNode(value, null, null);
        if(this.root == null){
            this.root = newNode;
        }else{

            if(current.left == null && value.pokedexID < current.value.pokedexID ){
                current.left = newNode;
            }
            else if(current.right == null && value.pokedexID >= current.value.pokedexID ){
                current.right = newNode;
            }
            else if(current.right != null && value.pokedexID >= current.value.pokedexID ){
                this.add(value, current.right);
            }else{
                this.add(value, current.left)
            }
        }
    }

    print(current = this.root){
        if(current == null){
            console.log("no more nodes");
        }
        else{

            this.print(current.left);
            console.log(current.value);
            this.print(current.right);
        }
    }
}

class BSTNode {
    constructor(value, left, right){
        this.value = value;
        this.left = left;
        this.right = right
    }
}

export default BinarySearchTree;