
import { fetchContactsList } from './api'
const listContainer = document.createElement('ul')
const appContainer = document.getElementById('contact_list_app')
listContainer.setAttribute('class', 'list_container')

const buildList = (data) => data.map((e, l, i) => '<li id="item_' + e.id + '" data-gender="' + e.gender + '" data-name="' + e.first_name + '">'
  + '<div class="top_section"><div class="avatar" style="background-image:url(\'' + e.avatar + '\')"></div>'
  + '<h4>' + e.first_name + ' ' + e.last_name + '</h4></div>'
  + '<div class="bottom_section"><div class="left"><p>email address</p><strong>' + e.email + '</strong></div>'
  + '<div class="right"><p>gender</p><strong>' + e.gender + '</strong></div>'
  + '</div></li>'
)

const filterByGender = (gender) => JSON.parse(localStorage.getItem('contactsList')).filter((v) => v.gender.toLowerCase() == gender.toLowerCase())

const sortByName = (name) => JSON.parse(localStorage.getItem('contactsList')).sort((a, b) => a.first_name - b.first_name)

const renderList = () => {
  let data = JSON.parse(localStorage.getItem('contactsList'))
  console.log(data)
  let list = buildList(data)
  listContainer.innerHTML = list.join('')
}

export default () => {
  fetchContactsList(renderList)
  const filterByGenderBtn = '<label class="btn_label" for="gender_filter">Filter</label><select id="gender_filter" class="filter_by_gender_btn"><option value="female">female</option><option value="male">male</option></select>'
  const sortByNameBtn = '<label class="btn_label" for="sort_by_name">Sort</label><select id="sort_by_name" class="sort_by_name_btn"><option value="asc">Name ASC</option><option value="desc">Name DESC</option></select>'
  const resetBtn = '<button class="reset_filters">reset</button>'
  appContainer.appendChild(listContainer)
  appContainer.insertAdjacentHTML('afterbegin', filterByGenderBtn + sortByNameBtn + resetBtn)

  document.body.addEventListener('change', (evt) => {
    switch (evt.target.getAttribute('id')) {
      case 'gender_filter':
        console.log(document.getElementById('gender_filter').value)
        console.log(typeof localStorage.getItem('contactsList'))
        console.log(filterByGender(document.getElementById('gender_filter').value))
        localStorage.setItem('contactsList', JSON.stringify(filterByGender(document.getElementById('gender_filter').value)))
        break
      case 'sort_by_name':
        localStorage.setItem('contactsList', JSON.stringify(sortByName(document.getElementById('sort_by_name').value)))
        break
    }
    renderList()
  })
}
