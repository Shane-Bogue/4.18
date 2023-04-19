let total = 0;
function Add() {
    total = 0
    document.querySelectorAll('input').forEach(x=> {
        total += Number(x.value)
    })
    document.querySelector('.output').textContent = total
}