import Operation from "@/model/Operation";


let a = new Operation([{insert: 'aa'}, {move: 2}, {delete: 2}]);

console.log(a.apply('hello'));

