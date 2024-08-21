function create_table(){
    const button = document.getElementById("Start");
    button.remove();
    for(let i=1;i<=9;i++){
        const ele = document.createElement("div");
        ele.innerHTML= "Hello world";
        ele.style.background = "green";
        ele.className = "elem";
        ele.id="div"+i;
        const bodi = document.getElementById("cont");
        bodi.appendChild(ele);
    }

}