import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import  { mgLog }  from '../Common/mgLog';
//import  { Singleton }  from '../Common/mgLog';


export default class TestSt2 extends ZepetoScriptBehaviour {
//export default class testst2 extends SingletonTemplate<ZepetoScriptBehaviour> {

    Start() {    
        mgLog.log('testst2 started');  
    }
    
    public PrintInfo()
    {
        mgLog.log(' testst2 info');
    }

}