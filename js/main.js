const img = document.querySelector('.img__1'),
    img12 = document.querySelector('.img__1-2'),
    img2 = document.querySelector('.img__2'),
    img22 = document.querySelector('.img__2-2'),
    img3 = document.querySelector('.img__3'),
    img32 = document.querySelector('.img__3-2');

let i = 0;
let x = 0;
window.addEventListener('wheel', function (e) {
    if (e.deltaY == 100) {
        if (x < 5) {
            i += 40;
            console.log(x)
            img.style.transform = 'translateY( ' + i + '%)';
            img12.style.transform = 'translateY( ' + i + '%)';
            img2.style.transform = 'translateY( -' + i + '%)';

            img22.style.transform = 'translateY( -' + i + '%)';
            img3.style.transform = 'translateY( ' + i + '%)';
            img32.style.transform = 'translateY( ' + i + '%)';
            x++;
        }
    } else {
        if (x > 0) {
            console.log(x)
            i -= 40;
            img.style.transform = 'translateY( ' + i + '%)';
            img12.style.transform = 'translateY( ' + i + '%)';
            img2.style.transform = 'translateY( -' + i + '%)';
            img22.style.transform = 'translateY( -' + i + '%)';
            img3.style.transform = 'translateY( ' + i + '%)';
            img32.style.transform = 'translateY( ' + i + '%)';
            x--;
        }
    }
})

window.addEventListener('touchmove', function (e) {
    if (e.pageY == 100) {
        if (x < 4) {
            i += 10;
            img.style.transform = 'translateY( -' + i + '%)';
            img12.style.transform = 'translateY( -' + i + '%)';
            img2.style.transform = 'translateY( -' + i + '%)';

            img22.style.transform = 'translateY( -' + i + '%)';
            img3.style.transform = 'translateY( -' + i + '%)';
            img32.style.transform = 'translateY( -' + i + '%)';
            x++;
        }
    } else {
        if (x > 0) {
            i -= 10;
            img.style.transform = 'translateY( -' + i + '%)';
            img12.style.transform = 'translateY( -' + i + '%)';
            img2.style.transform = 'translateY( -' + i + '%)';
            img22.style.transform = 'translateY( -' + i + '%)';
            img3.style.transform = 'translateY( -' + i + '%)';
            img32.style.transform = 'translateY( -' + i + '%)';
            x--;
        }
    }


})