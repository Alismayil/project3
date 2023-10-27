let open=document.querySelector('.btn')
let send=document.querySelector('#send')
let close=document.querySelector('#close')
let modal=document.querySelector('form')
let body=document.querySelector('body')
let table=document.querySelector('table')
// Inputs
const user=document.getElementById('user')
const imdb=document.getElementById('imdb')
const kategoria=document.getElementById('kategoria')
const rejissor=document.getElementById('rejissor')
const img=document.getElementById('img')


body.append(table)

// tr.append(trash)

open.addEventListener('click',()=>{
    modal.style.display='block'
})

send.addEventListener('click',(e)=>{
    e.preventDefault()
    const tr=document.createElement('tr')
    const imageTd=document.createElement('td')
    const userTd=document.createElement('td')
    const imdbTd=document.createElement('td')
    const kategoriTd=document.createElement('td')
    const rejissorTd=document.createElement('td')
    const trashTd=document.createElement('td')
    const trashbtnTd=document.createElement('button')
    const editbtnTd=document.createElement('button')
    const picture=document.createElement('img')

    picture.setAttribute('src', img.value)
    userTd.textContent=user.value
    imdbTd.textContent=imdb.value
    kategoriTd.textContent=kategoria.value
    rejissorTd.textContent=rejissor.value

    trashTd.append(trashbtnTd,editbtnTd)
    imageTd.append(picture)
    tr.append(imageTd,userTd,imdbTd,kategoriTd,rejissorTd,trashTd)
    table.append(tr)

    trashbtnTd.innerHTML=`<i class="fa-solid fa-trash"></i>`
    editbtnTd.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`

    trashbtnTd.addEventListener('click',()=>{
        tr.remove()
    })
    editbtnTd.addEventListener('click',(e)=>{
        e.preventDefault()

        // Getting Data back to inputs
        user.value = userTd.textContent
        imdb.value = imdbTd.textContent
        kategoria.value=kategoriTd.textContent
    rejissor.value=rejissorTd.textContent

        send.addEventListener('click', (e)=>{
            e.preventDefault()

            tr.remove()
        })

        
    })   
    

    // modal.style.display='none'
    user.value=''
    imdb.value=''
    kategoria.value=''
    rejissor.value=''
    img.value=''

})
close.addEventListener('click',(e)=>{
    e.preventDefault()
    modal.style.display='none'
})
