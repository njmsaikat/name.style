function set(){
    let elements = document.getElementsByName('cssProperty');
    
    let div = document.getElementById('modify');
    div.style.background = elements[0].value;
    
    for( let i = 1; i < elements.length;i++)
    {
        let cssProperty = elements[i].getAttribute('id');
        let cssValue = elements[i].value;
    
        // let div = document.getElementById('modify');
        // div.style[cssProperty] = cssValue;

        let p = document.getElementById('text');
        p.style[cssProperty]=cssValue;
        
    }
}

document.getElementById('set').addEventListener('click',set);