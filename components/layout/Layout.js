import Link from 'next/link';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

// import { connect } from 'react-redux';

import Header from './../header/Header';
import Footer from '../footer/Footer';

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


class Layout extends React.Component{

  constructor(){
    super();
    this.state = {
      loading: false
    }
  }

	render(){

		const { children, title } = this.props

		return <div>
			<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" type="image/x-icon" href="./../../static/ds-icon.png" />
				<title>{title}</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
			</Head>
  			<Header/>
  			   { children }
        <Footer/>
			<style jsx global>{`

        html, body{
          overflow-x: hidden;
        }

        body {
          margin: 0;
          font-family: 'Montserrat';
          background: white;
        }

        .center-image{
          display: block;
          margin: 0 auto;
        }

        /* Make clicks pass-through */
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: #6e9872;

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #6e9872, 0 0 5px #6e9872;
          opacity: 1.0;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
                  transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;

          border: solid 2px transparent;
          border-top-color: #6e9872;
          border-left-color: #6e9872;
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
                  animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0%   { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes nprogress-spinner {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
		</div>
	}
}


export default Layout;