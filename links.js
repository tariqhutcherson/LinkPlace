function switchImg() {
    const slides = document.querySelectorAll('.slide');
    
    const activeSlide = document.querySelector('.slide.active');
    
    activeSlide.classList.remove('active');
    
    const nextSlide = activeSlide.nextElementSibling || slides[0];
    
    nextSlide.classList.add('active');
}