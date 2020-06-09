function set(){
    let elements = document.getElementsByName('cssProperty');
    
    for( let i = 0; i < elements.length;i++)
    {
        let cssProperty = elements[i].getAttribute('id');
        let cssValue = elements[i].value;
    
        let div = document.getElementById('modify');
        div.style[cssProperty] = cssValue;

        let p = document.getElementById('text');
        p.style[cssProperty]=cssValue;
        
    }
}

document.getElementById('set').addEventListener('click',set);