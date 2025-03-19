let input = document.querySelector("#input-box");
let ui = document.querySelector("#ui-list");

const addList = ()=>{
    if(input.value === ""){
        alert("Please write some things");
    }else{

        let li = document.createElement("li");
        li.innerHTML = input.value;
        ui.appendChild(li);
        input.value = "";
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
    }

    
};

input.addEventListener("keydown", (event)=>{
    
    if(event.key === "Enter"){
        addList();
    }
});

ui.addEventListener("click", (e)=>{
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);


