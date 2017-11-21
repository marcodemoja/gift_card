
import { fetchContactsList } from './api'
const listContainer = '<ul id="list_container">__LIST__</ul>'

const buildList = (data) => data.map((e, l, i) => '<li data-gender="' + e.gender + '" data-name="' + e.first_name + '">'
  + '<div><img src="' + e.avatar + '" />'
  + '<b>' + e.first_name + '</b></div>'
  + '<div><p>email address</p></div>'
  + '<div><p>gender</p></div>'
  + '<div><p>' + e.email + '</p></div>'
  + '<div><p>' + e.gender + '</p></div>'
  + '</li>'
)

const filterByGender = (gender) => JSON.parse(localStorage.getItem('contactsList').filter((v) => v.gender == gender))

const sortByName = (name) => JSON.parse(localStorage.getItem('contactsList').sort((a, b) => a.first_name - b.first_name))

const renderList = () => {
  let list = buildList(JSON.parse(localStorage.getItem('contactsList')))
  let appContainer = document.getElementById('contact_list_app')
  appContainer.innerHTML = listContainer
  document.getElementById('list_container').innerHTML = list
}


export default () => {
  fetchContactsList(renderList)
  const filterByGenderBtn = '<div id="filter_by_gender_btn">filter</div>'
  const sortByNameBtn = '<div id="sort_by_name_btn">sort</div>'

  document.body.addEventListener('click', (evt) => {
    console.log(evt.target)
  /*switch(evt.target.targetName.toLowerCase()){
  }*/
  })

}
