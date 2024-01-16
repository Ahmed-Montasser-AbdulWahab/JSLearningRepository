"use strict";

let circle1 = {
    radius: 100,
    center: { 
        x: 100,
        y: 100
    }};
let circle2 = {
    radius: 100,
    center: { 
        x: 100,
        y: 100
    }};

function DeepComparison(obj1 , obj2){

    if (Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }

    for (let key in obj1){

        if(!(key in obj2))
            return false;
        
        if(typeof obj1[key] === "object"){ 

            if(!DeepComparison(obj1[key],obj2[key]))
               return false;
        }
        
        else if(obj1[key] !== obj2[key]){ 

            return false
        }

    }

    return true;
};

function DeepCopying(sourceObj){

    let targetObj = {};
    for (let k in sourceObj){
        if(typeof sourceObj[k] === "object"){
           targetObj[k] = DeepCopying(sourceObj[k]);
        } else {
            targetObj[k] = sourceObj[k]
        }
    }

    return targetObj;
}

console.log(DeepComparison(circle1, circle2)); //Testing DeepComparison

let circle3 = DeepCopying(circle1); //Do DeepCopying

console.log(DeepComparison(circle1, circle3)); //Testing DeepCopying and DeepComparison