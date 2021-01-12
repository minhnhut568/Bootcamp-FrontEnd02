export class Food {
    constructor(_id, _name, _type, _price, _disc, _status, _img, _discr) {
        this.id = _id;
        this.name = _name;
        this.type = _type;
        this.price = _price;
        this.disc = _disc;
        this.status = _status;
        this.img = _img;
        this.discr = _discr;
    }
    cost() {
        return (this.price - (this.price * this.disc) / 100);
    }
    
}