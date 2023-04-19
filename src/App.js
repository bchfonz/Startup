import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import{Login} from './login/login'
import{Game} from './game/game'
import{Sched} from './sched/sched'
// import { func } from 'prop-types';
// import { Nav } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div class='top'>
        <div class="game-container">
            <div class="game-big-box">
              <h1>Pickup Soccer</h1>
            </div>
            <div class="nav-box">
                <div class="button-container">
                    <div class="nav-col">
                        <div class="nav-grid">
                            <NavLink class="nav-button" to='game'>Make Game</NavLink>
                        </div>
                    </div>
                    <div class="nav-col">
                        <div class="nav-grid">
                            <NavLink class="nav-button" to='sched'>Schedule</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1>Creat new event</h1>
        <Login /> 
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/game' element={<Game />} />
          <Route path='sched' element={<Sched />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
        <footer class="dark-footer">
            <div class="container-fluid">
              <span class="text-reset">Carson Koehle and Ben Fonbuena</span>
              <NavLink class="text-reset" to="https://github.com/bchfonz/Startup">Github</NavLink>
            </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound(){
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender, Adress unknown.</main>
}

export default App;
