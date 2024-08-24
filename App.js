let positions = [["0","0","0","0"],["0","1","2","3"],["0","4","5","6"],["0","7","8","9"]]
let x_o = ""
let k = 0;
function posit(i){
    let result = 0;
    result = (Math.trunc(i/3)+1) * 10 + i%3;
    if((i%3)==0)
        result = Math.trunc(i/3) * 10+3;
    return result;
}

function create_table(){
    const button = document.getElementById("Start");
    button.remove();
    for(let i=1;i<=9;i++){
        const ele = document.createElement("div");
        ele.innerHTML= "";
        ele.style.background = "green";
        ele.className = "elem";
        ele.id=""+posit(i);
        ele.onclick = function(){
            if(ele.innerHTML == ""){
                x_o="O";
            if(k%2==0){
                x_o = "X";
            }
            k+=1;
            ele.innerHTML = x_o;
            positions[Math.trunc(Number(ele.id)/10)][Number(ele.id)%10] = x_o;
            console.log(positions);
        }
        };
        const bodi = document.getElementById("cont");
        bodi.appendChild(ele);
    }
}
