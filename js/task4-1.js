// функція пошуку бабусь по маминій лінії
function outputGrandmothers() {
  const { left, right } = root.left;

  renderUl(left.data, left.left.data, right.left.data);
}

// функція відмалювання списка бабусь по маминій лінії
function renderUl(grandmotherM, motherGMM, motherGFM) {
  const markup = `<li class="works-item">Бабуся (мамина лінія) - ${grandmotherM}</li><li class="works-item">Прабабуся (бабуся) -  ${motherGMM}</li><li class="works-item">Прабабуся (дідусь) - ${motherGFM}</li>`;

  ulRef.innerHTML = markup;
}

// функція відмалювання родового дерева
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
