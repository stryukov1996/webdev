$(document).ready(function(){
    $('.burger-open').click(function(){
        $(this).addClass('d-none');
        $(this).siblings('.burger-close').removeClass('d-none');
        $('.burger-menu').addClass('open');
    });
    $('.burger-close').click(function(){
        $(this).addClass('d-none');
        $(this).siblings('.burger-open').removeClass('d-none');
        $('.burger-menu').removeClass('open');
    });
    $('.burger-menu ul li a').click(function(){
        $('.burger-open').removeClass('d-none');
        $('.burger-close').addClass('d-none');
        $('.burger-menu').removeClass('open');
    });
});

// Планвые якорные ссылки
document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
  
        let href = this.getAttribute('href').substring(1);
  
        const scrollTarget = document.getElementById(href);
  
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
  
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
  });