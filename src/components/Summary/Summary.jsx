import "./Summary.sass";

export default function Summary(props) {
    return (
        <div className="summary">
            <div className="summaryHeader">
                <h1>Finishing up</h1>
                <p className="p">Double-check everything looks OK before confirming.</p>
            </div>
            <div className="summaryBody">
                <div className="summaryContent">
                    <div className="summaryBodyHeader">
                        <div className="forfait">
                            <span className="spanForfait">{props.planName.name}({props.forfait === "mo" ? "Monthly" : "Yearly"})</span>
                            <button onClick={() => props.changeNav(1)} className="spanForfait2">Change</button>
                        </div>
                        <span className="spanPrice">${props.planName.price}/{props.forfait}</span>
                    </div>
                    <div id="hr"></div>
                    <div className="panier">
                        {props.panier.map((element) => (
                            <div className="summaryBodyContent">
                            <span className="spanAddonPanier">{element.name}</span>
                            <span className="pricePanier">+${element.price}/{props.forfait}</span>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='divBtn'>
                <button className='btnBack' onClick={() => props.changeNav(2)}>Go Back</button><button className='btnStepSummary' onClick={() => props.changeNav(4)}>Confirm</button>
            </div>
        </div>
    );
}