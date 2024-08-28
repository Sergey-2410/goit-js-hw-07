const listItem = document.querySelectorAll('.item');
console.log(`Number of categories:`, listItem.length);
listItem.forEach(element => {
  const category = element.querySelector('h2').textContent;
  console.log('Categoryes:', category);

  const elem = element.querySelectorAll('ul li').length;
  console.log('Elements:', elem);
});
