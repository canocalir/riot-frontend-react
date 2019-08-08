import React, { Component } from 'react'
import Loading from '../Loading/Loading'
import './Nav.css'
import $ from 'jquery';
import { getGames,getGames2 } from '../functions.js'

export default class Nav extends Component {
   
    onClickHandlerGame1 = () => {
        getGames();
    }

    onClickHandlerGame2 = () => {
        getGames2();
    }

    render() {

        getGames();

        $('.nav-tabs > li:nth-child(1)').on("click", () => {
            const p = $(this).attr('data-page');
            getGames(p);
        })
        
        $('.nav-tabs > li:nth-child(2)').on("click", () => {
            const p = $(this).attr('data-page');
            getGames2(p);
        })

        window.addEventListener("load",() => {
            const myTabs = document.querySelectorAll("ul.nav-tabs > li");
            
          const myTabClicks = (tabClickEvent) => {
                for (let i = 0; i < myTabs.length; i++) {
                    myTabs[i].classList.remove("active");
                }
                const clickedTab = tabClickEvent.currentTarget;
                clickedTab.classList.add("active");
                tabClickEvent.preventDefault();
                const myContentPanes = document.querySelectorAll(".tab-pane");
                for (let i = 0; i < myContentPanes.length; i++) {
                    myContentPanes[i].classList.remove("active");
                }
                const anchorReference = tabClickEvent.target;
                const activePaneId = anchorReference.getAttribute("href");
                const activePane = document.querySelector(activePaneId);
            }
            for (let i = 0; i < myTabs.length; i++) {
                myTabs[i].addEventListener("click", myTabClicks)
            }
            
        });

        return (
            <div className="tabs">
            <section className="row">
              <ul className="nav nav-tabs">
                <li id="game1" data-page={1} className="active"><a onClick={this.onClickHandlerGame1} href="#tab-1">GAME 1</a></li>
                <li id="game2" data-page={2} className><a onClick={this.onClickHandlerGame2} href="#tab-2">GAME 2</a></li>
              </ul>
              <div id="tab-content" className="tab-content">
                <Loading/>
              </div>                      
              <div className="line" />
              <div id="tab-1" className="tab-pane active"> 
                <div className="headings">
                  <h3 className="sname" />
                  <h3 className="lname" />
                </div><div className="headwin">
                  <h3 className="isVictory" /> 
                </div>
                <table>
                  <tbody className="ajax-content">
                  </tbody>
                </table>
                <div className="headings">
                  <h3 className="sname2" />
                  <h3 className="lname2" />
                </div>
                <div className="headwin">
                  <h3 className="isDefeat" /> 
                </div>
                <table>
                  <tbody className="ajax-content2" style={{marginTop: '478px'}}>
                  </tbody>
                </table>
              </div> 
            </section>
          </div>
        )
    }
}
