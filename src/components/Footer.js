import React from 'react'
import SignUp from './SignUp'


const Footer = (props) => (
    
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <SignUp />
    <ul className="icons">            
            <li><a href="https://www.instagram.com/goatnbike/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
    </ul>
        <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a> <a href="https://github.com/renatewr">By Renate W Ravnaas</a></p>
    </footer>
)



export default Footer
