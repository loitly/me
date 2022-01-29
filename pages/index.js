import React from 'react';
import Head from 'next/head';
import Link from 'next/link';



export default function App() {

    return (
        <Page>
            <em>Hi, I'm Loi Ly</em> <span className="wave">👋</span>

            <p>
                This website is a fun project I created while looking into a simple way to help my daughter creates hers.
            </p>
            <div className='grid'>
                <a href='https://nextjs.org/' className='card'>
                    <h3>Next.js</h3>
                    <ul>
                        <li>React Framework</li>
                        <li>Build and bundling</li>
                        <li>Developer environment</li>
                        <li>URL Routing</li>
                        <li>Styled JSX</li>
                    </ul>
                </a>

                <a href='https://github.com/Caltech-IPAC/firefly' className='card'>
                    <h3>Firefly</h3>
                    <ul>
                        <li>Advanced image visualization</li>
                        <li>Comprehensive plotting tool</li>
                        <li>Powerful table display</li>
                        <li>Shared data model</li>
                    </ul>
                </a>
                <div href='https://aladin.u-strasbg.fr/AladinLite/doc/' className='card'>
                    <h3>Aladin</h3>
                    <ul>
                        <li>Image survey visualization</li>
                        <li>Lightweight, fast and interactive</li>
                    </ul>
                </div>
                <a href='https://react-hook-form.com/' className='card'>
                    <h3>React Hook Form</h3>
                    <ul>
                        <li>HTML standard</li>
                        <li>Built-in validation</li>
                        <li>Intuitive, feature-complete API</li>
                    </ul>
                </a>
                <a href='https://react-hook-form.com/' className='card'>
                    <h3>React Hook Form</h3>
                    <ul>
                        <li>HTML standard</li>
                        <li>Built-in validation</li>
                        <li>Intuitive, feature-complete API</li>
                    </ul>
                </a>
                <a href='https://react-hook-form.com/' className='card'>
                    <h3>React Hook Form</h3>
                    <ul>
                        <li>HTML standard</li>
                        <li>Built-in validation</li>
                        <li>Intuitive, feature-complete API</li>
                    </ul>
                </a>
                <a href='https://react-hook-form.com/' className='card'>
                    <h3>React Hook Form</h3>
                    <ul>
                        <li>HTML standard</li>
                        <li>Built-in validation</li>
                        <li>Intuitive, feature-complete API</li>
                    </ul>
                </a>
                <a href='https://react-hook-form.com/' className='card'>
                    <h3>React Hook Form</h3>
                    <ul>
                        <li>HTML standard</li>
                        <li>Built-in validation</li>
                        <li>Intuitive, feature-complete API</li>
                    </ul>
                </a>
            </div>

            <style jsx> {`
                p,em {
                    font-size: larger;
                }
                .grid {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-wrap: wrap;
                  margin-top: 3rem;
                }
                .card {
                  min-width: 350px;
                  max-width: 350px;
                  min-height: 175px;
                  margin: 1rem;
                  flex-basis: 35%;
                  padding: 1rem 1.5rem;
                  text-align: left;
                  color: inherit;
                  text-decoration: none;
                  border: 1px solid #eaeaea;
                  border-radius: 10px;
                  transition: color 0.15s ease, border-color 0.15s ease;
                }
                .card > ul {
                  margin-left: -1rem;
                }
                .card li {
                  list-style-type: square;
                }
                .card:hover,
                .card:focus,
                .card:active {
                  color: #0070f3;
                  border-color: #0070f3;
                }
        
                .card h3 {
                  margin: 0 0 1rem 0;
                  font-size: 1.5rem;
                }        
                .wave {
                  animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
                  animation-duration: 2.5s;        /* Change to speed up or slow down */
                  animation-iteration-count: infinite;  /* Never stop waving :) */
                  transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
                  display: inline-block;
                }
                
                @keyframes wave-animation {
                    0% { transform: rotate( 0.0deg) }
                   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
                   20% { transform: rotate(-8.0deg) }
                   30% { transform: rotate(14.0deg) }
                   40% { transform: rotate(-4.0deg) }
                   50% { transform: rotate(10.0deg) }
                   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
                  100% { transform: rotate( 0.0deg) }
                }
            `} </style>
        </Page>
    );
}

export function Page(props) {
    return (
        <div id='page'>
            <Head>
                <title>Loi Ly</title>
            </Head>
            <div id='banner'>Loi Ly</div>
            <Menu/>
            <div id='content'>{props.children}</div>

            <style jsx> {`
            #page {
                display: flex;
                flex-direction: column;
                position: absolute;
                top:0;
                bottom:0;
                left: 0;
                right: 0;
            }
            #banner {
                font: bolder oblique xxx-large Georgia,Arial;
                color: white;
                background: black;
                padding: .2em;
                display: flex;
                align-items: center;
                justify-content: center;            
                background-color: black;
                opacity: 0.8;
                background-image: linear-gradient(0deg, black 90%, #111 10%);
                background-size: 5px 5px;
            }
            #content {
                flex-grow: 1;
                padding: 40px 100px;
            }       
            `} </style>
        </div>
    );
}

function Menu() {
    return (
        <div id='menu'>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About Me</a>
            </Link>
            <Link href="/family">
                <a>My Family</a>
            </Link>
            <Link href="/work">
                <a>Work</a>
            </Link>
            <style jsx> {`
                #menu {
                    display: inline-flex;
                    background-color: #222;
                    padding: .3em;
                    justify-content: space-around;
                    align-items: center; 
                }
                a {
                    color: white;
                }               
                a:hover {
                    color: #0070f3;
                }               
            `} </style>
        </div>
    );
}