import './Addon.sass'

export default function Addon(props) {
    return (
        <div className="addon">
            <div className="addonHeader">
                <h1>Pick add-ons</h1>
                <p className='p'>Add-ons help enhance your gaming experience</p>
            </div>
            <div className="addonBody">
                {props.tabAddons.map((element, index) => (
                    <div key={index} onClick={() => props.fctChange(element)} className={element.active ? "addonBoxActive" : "addonBox"}>
                        {element.active ? (<input type="checkbox" checked />) : (<input type="checkbox" />)}
                        <div className='addonText'>
                            <h2 className='h2'>{element.name}</h2>
                            <p className='p'>{element.description}</p>
                        </div>
                        <span className='span'>+${element.price}/{props.forfait}</span>
                    </div>
                ))}
            </div>
            <div className='divBtn'>
                <button className='btnBack' onClick={() => props.changeNav(1)}>Go Back</button><button className='btnStep' onClick={() => props.changeNav(3)}>Next Step</button>
            </div>
        </div>
    )
}