const b = document.getElementById('color-1')
const r = document.getElementById('color-2')
const p = document.getElementById('color-3')
const n = document.getElementById('color-4')
b.addEventListener('click',()=>{
    const w = document.getElementById('watch')
    w.src = "black-watch.png"
})

r.addEventListener('click',()=>{
    const w = document.getElementById('watch')
    w.src = "red-watch.png"
})
p.addEventListener('click',()=>{
    const w = document.getElementById('watch')
    w.src = "purple-watch.png"
})
n.addEventListener('click',()=>{
    const w = document.getElementById('watch')
    w.src = "pink-watch.png"
})
