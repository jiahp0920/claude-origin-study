function openPage(page) {
  chrome.tabs.create({ url: chrome.runtime.getURL(page) });
}

document.addEventListener('click', function(e) {
  var link = e.target.closest('.link');
  if (link && link.dataset.page) {
    e.preventDefault();
    openPage(link.dataset.page);
  }
});

document.getElementById('open-all').addEventListener('click', function() {
  openPage('index.html');
});

document.getElementById('search').addEventListener('input', function(e) {
  var q = e.target.value.toLowerCase().trim();
  var links = document.querySelectorAll('.link');
  var sections = document.querySelectorAll('[data-section]');

  if (!q) {
    links.forEach(function(l) { l.classList.remove('hidden'); });
    sections.forEach(function(s) { s.classList.remove('hidden'); });
    return;
  }

  sections.forEach(function(s) { s.classList.add('hidden'); });
  links.forEach(function(el) {
    var text = el.textContent.toLowerCase();
    var kw = (el.dataset.kw || '').toLowerCase();
    el.classList.toggle('hidden', !(text.includes(q) || kw.includes(q)));
  });
});
