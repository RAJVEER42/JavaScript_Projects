 let count = 0;


 // select value and btn.
 const  value  = document.querySelector('#value');
 const btns = document.querySelectorAll('.btn');
 //console.log(btns);

 btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')) {
            count--;
        } else if(styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;

        if(count > 0) {
            value.style.color = '#198730';
        } else if(count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'white';
        }
    })
 })

