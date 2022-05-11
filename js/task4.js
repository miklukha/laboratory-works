const formRef = document.querySelector('form');
const wrapperRef = document.querySelector('.form-wrapper');
const ulRef = document.querySelector('ul');

let root;

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function familyTree(root) {
  let current;
  let previous;

  if (root === null) {
    return;
  }

  current = root;

  while (current !== null) {
    if (current.left === null) {
      current = current.right;
    } else {
      previous = current.left;

      while (previous.right !== null && previous.right !== current) {
        previous = previous.right;
      }

      if (previous.right === null) {
        previous.right = current;
        current = current.left;
      } else {
        previous.right === null;
        current = current.right;
      }
    }
  }
}

formRef.addEventListener('submit', e => {
  e.preventDefault();

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

  familyTree(root);

  renderMarkup(e.currentTarget.elements);
  outputGrandmothers();
});

function outputGrandmothers() {
  const { left, right } = root.left;

  renderUl(left.data, left.left.data, right.left.data);
}

function renderUl(grandmotherM, motherGMM, motherGFM) {
  const markup = `<li class="works-item">Бабуся (мамина лінія) - ${grandmotherM}</li><li class="works-item">Прабабуся (бабуся) -  ${motherGMM}</li><li class="works-item">Прабабуся (дідусь) - ${motherGFM}</li>`;

  ulRef.innerHTML = markup;
}

function renderMarkup([
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
]) {
  const markup = `<div id="wrapper">
        <span class="label">${person.value}</span>
        <div class="branch lv1">
          <div class="entry">
            <span class="label">${mother.value}</span>
            <div class="branch lv2">
              <div class="entry">
                <span class="label">${grandmotherM.value}</span>
                <div class="branch lv3">
                  <div class="entry">
                    <span class="label">${motherGMM.value}</span>
                  </div>
                  <div class="entry">
                    <span class="label">${fatherGMM.value}</span>
                  </div>
                </div>
              </div>
              <div class="entry">
                <span class="label">${grandfatherM.value}</span>
                <div class="branch lv3">
                  <div class="entry">
                    <span class="label">${motherGFM.value}</span>
                  </div>
                  <div class="entry">
                    <span class="label">${fatherGFM.value}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="entry">
            <span class="label">${father.value}</span>
            <div class="branch lv2">
              <div class="entry">
                <span class="label">${grandmotherF.value}</span>
                <div class="branch lv3">
                  <div class="entry">
                    <span class="label">${motherGMF.value}</span>
                  </div>
                  <div class="entry">
                    <span class="label">${fatherGMF.value}</span>
                  </div>
                </div>
              </div>
              <div class="entry">
                <span class="label">${grandfatherF.value}</span>
                <div class="branch lv3">
                  <div class="entry">
                    <span class="label">${motherGFF.value}</span>
                  </div>
                  <div class="entry">
                    <span class="label">${fatherGFF.value}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

  wrapperRef.innerHTML = markup;
}
