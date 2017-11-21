
import { fetchContactsList } from './api'
const listContainer = document.createElement('ul')
const appContainer = document.getElementById('contact_list_app')
listContainer.setAttribute('class', 'list_container isLoading')

const buildList = (data) => data.map((e, l, i) => '<li id="item_' + e.id + '" data-gender="' + e.gender + '" data-name="' + e.first_name + '">'
  + '<div class="top_section"><div class="avatar" style="background-image:url(\'' + e.avatar + '\')"></div>'
  + '<h4>' + e.first_name + ' ' + e.last_name + '</h4></div>'
  + '<div class="bottom_section"><div class="left"><p>email address</p><strong>' + e.email + '</strong></div>'
  + '<div class="right"><p>gender</p><strong>' + e.gender + '</strong></div>'
  + '</div></li>'
)

const filterByGender = (gender) => {
  let dataFiltered = JSON.parse(localStorage.getItem('contactsList')).filter((v) => {
    if (gender.length > 0)
      return v.gender.toLowerCase() == gender.toLowerCase()
  })
  localStorage.setItem('contactsList', JSON.stringify(dataFiltered))
  renderList()
}

const sortByName = (sort) => {
  let dataSorted = JSON.parse(localStorage.getItem('contactsList')).sort((a, b) => {
    if (sort == 'asc') return a.first_name - b.first_name
    if (sort == 'desc') return a.first_name + b.first_name
  })
  localStorage.setItem('contactsList', JSON.stringify(dataSorted))
  renderList()
}

const renderList = () => {
  let data = JSON.parse(localStorage.getItem('contactsList'))
  let list = buildList(data)
  listContainer.innerHTML = list.join('')
  listContainer.classList.remove('isLoading')
}

const resetFilters = () => {
  document.getElementById('gender_filter').value = ""
  document.getElementById('sort_by_name').value = ""
}

export default () => {
  fetchContactsList(renderList)
  const filterByGenderBtn = '<label class="btn_label" for="gender_filter">Filter</label><select id="gender_filter" class="filter_by_gender_btn"><option value="" selected>-- select --</option><option value="female">female</option><option value="male">male</option></select>'
  const sortByNameBtn = '<label class="btn_label" for="sort_by_name">Sort</label><select id="sort_by_name" class="sort_by_name_btn"><option value="" selected>-- select --</option><option value="asc">Name ASC</option><option value="desc">Name DESC</option></select>'
  const resetBtn = '<button id="reset" class="reset_filters">reset</button>'
  appContainer.appendChild(listContainer)
  appContainer.insertAdjacentHTML('afterbegin', filterByGenderBtn + sortByNameBtn + resetBtn)

  document.body.addEventListener('change', (evt) => {
    let targetID = evt.target.getAttribute('id')

    switch (targetID) {
      case 'gender_filter':
        listContainer.className += ' isLoading'
        fetchContactsList(filterByGender, evt.target.value)
        resetFilters()
        break
      case 'sort_by_name':
        listContainer.className += ' isLoading'
        fetchContactsList(sortByName, evt.target.value)
        resetFilters()
        break
    }
  })

  document.body.addEventListener('click', (evt) => {
    if (evt.target.getAttribute('id') == 'reset') {
      listContainer.className += ' isLoading'
      fetchContactsList(renderList)
    }
  })
}
