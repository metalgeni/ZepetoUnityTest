import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { mgLog } from './Common/mgLog';

export default class TestManager2 extends ZepetoScriptBehaviour {

    Start() {    
        mgLog.log('test');
    }

}


