import './Infos.sass';

export default function Infos(props) {
    return (
        <div className="infos">
            <h1>Personal info</h1>
            <p className='p'>Please provide your name, email address, and phone number.</p>
            <form>
                <div className='column'>
                    <label>Your name is : {props.name}</label>
                    <input onKeyUp={props.fctName} className='inputInfos' type="text" placeholder='Vingt-Six' />
                </div>
                <div className='column'>
                    <label>Your email is : {props.email}</label>
                    <input onKeyUp={props.fctEmail} className='inputInfos' type="email" placeholder='vingt_six@email.com' />
                </div>
                <div className='column'>
                    <label>Your phone number is : {props.phone}</label>
                    <input onKeyUp={props.fctPhone} className='inputInfos' type="tel" placeholder='e.g.+1 234 567 890' />
                </div>
            </form>
            <div className='divBtnHome'>
                <button className='btnStep' onClick={props.name === '' || props.email === '' || props.phone === '' ? null : () => props.changeNav(1)}>Next Step</button>
            </div>
        </div>
    );
}