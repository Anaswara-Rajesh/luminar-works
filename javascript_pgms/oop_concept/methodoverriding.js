class parent {
    Phone() {
        console.log("samsung");
    }
}
class child1 extends parent {
    phone() {
        super.phone()
        console.log("iphone");
    }
}
var child = new child1()
child.phone()

//3.14*r*r*h
//l*b*h
//3.14*r*r

class rectangle {
    area(...args) {
        console.log("area rectangle", args[0] * args[1]);

    }
}
class shape extends rectangle {
    area(...args) {

        super.area(args[0], args[1])
        console.log("shape area", args[2] * args[2]);
    }
}
var shape = new shape()
shape.area(10, 10, 20)

//document object model
//obj,arrays