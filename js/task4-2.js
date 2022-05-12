formRef.addEventListener('submit', e => {
  // скидаю налаштування, щоб не оновлювалася сторінка при натисканні на submit
  e.preventDefault();

  // отримую значення з input
  const [
    person,
    mother,
    grandmotherM,
    grandfatherM,
    motherGMM,
    fatherGMM,
    motherGFM,
    fatherGFM,
    father,
    grandmotherF,
    grandfatherF,
    motherGMF,
    fatherGMF,
    motherGFF,
    fatherGFF,
  ] = e.currentTarget.elements;

  // записую значення у відповідне місце
  root = new Node(person.value);

  root.left = new Node(mother.value);
  root.left.left = new Node(grandmotherM.value);
  root.left.right = new Node(grandfatherM.value);

  root.left.left.left = new Node(motherGMM.value);
  root.left.left.right = new Node(fatherGMM.value);
  root.left.right.left = new Node(motherGFM.value);
  root.left.right.right = new Node(fatherGFM.value);

  root.right = new Node(father.value);
  root.right.left = new Node(grandmotherF.value);
  root.right.right = new Node(grandfatherF.value);

  root.right.left.left = new Node(motherGMF.value);
  root.right.left.right = new Node(fatherGMF.value);
  root.right.right.left = new Node(motherGFF.value);
  root.right.right.right = new Node(fatherGFF.value);

  // викликаю функцію утворення залежності
  familyTree(root);

  // виклик функції відмалювання родового дерева
  renderMarkup(e.currentTarget.elements);
  // виклик функції пошуку бабусь по маминій лінії
  outputGrandmothers();
});
