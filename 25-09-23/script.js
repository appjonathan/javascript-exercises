window.addEventListener('DOMContentLoaded', function() {
    let navigation = document.getElementById('navigation');
    
    let menuItems = [
      { label: 'Hauptseite', url: 'index.html' },
      { label: 'Produkt', url: 'produkt.html' },
      { label: 'Über uns', url: 'ueber-uns.html' },
      { label: 'Datenschutz', url: 'datenschutz.html' },
      { label: 'AGB', url: 'agb.html' }
    ];
    
    let ul = document.createElement('ul');
    
    menuItems.forEach(function(item) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.label;
      li.appendChild(a);
      ul.appendChild(li);
    });
    
    navigation.appendChild(ul);
  });