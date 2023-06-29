import { Coroutine, RectTransform, Transform, WaitForFixedUpdate, WaitForSeconds } from 'UnityEngine';
import { Button } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { mgLog } from '../Common/mgLog';
import TestSt from './testst';


type btnCallback1 = () => void;

export default class TestManager extends ZepetoScriptBehaviour {



    //@SerializeField() private testButton: Button;

    @SerializeField() private testButtons: Button[];

    private _sendCoroutine :Coroutine;


    
    private _callbacks: btnCallback1[] = [ this.firstButton, ]; 

    
    Start() {    
        mgLog.log('test manager started');

        this._sendCoroutine = this.StartCoroutine(this.ForceReTargetCoroutine());
    }

    OnEnable()
    {
        mgLog.log( ' on enable  ');
        // this.testButton.onClick.AddListener(
        //     () => {

        //         mgLog.log( ' button onClicked ');
        //         this.StopTimer();
        //     } 
        // );        

        this._callbacks.forEach(( callback, index ) => {
            //this.testButtons[index].onClick.AddListener( () => callback );     
            this.testButtons[index].onClick.AddListener( callback );

        });
    }

    firstButton()
    {
        mgLog.log( ' button onClicked ');
        this.StopTimer();
    }


    OnDisable()
    {
        mgLog.log( ' on disable  ');
    }


    *ForceReTargetCoroutine() {

        let wait = new WaitForSeconds(1); 
        for( let i = 0; i < 10; ++i) {
            //yield new WaitForSeconds(1);

            yield new WaitForFixedUpdate();    

            yield wait;

            mgLog.log(`wait 1sec - index ${i}`);
            //console.log(`wait 1sec - index ${i}`);
    
            TestSt.getInstance().PrintInfo();    
        }
    }

    StopTimer()
    {

        mgLog.log( ' stoped!!!!  ');

        if( this._sendCoroutine!= null) {
            this.StopCoroutine( this._sendCoroutine);
            this._sendCoroutine = null;    
        }

    }

}