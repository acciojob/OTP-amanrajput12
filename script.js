//your JS code here. If required.
const inputs = document.querySelectorAll(".code")

inputs.forEach((data,i)=>{
    data.addEventListener("input",(e)=>{
        e.preventDefault()
        const value =e.target.value;
        if(value){
            if(i<inputs.length-1){
                inputs[i+1].focus();
            }
        }
    });

    data.addEventListener("keydown",(e)=>{
        if(e.key=='Backspace'){
            e.preventDefault()
        
            // console.log("keydown click",i)
           if(i>=0){
            e.target.value=""
            inputs[i-1].focus()
           }
        }
    })
})


