

let countEl = document.getElementById("count-el");




let count = 0 ;

function increment(){
    count += 1
    
    countEl.innerText = count
    // document.getElementById("count-el").innerText += 5;


    console.log(count);
}


function save(){
    alert(count)
}

save()


