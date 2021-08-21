import 'regenerator-runtime'
import {Component} from 'doz'
/*import logoUrl from '../logo.svg'
import DozRouter from 'doz-router'*/
import '../app.css'
/*import Nav from './nav'
import PageHome from './pages/home'
import PageAbout from './pages/about'*/

export default class Main extends Component {

    template(h) {

        //language=HTML
        return h`
            <style>
                .line {
                    height: 1px;
                    width: 300px;
                    margin-left: auto;
                    margin-right: auto;
                    background: #aaa;
                    margin-bottom: 20px;
                }
                .title {
                    font-size: 48px;
                    font-family: 'Great Vibes', cursive;
                    font-weight: lighter;
                    margin-top: 48px;
                }
                .subtitle {
                    font-size: 14px;
                }
                .app-container {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    /*justify-content: center;*/
                    align-items: center;
                    flex-direction: column;
                    background: rgba(0,0,0,0.5);
                    color: white
                }
                .socials {
                    margin-top: 16px;
                }
                .socials a {
                    color: white;
                }
                .fa-instagram, .fa-facebook {
                    font-size: 32px;
                    margin: 0 8px;
                }
            </style>
            <div class="app-container">
                <h1 class="title">Lampobot</h1>
                <div class="line"></div>
                <h3 class="subtitle">Fabio Ricali,<br>steampunk artist for passion.</h3>
                <div class="line"></div>
                <div class="socials">
                    <a href="https://it-it.facebook.com/lampobot">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.instagram.com/lampobot/">
                        <i class="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
        `
    }

    onCreate() {
        // Every time a component is mounted on the DOM,
        // I update the list of links mapped with the "data-router-link" attribute
        /*this.app.on('componentMountAsync', () => {
            if (this.router) {
                this.router.bindLink();
            }
        });*/
    }

    onMountAsync() {
        if (window.SSR)
            window.SSR.ready();
    }
}
