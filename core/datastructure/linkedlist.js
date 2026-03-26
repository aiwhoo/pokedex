class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    addFront(value){
        this.head = new Node(value, this.head);
        this.length++;
    }
    addBack(value){
        let newNode = new Node(value, null);
        if(this.head == null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }
    print(){
        if(this.head == null){
            console.log("All done")
        }else{
            let current = this.head;
            while(current.next != null){
                console.log(current.value);
                console.log("v")
                current = current.next;
            }
            console.log(current.value);
            console.log("all done v")
        }
    }
    printRecursive(current = this.head){
        if(current == null){
            console.log("Recursion Done");
        }else{
            console.log(current.value);
            this.printRecursive(current.next);
        }
    }
    addInOrder(value){
        if(this.head == null){
            this.head = new Node(value, null);
        }else if(this.head.value.pokedexID > value.pokedexID){
            this.head = new Node(value, this.head);
        }else{
            let current = this.head;
            while(current.next != null && current.next.value.pokedexID < value.pokedexID){
                current = current.next;
            }
            current.next = new Node(value, current.next);
        }
    }
}

class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

export default LinkedList;