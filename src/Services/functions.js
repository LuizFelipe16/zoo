export function elementRemoveOrAddDisplayNone(id) {
  const element = document.getElementById(id);

  if (element.classList.contains('display-none')) {
    return element.classList.remove('display-none');
  } else {
    return element.classList.add('display-none');
  }
}