import "./Summary.sass";

export default function Summary(props) {

    return (
        <div className="summary">
            <div className="summaryHeader">
                <h1>Finishing up</h1>
                <p className="p">Double-check everything looks OK before confirming.</p>
            </div>
            <div className="summaryBody">
                <div className="summaryContentContainer">
                    <div className="summaryContent">
                        <div className="summaryBodyContent">
                            <div className="summaryBodyHeader">
                                <div className="forfait">
                                    <span className="spanForfait">{props.planName.name}({props.forfait === "mo" ? "Monthly" : "Yearly"})</span>
                                    <button onClick={() => props.stepBack(1)} className="spanForfait2">Change</button>
                                </div>
                                <span className="spanPrice">${props.planName.price}/{props.forfait}</span>
                            </div>
                            <div id="hr"></div>
                            <div className="panier">
                                {props.panier.map((element) => (
                                    <div className="divPanier">
                                        <span className="spanAddonPanier">{element.name}</span>
                                        <span className="pricePanier">+${element.price}/{props.forfait}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="summaryTotal">
                        <div className="summaryTotalContent">
                            <p className="pTotal">Total ({props.forfait === "mo" ? "per month" : "per year"})</p>
                            <span className="spanTotal" style={props.btnPromo ? { textDecoration: "line-through" } : null}>${props.total}/{props.forfait}</span>
                        </div>
                        <div className="bonusPromo">
                            <div className="promo">
                                <input className="inputPromo" onKeyDown={(e) => e.key === "Enter" ? props.fctPromo(props.valPromo) : null} onChange={props.fctValInput} type="text" value={props.valPromo} placeholder="Use Promo Code" />
                                <button className="btnPromo" onClick={() => props.fctPromo(props.valPromo)}>Apply</button>
                            </div>
                            <div className="confirmPromo">
                                <p className="pPromo">{props.btnPromo ? `${props.promo}% OFF - ${props.discount}$` : null}</p>
                                <span className="spanPromo">{props.btnPromo ? `${props.totalDiscount}$` : null}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divBtn'>
                <button className='btnBack' onClick={() => props.stepBack(2)}>Go Back</button><button className='btnStepSummary' onClick={() => props.changeNav(4)}>Confirm</button>
            </div>
        </div>
    );
}