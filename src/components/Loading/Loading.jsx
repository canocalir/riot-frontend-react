import React, {Component} from 'react'
import Loader from './loader.gif'
import './Loading.css'
import $ from 'jquery';

export default class Loading extends Component {
    componentDidMount() {
        const loaderFunction = () => {
            return setTimeout(() => {
              $('#loading').css('display', 'none');
              $('.tab-content').css('display', 'block');
            }, 1000);
          }
          
          $(document).ajaxSend((event, request, settings) => {
            $('#loading').show();
          });
          
          $(document).ajaxComplete((event, request, settings) => {
            $('#loading').hide();
          });
          
          $(window).on('load', () => {
              loaderFunction();
            }); 
    }
    render() {
        return (
            <div id="loading">
                  <img src={Loader} alt="loader" />
            </div>  
        )
    }
}
