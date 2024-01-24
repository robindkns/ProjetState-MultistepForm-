import './Confirm.sass';
import urlThankU from "../../assets/thankyou.svg"

export default function Confirm(props) {
    return(
        <div className="confirm">
            <img src={urlThankU} alt="thankyou"/>
            <h1 className='h1Ty'>Thank you!</h1>
            <p className='pTy'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}