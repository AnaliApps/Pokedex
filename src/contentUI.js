export default function contentUI(){
    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('class','content');
    let errorDiv = document.createElement('div');
    errorDiv.setAttribute('id','error-div')
    errorDiv.innerHTML = `
        <h1>No pokemon found</h1>
    `
    contentDiv.appendChild(errorDiv)
    return contentDiv
}


