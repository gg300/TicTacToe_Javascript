function create_table(){
    const button = document.getElementById("Start");
    button.remove();
    for(let i=1;i<=9;i++){
        const ele = document.createElement("div"+i);
        ele.innerHTML= "Hello world";
        ele.style.background = "green";
        const bodi = document.getElementById("cont");
        bodi.appendChild(ele);
    }

}