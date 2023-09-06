const miracles = document.querySelectorAll('.each_miracle');
const next_button = document.getElementById("next_button");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        // if(entry.isIntersecting) observer.unobserve(entry.target);
    }), {
        threshold: 0.8,
    }
});
  

miracles.forEach(each_miracle => {
    observer.observe(each_miracle);
});

next_button.onclick = function(){
    window.location.href = 'second_page.html';
}