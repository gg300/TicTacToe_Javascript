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
function primary_diag(ok){
    ok=true;
    for(let i=1;i<3;i++){
        for(let j=1;j<3;j++){
            if(i==j){
                if(positions[i][j]!=positions[i+1][j+1]){
                    ok=false;
                }
        }
    }}
    return ok;
}
function sec_diag(ok){
    ok=true;
    for(let i=1;i<=2;i++){
        for(let j=2;j<=3;j++){
            if(i+j==4){
                if(positions[i][j]!=positions[i+1][j-1]){
                    ok=false;
                }
        }
    }}
    return ok;
}
function Win(){
    let ok = true;
    ok = primary_diag(ok);
        if(ok==true)
            {document.getElementById("body").remove();}
        else
        {
            ok = sec_diag(ok);
                if(ok==true)
                    document.getElementById("body").remove();
        }
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
                Win();
        }
        };
        const bodi = document.getElementById("cont");
        bodi.appendChild(ele);
    }
}
