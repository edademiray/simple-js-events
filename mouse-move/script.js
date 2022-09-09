

function moved(e) {

    document.querySelector('div.x-info p span').innerHTML = e.clientX;
  
    document.querySelector('div.y-info p span').innerHTML = e.clientY;
    
    document.querySelector('div.x-i p span').innerHTML = e.x;
    
    document.querySelector('div.y-i p span').innerHTML = e.y;
    
    document.querySelector('div.pageX p span').innerHTML = e.pageX;
    
    document.querySelector('div.pageY p span').innerHTML = e.pageY;
  

}


function reset(e){

    document.querySelector('div.x-info p span').innerHTML = '0';
  
    document.querySelector('div.y-info p span').innerHTML = '0';
    
    document.querySelector('div.x-i p span').innerHTML = '0';
    
    document.querySelector('div.y-i p span').innerHTML = '0';
    
    document.querySelector('div.pageX p span').innerHTML = '0';
    
    document.querySelector('div.pageY p span').innerHTML = '0';
  


}
window.addEventListener('mousemove',moved)
window.addEventListener('click',reset)