window.onload= async ()=>
{
    let response='';
    const result=await fetch('https://jsonplaceholder.typicode.com/posts');
    const todos=await result.json();
    todos.map((todo)=>{
        response += `<div class="cards">
        <h5 id="title">${todo.title}</h5>
        <p id="postID">${todo.id}</p>
        <p id="postBody">${todo.body}</p>
        </div>`
        });
    document.getElementById('main').innerHTML=response;
}













