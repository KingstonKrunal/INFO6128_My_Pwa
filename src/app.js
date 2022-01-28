window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  document.getElementById('title').value = parsedUrl.searchParams.get('title');
document.getElementById('text').value = parsedUrl.searchParams.get('text');
document.getElementById('url').value = parsedUrl.searchParams.get('url');
});
