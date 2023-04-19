document.querySelector('.submit').addEventListener('click', e => {
 const input = document.querySelector('input')
 const p = document.querySelector('.alert')
 p.textContent = /([0-9]{3}-){2}[0-9]{4}/g.test(input.value)?"val": 'inval'
})
