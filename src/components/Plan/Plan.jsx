import './Plan.sass';
export default function Plan(props) {
    
    return (
        <div className="plan">
            <h1>Select your plan</h1>
            <p className='p'>You have the option of monthly or yearly billing.</p>
            <div className='plansBox'>
                {props.plans.map((element, index) => (
                    <div key={index} onClick={()=> props.fctChange(element)} className={element.active ? "plansActive" : "plans"} >
                        <img src={element.url} alt="logoPlan" className='imgPlan'/>
                        <div className='planDiv'>
                            <span className='spanPlan'>{element.name}</span>
                            <span className='spanPlanPrix'>${element.price}/{props.forfait}</span>
                        </div> 
                    </div>
                ))}
            </div>
            <div className='btnToggle'>
                <span className={props.switch === false ? 'switchSpanActive' : 'switchSpan'}>Monthly</span>
                <label className="switch">
                    <input type="checkbox"/>
                    <span onClick={props.change} className="slider round"></span>
                </label>
                <span className={props.switch === true ? 'switchSpanActive' : 'switchSpan'}>Yearly</span>
            </div>
            <div className='divBtn'>
                <button className='btnBack' onClick={() => props.changeNav(0)}>Go Back</button><button className='btnStep' onClick={() => props.changeNav(2)}>Next Step</button>
            </div>
        </div>
    )
}