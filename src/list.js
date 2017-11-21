
import { fetchContactsList } from './api'

var listElements = []

const buildList = (data) => data.map((e, l, i) => '<li><div><img src="' + e.avatar + '" />'
  + '<b>' + e.first_name + '</b></div>'
  + '<div><p>email address</p></div>'
  + '<div><p>gender</p></div>'
  + '<div><p>' + e.email + '</p></div>'
  + '<div><p>' + e.gender + '</p></div>'
  + '</li>'
)

const renderList = (data) => {
  let list = buildList(data)
  let appContainer = document.getElementById('contact_list_app')

  appContainer.innerHTML = '<ul>' + list + '</ul>'
}


export default () => {
  fetchContactsList(renderList)
}
