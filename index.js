function increment1(add){
    document.getElementById("Score1").innerHTML = parseInt(document.getElementById("Score1").innerHTML) +  parseInt(add)
    highlight();
}


function increment2(add){
    document.getElementById("Score2").innerHTML = parseInt(document.getElementById("Score2").innerHTML) +  parseInt(add)
    highlight();
}

function reset(){
    document.getElementById("Score1").innerHTML = 0;
    document.getElementById("Score2").innerHTML = 0;
    document.getElementById("Score1").classList.remove("winner");
    document.getElementById("Score2").classList.remove("winner");
}

function highlight(){
    let s1 = parseInt(document.getElementById("Score1").innerHTML);
    let s2 = parseInt(document.getElementById("Score2").innerHTML);

    if(s1 > s2){
        document.getElementById("Score1").classList.add("winner");
        document.getElementById("Score2").classList.remove("winner");
    }
    else if(s1 < s2){
        document.getElementById("Score2").classList.add("winner");
        document.getElementById("Score1").classList.remove("winner");
    }
    else{
        document.getElementById("Score1").classList.remove("winner");
        document.getElementById("Score2").classList.remove("winner");
    }
}