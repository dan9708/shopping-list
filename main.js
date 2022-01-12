const items = document.querySelector('.items')
const input = document.querySelector('.input__list')
const addBtn = document.querySelector('.add__icon')

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value

  if (text === '') {
    input.focus()
    return
  } 
  // 2. 새로운 아이템을 만듬 (텍스트 + 삭제 버트)
  const item = createItem(text)
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  items.appendChild(item)
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block:'center'})
  // 5. input을 초기화 한다.
  input.value = ''
  input.focus()
}

// 새로만든 목록을 추가하는 함수
function createItem (text) {
  const itemRow = document.createElement('li')
  // 클래스를 지정
  itemRow.setAttribute('class', 'item__row')

  const item = document.createElement('div')
  item.setAttribute('class', 'item')

  const span = document.createElement('span')
  span.setAttribute('class', 'item__name')
  span.innerText = text // text는 input.value에서 받은값이다.

  const deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('class', 'item__delete__icon')
  deleteBtn.innerHTML = '<img class="item__delete__icon" src="./image/baseline_delete_2x.png" alt="삭제버튼">'
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow)    
  })

  item.appendChild(span)
  item.appendChild(deleteBtn)

  itemRow.appendChild(item)
  return itemRow

}

addBtn.addEventListener('click', () => {
  onAdd()
})

input.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    onAdd()
  }
})
