let positions = ["0","1","2","3","4","5","6","7","8","9"]
let x_o = ""
let k = 0;
function create_table(){
    const button = document.getElementById("Start");
    button.remove();
    for(let i=1;i<=9;i++){
        const ele = document.createElement("div");
        ele.innerHTML= "";
        ele.style.background = "green";
        ele.className = "elem";
        ele.id=""+i;
        ele.onclick = function(){
            if(ele.innerHTML == ""){
                x_o="O";
            if(k%2==0){
                x_o = "X";
            }
            k+=1;
            ele.innerHTML = x_o;
            positions[Number(ele.id)] = x_o;
            console.log(positions);
        }
        };
        const bodi = document.getElementById("cont");
        bodi.appendChild(ele);
    }
}
