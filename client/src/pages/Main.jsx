// import { useEffect} from "react";
// import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import CardAbout from "../components/CardAbout";
// import BlockWhyWe from "../components/BlockWhyWe";
// import photoMainScreen from '../assets/LAST_PIZZA.png';
// import threePizzas from '../assets/Pizza.png';
// import cookedPizza from '../assets/CookedPizza(1).png';
// import justPizza from '../assets/Pizza2(2).png';
// import '../css/mainPage.css';

// const Main = () => {
//     useEffect(() => {
//         AOS.init()
//     }, [])

//     return (
//         <>
//             <section className="main-screen">
//                 <div className="container">
//                     <div className="main-screen-row">
//                         <div className="content">
//                             <h1 className="offer">Your favorite pizza in a few clicks</h1>
//                             <h2 className="descriptor">Order a delicious pizza online from Pizzazz Pizza right now!</h2>
//                             <Link className='link-order' to='#'>Order</Link>
//                         </div>
//                         <div className="main-screen-image">
//                             <img src={photoMainScreen} alt="" className="photo-pizza" />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="about">
//                 <div className="container">
//                     <h1 className="header-about">If you are looking for the best fast food in Belarus, then you have found it</h1>
//                     <div className="why-we">
//                         <BlockWhyWe title='+ 1000' value='clients' />
//                         <BlockWhyWe title='100 %' value='natural ingredients' />
//                         <BlockWhyWe title='+ 10' value='years of experience' />
//                         <BlockWhyWe title='up to 30m' value='delivery' />                        
//                     </div>
//                     <div className="cards-about">
//                         <CardAbout textCard='We use only the freshest and highest quality ingredients 
//                             to prepare a real Italian pizza that will not leave anyone indifferent.' 
//                             imageCard={threePizzas}
//                             dataAOS='fade-right'
//                         />
//                         <CardAbout textCard='Our pizzas cook very quickly, despite the high quality of 
//                             ingredients and professional preparation. We value your time, 
//                             so we make every pizza quickly and deliciously. ' 
//                             imageCard={cookedPizza}
//                             dataAOS='fade-left'
//                         />
//                         <CardAbout textCard='Our establishments are located in convenient locations throughout the city, 
//                             making us accessible to everyone. Come in and enjoy our flavorful Italian pizza!' 
//                             imageCard={justPizza}
//                             dataAOS='fade-right'
//                         />
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Main;