document.addEventListener("DOMContentLoaded", () => {
  // your code here
 const formsub=document.querySelector('form');
  formsub.addEventListener('submit',(e)=>{
e.preventDefault();
    const text = document.getElementById('new-task-description')
    console.log(text.value)
    let li=document.createElement('li');
    li.innerHTML = `${text.value}`;
    const ul = document.getElementById('tasks')
    ul.appendChild(li)
    const btn =document.createElement('button')
    btn.addEventListener('click',handleDelete)
    btn.textContent='x'
    li.appendChild(btn)
  })
  function handleDelete(e){
    e.target.parentNode.remove()
  }
});

