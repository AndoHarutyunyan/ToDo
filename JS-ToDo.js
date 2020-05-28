
const markitem=document.getElementsByClassName('mark')
const deleteItem=document.getElementsByClassName('delete')
const text=document.getElementById('text')
const list=document.getElementById('list')
const button=document.getElementById("button")
const elemList=document.getElementsByClassName('elemList');
const search=document.getElementById('search-input')
text.addEventListener('keydown',function (el) {
    if(el.keyCode===13){
        button.click()
    }
})
button.addEventListener('click',function () {
    let elem=document.createElement('LI')
    elem.classList.add('elemList')
    let div=document.createElement('div')
    div.classList.add('rightInput')
    div.innerHTML='<input type="button" value="X" class="delete">'
    div.innerHTML+='<input type="button" value="V" class="mark">'
    elem.appendChild(div)
    let toDoItem =document.createTextNode(text.value)

    if(text.value!==''&& unique(text.value)===true) {
        elem.appendChild(toDoItem)
        list.appendChild(elem)
        text.value = null
    }else{
        text.value=null
        alert("Please enter unique value ")
    }

    function unique(str){
        for(let i=0; i<elemList.length; i++){
            if(str===elemList[i].textContent){
                return false
            }
        }
        return true
    }
    deleteItem[deleteItem.length-1].addEventListener('click',function (e) {
        e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode)
    })
    markitem[markitem.length-1].addEventListener('click', function (e) {
        e.currentTarget.parentNode.parentNode.classList.toggle('marked')
    })
})

search.addEventListener('input',searchInput)
function searchInput(el){
    for(let i=0;i<elemList.length;i++) {
        if (elemList[i].textContent.includes(search.value)) {
            elemList[i].classList.remove('dis')
        }else{
            elemList[i].classList.add('dis')
        }
    }
}