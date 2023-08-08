import { Coroutine, RectTransform, Transform, WaitForFixedUpdate, WaitForSeconds } from 'UnityEngine';
import { Button } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { mgLog } from '../Common/mgLog';
import TestSt from './testst';


type btnCallback1 = () => void;

export default class TestManager extends ZepetoScriptBehaviour {

    @SerializeField() private testButtons: Button[];

    private _sendCoroutine: Coroutine;


    // TypeError: this.stopMyCoroutine is not a function
    //private _callbacks: btnCallback1[] = [this.firstButton, this.firstButton,];


    Start() {
        mgLog.log('test manager started');

        this._sendCoroutine = null;
        //this._sendCoroutine = this.StartCoroutine(this.testCoroutine());
    }

    OnEnable() {
        //mgLog.log(' on enable  ');

        this.testButtons[0].onClick.AddListener(
            () => {

                mgLog.log('<Color=Cyan> button onClicked </Color>');
                this.stopMyCoroutine();
            }
        );

        /*        
        // TypeError: this.stopMyCoroutine is not a function
        this._callbacks.forEach((callback, index) => {

            if (index == 0)
                return;

            mgLog.log(`<Color=Orange> button asinged index - ${index}...</Color>`);

            this.testButtons[index].onClick.AddListener(
                callback        
            );

        });
        */
    }



    stopMyCoroutine(): void {

        //mgLog.log(' stoped!!!!  ');

        if (this._sendCoroutine != null) {
            this.StopCoroutine(this._sendCoroutine);
            this._sendCoroutine = null;
        }

        return;

    }


    firstButton() {
        mgLog.log('<Color=Orange> called first button </Color>');        
        this.stopMyCoroutine();
    }


    OnDisable() {
        //mgLog.log(' on disable  ');
    }


    *testCoroutine() {

        let wait = new WaitForSeconds(1);
        for (let i = 0; i < 10; ++i) {

            yield new WaitForFixedUpdate();
            yield wait;

            mgLog.log(`wait 1sec - index ${i}`);

            TestSt.getInstance().PrintInfo();
        }

        this._sendCoroutine = null;
    }


}