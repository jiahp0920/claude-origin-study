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

document.getElementById('search').addEventListener('input', function(e) {
  var q = e.target.value.toLowerCase();
  document.querySelectorAll('.link').forEach(function(el) {
    var text = el.textContent.toLowerCase();
    var kw = (el.dataset.kw || '').toLowerCase();
    el.classList.toggle('hidden', q && !text.includes(q) && !kw.includes(q));
  });
  document.querySelectorAll('.section-title, .divider').forEach(function(el) {
    el.classList.toggle('hidden', !!q);
  });
});
