import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

// export default class mgLog extends ZepetoScriptBehaviour {
//     Start() {    
//     }
// }


export class mgLog {    
    private static logDisable: bool = false;
    static log(...data: any[]): void {
        if (this.logDisable == true)
            return;
        console.log(data);
    }

    static warn(...data: any[]): void {
        if (this.logDisable == true)
            return;
        console.warn(data);
    }

    static error(...data: any[]): void {
        if (this.logDisable == true)
            return;
        console.error(data);
    }
}





