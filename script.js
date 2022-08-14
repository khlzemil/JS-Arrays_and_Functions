const arr = [2,4,6,8,0]

const popFunct = function (array, index){
    const popArr = [];
    for(let i = 0; i < array.length; i++){
        if(i === index){
            i++;
        }

        popArr[i] = array[i] 
    }

    if(index > array.length-1){
        console.log("There is not element with this index");
    }

    else if(index===array.length-1){
        popArr.pop();
    }

    return popArr;

}


const result = popFunct(arr, 5);
console.log(result);