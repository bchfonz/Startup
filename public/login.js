(async () => {
  let authenticated = false;
  const userName = localStorage.getItem('userName');
  if (userName) {
    const nameEl = document.querySelector('#userName');
    nameEl.value = userName;
    const user = await getUser(nameEl.value);
    authenticated = user?.authenticated;
  }

  if (authenticated) {
    document.querySelector('#playerName').textContent = userName;
    setDisplay('loginControls', 'none');
    setDisplay('playControls', 'block');
  } else {
    setDisplay('loginControls', 'block');
    setDisplay('playControls', 'none');
  }
})();

async function loginUser() {
  console.log("Check - login");
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  console.log("Check - create");
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  console.log("Check - LC1");
  const userName = document.querySelector('#userName')?.value;
  const password = document.querySelector('#userPassword')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  /////
  console.log("Check - LC2");
  console.log(userName);
  console.log(password);
  //////
  
  try {
    const body = await response.json();
    // handle successful response...
  } catch (e) {
    // handle parsing error...
    console.error('Error parsing response:', e);
  }

  if (response?.status === 200) {
    localStorage.setItem('userName', userName);
    window.location.href = 'game.html';
  } else {
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

function goToGame() {
  window.location.href = 'game.html';
}

function logout() {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(email) {
  let scores = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}
