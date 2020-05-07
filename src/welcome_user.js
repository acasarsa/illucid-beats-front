// make a div container 
// make input field 
// fetch post to users

const url = 'http://localhost:3000/api/v1'


function loginOverlaySetup() {

  document.addEventListener("submit", (event) => {
    let login_container = document.querySelector('.login_container')
    var x = document.querySelector("#root");

    if(event.target) {

        x.style.visibility = "visible"
        login_container.style.display = 'none'

        }
  })
}

function loginSetup() {
//////////////////////////////
// create login form ///
//////////////////////////////
  const login_container = document.querySelector('.login_container')

  const div = document.createElement('div')
  div.id = 'inner-login'
  login_container.append(div)

  const h1 = document.createElement('h1')
  h1.id = 'login-title'
  // if user exists say login else say create username
  h1.textContent = 'User Login'
  div.append(h1)

  const login_form = document.createElement('form')
  
  login_form.id = 'login-form'
  login_form.innerHTML = `
    <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username">
    <input type="submit" value="Login" id="login-form-submit">
  `

    div.append(login_form)

//////////////////////////////
// add submit listener ///
//////////////////////////////

  login_form.addEventListener('submit', (e) => {
    e.preventDefault()

    const input = e.target.username
    const username = input.value

    const new_username = {
      username
    }

    login_form.reset()

    const options = {
      method: 'POST',
      body: JSON.stringify(new_username),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    /////////////////////////
    // adds user to user db
    ////////////////////////
    fetch(`${url}/users`, options)
    .then(r => r.json())
    .then(user => {  
    /////////////////////
    // finds current user_id and username and creates welcome sign / stores user_id on page. 
    /////////////////////
      const welcomeUser = document.querySelector('.left-container')
      welcomeUser.dataset.userId = user.id

      const p = document.createElement('p')

      p.innerHTML = `
        Welcome, ${user.username}
      `
      welcomeUser.append(p)

    })
    .catch(err => console.log("error:", err))
  })
}




