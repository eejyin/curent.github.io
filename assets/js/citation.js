document.addEventListener('DOMContentLoaded', function() {
    const citationElements = document.querySelectorAll('[data-doi]');
  
    citationElements.forEach(element => {
      const doi = element.getAttribute('data-doi');
  
      Cite.async(doi).then(cite => {
        element.innerHTML = cite.format('bibliography', {
          format: 'html',
          template: 'ieee',
          lang: 'en-US'
        });
      }).catch(error => {
        console.error('Error fetching citation:', error);
      });
    });
  });
  