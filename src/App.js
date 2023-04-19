import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Login} from './login/login'
import{Game} from './game/game'
import{Sched} from './sched/sched'

function App() {
  return (
  <div class='top'>
    <div class="game-container">
        <div class="game-big-box">
          <h1>Pickup Soccer</h1>
        </div>
        <div class="nav-box">
            <div class="button-container">
                <div class="nav-col">
                    <div class="nav-grid">
                        <button class="nav-button" onclick="window.location.href='game.html';">Make Game</button>
                    </div>
                </div>
                <div class="nav-col">
                    <div class="nav-grid">
                        <button class="nav-button" onclick="window.location.href='sched.html';">Schedule</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h1>Creat new event</h1>
    <Login /> 
    <footer class="dark-footer">
        <div class="container-fluid">
          <span class="text-reset">Carson Koehle and Ben Fonbuena</span>
          <a class="text-reset" href="https://github.com/bchfonz/Startup">Github</a>
        </div>
    </footer>
</div>);
}

export default App;
