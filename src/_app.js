// import React, { Component, useReducer } from 'react';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// import './App.css';
// import Footer from '../src/components/Footer';
// import HomePage from './HomePage';
// import About from './About';
// import Contact from './Contact';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import Test from './test';

// const App = () => {
//   const router = useRouter();
//   const state = {
//     title: 'Garrett Love',
//     headerLinks: [
//       { title: 'Home', path: '/' },
//       { title: 'About', path: '/about' },
//       { title: 'Contact', path: '/contact' }
//     ],
//     home: {
//       title: 'Be Relentless',
//       subTitle: 'Projects the make a difference',
//       text: 'Checkout my projects below'
//     },
//     about: {
//       title: 'About Me'
//     },
//     contact: {
//       title: "Let's talk "
//     }
//   }
//   return (
//     <div>
//       <Container className='p-0' fluid={true}>
//         <Navbar className='border-bottom' bg='transparent' expand='lg' >
//           <Navbar.Brand>Garrett Love</Navbar.Brand>
//           <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
//           <Navbar.Collapse id='navbar-toggle'>
//             <Nav className='ml-auto'>
//               <Link className='nav-link' href='/'>Home</Link>
//               <Link className='nav-link' href='/about'>About</Link>
//               <Link className='nav-link' href='/contact'>Contact</Link>

//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>

//         {/* {router.pathname === '/' &&
//           <HomePage
//             title={state.home.title}
//             subTitle={state.home.subTitle}
//             text={state.home.text}
//           />
//         }
//         {router.pathname === '/About' &&
//           <About title={state.about.title} />
//         }
//         {router.pathname === '/Contact' &&
//           <Contact title={state.contact.title} />
//         } */}
//         {/* <Test /> */}
//         <Footer />
//       </Container>
//     </div>
//   )
// }


// export default App;