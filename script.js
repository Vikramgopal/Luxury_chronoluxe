//////////////////////////////////////
// Scrolling Action
/////////////////////////////////////

document.querySelector('.top-nav-list').addEventListener('click', function (e) {
    e.preventDefault();
  
    // Matching strategy
    if (e.target.classList.contains('nav-list-link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }});
