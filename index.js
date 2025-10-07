const quest = document.getElementsByClassName('quest');
const textArea = document.getElementsByClassName('text-area');
const tog = document.getElementsByClassName('tog')
let d = false
function displayText(element) {
  const textArea = element.nextElementSibling;
  const icon = element.querySelector('.tog');
  const isHidden =textArea.classList.toggle('hidden');
  icon.innerText = isHidden ? '+': '-'
}
