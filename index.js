let x = false;
let l = 1000;
startFunction = () =>{
    document.getElementById('numbers').innerHTML = l;
}
clickHeart = () =>{
    x = !x
    if(x){
        document.getElementById('like').src = "5.png";
        l++;
        document.getElementById('numbers').innerHTML = l;
    }
    else{
         document.getElementById('like').src = "1.png";
         l--;
         document.getElementById('numbers').innerHTML = l;
    }
}