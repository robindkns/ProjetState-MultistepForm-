import './Sidebar.sass';
import urlSidebar from '../../assets/sidebar.svg';

export default function Sidebar(props) {
    return (
        <div className="sidebar">
            <img src={urlSidebar} alt="sidebar" id='sidebarBg' />
            <div className="sidebarContent">
                <div className="steps">
                    <span className={props.nav === 0 ? 'stepSpanActive' : 'stepSpan'}>1</span>
                    <div>
                        <h4>STEP 1</h4>
                        <h2>YOUR INFO</h2>
                    </div>
                </div>
                <div className="steps">
                    <span className={props.nav === 1 ? 'stepSpanActive' : 'stepSpan'}>2</span>
                    <div>
                        <h4>STEP 2</h4>
                        <h2>SELECT PLAN</h2>
                    </div>
                </div>
                <div className="steps">
                    <span className={props.nav === 2 ? 'stepSpanActive' : 'stepSpan'}>3</span>
                    <div>
                        <h4>STEP 3</h4>
                        <h2>ADD-ONS</h2>
                    </div>
                </div>
                <div className="steps">
                    <span className={props.nav === 3 ? 'stepSpanActive' : 'stepSpan'}>4</span>
                    <div>
                        <h4>STEP 4</h4>
                        <h2>SUMMARY</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}