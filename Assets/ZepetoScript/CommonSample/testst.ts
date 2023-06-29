import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import  { mgLog }  from '../Common/mgLog';
//import  { Singleton }  from '../Common/mgLog';


export default class TestSt extends ZepetoScriptBehaviour {
//export default class testst extends SingletonTemplate<testst> {

    private static instance: TestSt;
    public static getInstance(): TestSt {
        if (!TestSt.instance) {
            TestSt.instance = new TestSt();
        }
        return TestSt.instance;
      }
  

    Start() {    
        mgLog.log('testst1 started');  
    }

    public PrintInfo() :void
    {
        mgLog.log(' testst1 info');
    }

}