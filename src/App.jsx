import './App.sass';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Infos from './components/Infos/Infos.jsx';
import Plan from './components/Plan/Plan.jsx';
import Addon from './components/Addon/Addon.jsx';
import Summary from './components/Summary/Summary.jsx';
import urlArcade from './assets/arcade.svg';
import urlAdvanced from './assets/advanced.svg';
import urlPro from './assets/pro.svg';
import { useState } from 'react';

function App() {

    const[tabPlan, setTabPlan] = useState(
        [
            {
                name: "Arcade",
                price: 9,
                url: urlArcade,
                active: false
            },
            {
                name: "Advanced",
                price: 12,
                url: urlAdvanced,
                active: false
            },
            {
                name: "Pro",
                price: 15,
                url: urlPro,
                active: false
            }
        ]
    );

    const [addons, setAddons] = useState(
        [
            {
                name: "Online service",
                description: "Access to multiplayer games",
                price: 1,
                active: false
            },
            {
                name: "Larger storage",
                description: "Extra 1TB of cloud save",
                price: 2,
                active: false
            },
            {
                name: "Customizable profile",
                description: "Custom theme on your profile",
                price: 2,
                active: false
            }
        ]
    );

    const [panier, setPanier] = useState([]);
    const [choicePlan, setChoicePlan] = useState([]);

    const [valueName, setValueName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valuePhone, setValuePhone] = useState('');
    const [nav, setNav] = useState(0);
    const [switchBtn, setSwitchBtn] = useState(false);
    const [forfait, setForfait] = useState("mo");

    let changerActivePlan =(e)=>{
        tabPlan.forEach((element)=>{
            if (element === e) {
                setTabPlan([...tabPlan], element.active = true)
                setChoicePlan(element)
            } else {
                element.active = false
            }
        })
    }

    let changerActiveAddon =(e)=>{
        addons.forEach((element)=>{
            if (element === e) {
                if (element.active === true) {
                    setAddons([...addons], element.active = false)
                    setPanier(panier.filter(elementPanier => elementPanier.name !== element.name))
                } else {
                    setAddons([...addons], element.active = true)
                    setPanier([...panier, element])
                }
            }
        })
        
    }

    let changeValueName = (event) => {
        setValueName(event.target.value);
    }

    let changeValueEmail = (event) => {
        setValueEmail(event.target.value);
    }
    let changeValuePhone = (event) => {
        setValuePhone(event.target.value);
    }

    let changePrice = () => {
        if (switchBtn === false) {
            setSwitchBtn(true)
            tabPlan.forEach((element) => {
                element.price = element.price * 10
            })
            addons.forEach((element) => {
                element.price = element.price * 10
            })
            setForfait("yr")
        } else {
            setSwitchBtn(false)
            tabPlan.forEach((element) => {
                element.price = element.price / 10
            })
            addons.forEach((element) => {
                element.price = element.price / 10
            })
            setForfait("mo")
        }
    }


    return (
        <div className='App'>
            <Sidebar nav={nav} />
            <div className="rightCol">
                {nav === 0 ? <Infos name={valueName} email={valueEmail} phone={valuePhone} fctName={changeValueName} fctEmail={changeValueEmail} fctPhone={changeValuePhone} changeNav={setNav} /> :
                nav===1 ? <Plan fctChange={changerActivePlan} plans={tabPlan} forfait={forfait}  switch={switchBtn} change={changePrice} changeNav={setNav} setPlan={setTabPlan} /> :
                nav===2 ? <Addon fctChange={changerActiveAddon} changeNav={setNav} tabAddons={addons} forfait={forfait} /> :
                nav===3 ? <Summary planName={choicePlan} panier={panier} changeNav={setNav} forfait={forfait} /> :
                <div></div>
                }
                
            </div>
        </div>
    );
}

export default App;

