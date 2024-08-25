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
function primary_diag(){
    for(let i=1;i<3;i++){
        for(let j=1;j<3;j++){
            if(i==j){
                if(positions[i][j]!=positions[i+1][j+1]){
                    return false;
                }
        }
    }}
    return true;
}
function sec_diag(){
    for(let i=1;i<=2;i++){
        for(let j=2;j<=3;j++){
            if(i+j==4){
                if(positions[i][j]!=positions[i+1][j-1]){
                    return false;
                }
        }
    }}
    return true;
}
function col_w(i){
        if((positions[i][1]!=positions[i][2]) || (positions[i][2]!=positions[i][3]))
            return false;
    return true;
}
function row_w(j){
    if((positions[1][j]!=positions[2][j]) || (positions[2][j]!=positions[3][j]))
        return false;
    return true;
}
function Win(i,j){
    if(primary_diag()==true)
        {document.getElementById("body").remove();}
    if(sec_diag()==true)
        {document.getElementById("body").remove();}
    if(row_w(j)==true)
        {document.getElementById("body").remove();}
    if(col_w(i)==true)
        {document.getElementById("body").remove();
            if(k%2!=0){
                const win = document.createElement("body");
                win.innerHTML = "Player 1 Win"
                document.getElementById("html").appendChild(win);
            }
            else{
                const win = document.createElement("body");
                win.innerHTML = "Player 2 Win"
                document.getElementById("html").appendChild(win);
            }

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
                Win(Math.trunc(Number(ele.id)/10,),Number(ele.id)%10)  ///////last pos to be added
        }
        };
        const bodi = document.getElementById("cont");
        bodi.appendChild(ele);
    }
}
