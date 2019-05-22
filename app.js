var allElements = [...document.body.getElementsByTagName('*')];

function findAndReplace(){
    allElements.forEach(element =>{
        element.childNodes.forEach(child =>{
            if(child.nodeType === 3){
                replaceText(child);
            }
        });

    });
}

function replaceText (node) {
    let value = node.nodeValue;
    if (value.includes("Laura Lindahl") && value.includes("")) {
        value = value.replace(/Laura Lindahl/gi, 'Laura Langpat')
    }

    node.nodeValue = value;
}

window.onload = findAndReplace;
