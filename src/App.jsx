import './App.sass';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Infos from './components/Infos/Infos.jsx';
import Plan from './components/Plan/Plan.jsx';
import Addon from './components/Addon/Addon.jsx';
import Summary from './components/Summary/Summary.jsx';
import Confirm from './components/Confirm/Confirm.jsx';
import urlArcade from './assets/arcade.svg';
import urlAdvanced from './assets/advanced.svg';
import urlPro from './assets/pro.svg';
import { useEffect, useState } from 'react';

function App() {

    const [tabPlan, setTabPlan] = useState([
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
    ]);

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
    const [panierTotal, setPanierTotal] = useState([]);
    const [choicePlan, setChoicePlan] = useState([]);
    let [totalPrice, setTotalPrice] = useState(0);
    const [valueName, setValueName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valuePhone, setValuePhone] = useState('');
    const [nav, setNav] = useState(0);
    const [switchBtn, setSwitchBtn] = useState(false);
    const [promoBtn, setPromoBtn] = useState(false);
    const [forfait, setForfait] = useState("mo");
    const [promoInputValue, setPromoInputValue] = useState("");
    const [montantPromo, setMontantPromo] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [priceWithPromo, setPriceWithPromo] = useState(0);


    let changerActivePlan = (e) => {
        if (!panierTotal.includes(e)) {
            setPanierTotal([...panierTotal, e]);

            tabPlan.forEach(item => {
                if (item === e) {
                    setTabPlan([...tabPlan], item.active = true);
                } else {
                    setPanierTotal(prevPanier => {
                        return prevPanier.filter(element => element.name !== item.name)
                    })
                    setTabPlan([...tabPlan], item.active = false);
                }
            });
            setChoicePlan(e);
        }
    }

    let changerActiveAddon = (e) => {
        addons.forEach((item) => {
            if (item === e) {
                if (item.active === true) {
                    setAddons([...addons], item.active = false)
                    setPanier(panier.filter(elementPanier => elementPanier.name !== item.name))
                    setPanierTotal(caca => {
                        return caca.filter(element => element.name !== item.name)
                    })
                } else {
                    setAddons([...addons], item.active = true)
                    setPanierTotal([...panierTotal, item])
                    setPanier([...panier, item])
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
                setTabPlan([...tabPlan], element.price = element.price * 10)
            })
            addons.forEach((element) => {
                setAddons([...addons], element.price = element.price * 10)
            })
            setForfait("yr")
        } else {
            setSwitchBtn(false)
            tabPlan.forEach((element) => {
                setTabPlan([...tabPlan], element.price = element.price / 10)
            })
            addons.forEach((element) => {
                setAddons([...addons], element.price = element.price / 10)
            })
            setForfait("mo")
        }
    }

    let lastStep = () => {
        console.log(panierTotal, totalPrice);

        setNav(3)
        setTotalPrice(0)
        setPromoBtn(false)
        panierTotal.forEach(element => {
            console.log(element.name + " " + element.price);
            setTotalPrice(totalPrice += element.price)

        });
    }

    useEffect(() => {
        console.log(panierTotal);
    }, [panierTotal]);
    console.log("total " + totalPrice);

    let stepBack = (a) => {
        setPromoBtn(false)
        setNav(a)
        setTotalPrice(0)
    }

    let changeValueInput = (e) => {
        setPromoInputValue(e.target.value)
    }

    let promo = () => {
        if (promoInputValue === "promo10") {
            let promo10 = totalPrice * 0.1
            promo10 = promo10.toFixed(2)
            setDiscount(promo10)
            setPriceWithPromo(totalPrice - promo10)
            setPromoInputValue("")
            setMontantPromo(10)
            setPromoBtn(true)
        }
        
    }


    return (
        <div className='App'>
            <Sidebar nav={nav} />
            <div className="rightCol">
                {nav === 0 ? <Infos name={valueName} email={valueEmail} phone={valuePhone} fctName={changeValueName} fctEmail={changeValueEmail} fctPhone={changeValuePhone} changeNav={setNav} /> :
                    nav === 1 ? <Plan tabPlan={choicePlan} fctChange={changerActivePlan} plans={tabPlan} forfait={forfait} switch={switchBtn} change={changePrice} changeNav={setNav} setPlan={setTabPlan} /> :
                        nav === 2 ? <Addon changeNav={setNav} fctChange={changerActiveAddon} lastNav={lastStep} tabAddons={addons} forfait={forfait} /> :
                            nav === 3 ? <Summary totalDiscount={priceWithPromo} discount={discount} promo={montantPromo} fctValInput={changeValueInput} valPromo={promoInputValue} btnPromo={promoBtn} fctPromo={promo} total={totalPrice} planName={choicePlan} panier={panier} changeNav={setNav} stepBack={stepBack} forfait={forfait} /> :
                                nav === 4 ? <Confirm /> :
                                    null
                }

            </div>
        </div>
    );
}

export default App;

