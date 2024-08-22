let positions = ["0","1","2","3","4","5","6","7","8","9"]
let k = 0;
function create_table(){
    const button = document.getElementById("Start");
    button.remove();
    for(let i=1;i<=9;i++){
        const ele = document.createElement("div");
        ele.innerHTML= "Hello world";
        ele.style.background = "green";
        ele.className = "elem";
        ele.id=""+i;
        ele.onclick = function(){
            if(k%2==0){
                ele.innerHTML = "X";
                k+=1;
            }
            else{
                ele.innerHTML = "O";
                k+=1;
            }
        };
        const bodi = document.getElementById("cont");
        bodi.appendChild(ele);
    }
}
