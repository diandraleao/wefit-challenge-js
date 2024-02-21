
const menuComponent = () => {
  const btnGroup = () => {
    const $divBtnGroup = document.querySelector('.btn-group-vertical');
    $divBtnGroup.classList.remove('btn-group-vertical');
    $divBtnGroup.classList.add('btn-group-horizontal');
    $divBtnGroup.setAttribute('aria-label', 'Horizontal button group');
  }
  btnGroup();
}

const headerComponent = () => {
  const jumbotron = () => {
    const $boxJumbotron = document.querySelector('.jumbotron');
    $boxJumbotron.classList.add('text-right');
    $boxJumbotron.style.backgroundColor = 'var(--gray)';
    $boxJumbotron.style.color = 'var(--white)';

    
    const $btnJumbotron = document.querySelector('.jumbotron .btn');
    $btnJumbotron.classList.remove('btn-primary');
    $btnJumbotron.classList.add('btn-success');
  }
  jumbotron();
}

const cardComponent = () => {
  const button = () => {
    const $boxJumbotron = document.querySelector('.jumbotron');
    $boxJumbotron.classList.add('text-right');
    $boxJumbotron.style.backgroundColor = 'var(--gray)';
    $boxJumbotron.style.color = 'var(--white)';

    const $btnCard = document.querySelectorAll('.card .btn');

    $btnCard.forEach($btn => {
      $btn.addEventListener('mouseenter', event => {
        $btn.classList.remove('btn-primary');
        $btn.classList.add('btn-success');
      });
    });
    
    $btnCard.forEach($btn => {
      $btn.addEventListener('mouseleave', event => {
        $btn.classList.add('btn-primary');
        $btn.classList.remove('btn-success');
      });
    });


  }

  const changeCardOrder = (sourceIndex, targetIndex) => { 
    const cards = document.querySelectorAll('.card');
    const parent = cards[targetIndex].offsetParent.parentElement
    parent.insertBefore(
      cards[sourceIndex].offsetParent,
      cards[targetIndex].offsetParent,
    )
  }
  
  const handleCard = () => {
    changeCardOrder(3, 0)
    changeCardOrder(3, 2)
  }

  handleCard()
  button();
}

const listComponent = () => {
  const item = () => {
 
    const isActive = document.querySelector('li.active')
    isActive.classList.remove('active');
    const list = document.querySelector('ul.list-group');

    const fourthItem = document.createElement('li');
    fourthItem.classList.add('list-group-item');
    fourthItem.textContent = 'Quarto item';
    fourthItem.classList.add('active');

    const fifthItem = document.createElement('li');
    fifthItem.classList.add('list-group-item');
    fifthItem.textContent = 'Quinto item';

    list.appendChild(fourthItem);
    list.appendChild(fifthItem);
  }

  item()
}

menuComponent();
headerComponent();
cardComponent();
listComponent();
