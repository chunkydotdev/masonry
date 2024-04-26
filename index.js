const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const descriptions = [
  { title: 'Cool balloons', description },
  { title: 'Happy face', description },
  { title: 'Party on the block', description },
  { title: 'Cool landscape', description },
  { title: 'Yellow flowers', description },
  { title: 'Misty mountains', description },
  { title: 'White flowers', description },
  { title: 'Sunny landscape', description },
  { title: 'Balloons out flying', description },
  { title: 'Chocolate chip cookies', description },
  { title: 'Twisty road', description },
  { title: 'White and red flowers', description }
]

function showDescription (index) {
  document
    .getElementsByClassName('image-description')
    .item(0)
    .classList.remove('hide')

  document.getElementsByClassName('masonry').item(0).classList.add('active')
  document.getElementById('title').textContent = descriptions[index].title
  document.getElementById('description').textContent =
    descriptions[index].description
}

function hideDescription () {
  document
    .getElementsByClassName('image-description')
    .item(0)
    .classList.add('hide')

  document.getElementsByClassName('masonry').item(0).classList.remove('active')
}
