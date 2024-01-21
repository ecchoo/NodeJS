// import FormAddress from "../components/FormAddress";
// import Input from "../components/Input"
// import Select from "../components/Select"
// import Test from "../components/Test";
// import '../css/profilePage.css'
// import { DAYS, MONTH } from "../utils/consts";

// const Profile = () => {
//     return (
//         <section className="profile">
//             <div className="container">
//                 <div className="row">
//                     <div className="personal-data">
//                         <form action="" className="form-persoanl-data" onSubmit={ e => e.preventDefault()  } >
//                             <span className="header-form">Personal data</span>
//                             <div className="inputs">
//                                 <Input placaholder='Name' id='name' />
//                                 <Input placaholder='Phone number' id='phone-number' />
//                                 <div className="birthday">
//                                     <label htmlFor="" className="label-birthday">Birthday</label>
//                                     <div className="date-selection">
//                                         <Select key={'day'} valueSelectControl='Day' itemsSelectDrop={DAYS} />  
//                                         <Select key='month' valueSelectControl='Month' itemsSelectDrop={MONTH} />
//                                     </div>
//                                 </div>
//                                 <Input placaholder='Email' id='email' type='email' />
//                             </div>
//                             <button type="submit" className="save">Save changes</button>
//                         </form>
//                         <form action="" className="form-bonuses" onSubmit={ e => e.preventDefault() }>
//                             <span className="count-bonuses">Accumuleted bonuses 0</span>
//                             <Input placaholder='Enter promo code for bonuses' id='promo' /> 
//                             <button className="enroll" type="submit">Enroll</button>
//                         </form>
//                         <FormAddress textButton='Save changes' />
//                         <button className="logout">Выйти</button>
//                     </div>
//                     <div className="order-history">
//                         Order history
//                     </div>
//                 </div>
                
//             </div>
//         </section>
//     )
// }

// export default Profile