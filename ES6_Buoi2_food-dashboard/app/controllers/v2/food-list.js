class FoodList{
    constructor(){
        this.arrayFood = [];
    }
    add(_food){
        // ES5
        // this.arrayFood.push(_food);

        //ES6
        this.arrayFood = [...this.arrayFood, _food];
    }
    delete(_id){
        this.arrayFood = this.arrayFood.filter((_food) => {
            return _food.id !== _id;
        });
    }
    update(){

    }

}