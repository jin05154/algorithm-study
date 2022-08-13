let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const target = input[0].split(' ')[1]
let list = input[1].split(' ').map(a=>+a).sort((a,b)=>a-b)


const solution = (list, target) => {
    let start = 0;
    let end = list.length-1;
    let result = 0;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        let sum = 0;
        for(let num of list){
            if(num-mid>0) sum += num-mid;
        }

        if(sum >= target){
            if(mid > result) result = mid;
            start = mid + 1; 
        }else {
            end = mid -1;
        }

    }

    return result

}

console.log(solution(list,target))
