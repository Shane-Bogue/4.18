checkNumber = () => document.querySelector('.alert').textContent = /([0-9]{3}-){2}[0-9]{4}/g.test(document.querySelector('input').value)?'val':'inval';


