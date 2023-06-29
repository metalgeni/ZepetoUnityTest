import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { SpawnInfo, ZepetoPlayers, LocalPlayer } from 'ZEPETO.Character.Controller';
import { WorldService } from 'ZEPETO.World'
import { Quaternion, Vector3 } from 'UnityEngine';
//import { mgLog } from './Common/mgLog';
import { mgLog } from './Common/mgLog';

export default class ZepetoTSTest extends ZepetoScriptBehaviour {

    Start() {
        /*
        ZepetoPlayers.instance.CreatePlayerWithZepetoId("", "[ZEPETO_ID", new SpawnInfo(), true);
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener( () => {
            const player: LocalPlayer = ZepetoPlayers.instance.LocalPlayer;
        });
        */

        //  const spawnInfo = new SpawnInfo();
        //  spawnInfo.position = new Vector3(0,2,0);         
        //  spawnInfo.rotation = Quaternion.Euler(0,0,0); 

        //  const spawnInfo = new SpawnInfo();
        //  spawnInfo.position = new Vector3(0,2,0);         
        //  spawnInfo.rotation = Quaternion.Euler(90,0,0);
        //  ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId, spawnInfo, true);  


        mgLog.log('test test');

        ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId, new SpawnInfo(), true);
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            const player: LocalPlayer = ZepetoPlayers.instance.LocalPlayer;
        });

    }

    // Update() {
    //     mgLog.Log('test update');
    // }

}