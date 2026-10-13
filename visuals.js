// The table remains readable without scripting; scripting names keyboard-scroll regions.
function labelScrollableTables() {
  document.querySelectorAll('main .quarto-float-tbl > div[aria-describedby]').forEach(region => {
    const overflowing = region.scrollWidth > region.clientWidth + 1;
    let hint = region.parentElement.querySelector('.table-scroll-hint');
    if (overflowing) {
      region.setAttribute('role', 'region');
      region.setAttribute('aria-labelledby', region.getAttribute('aria-describedby'));
      region.setAttribute('tabindex', '0');
      if (!hint) {
        hint = document.createElement('p');
        hint.className = 'table-scroll-hint';
        hint.textContent = 'Scroll across to compare columns; keyboard users can focus the table and use arrow keys.';
        region.before(hint);
      }
    } else {
      region.removeAttribute('role');
      region.removeAttribute('aria-labelledby');
      region.removeAttribute('tabindex');
      if (hint) hint.remove();
    }
  });
}
document.addEventListener('DOMContentLoaded', labelScrollableTables);
window.addEventListener('resize', labelScrollableTables);
