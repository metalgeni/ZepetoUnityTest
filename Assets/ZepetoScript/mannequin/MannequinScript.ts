import { ZepetoScriptBehaviour } from 'ZEPETO.Script';
import { ZepetoPlayers, SpawnInfo } from 'ZEPETO.Character.Controller';
import { WorldService } from 'ZEPETO.World';
import { ItemContentsRequest, Mannequin, MannequinComponent, MannequinInteractable, MannequinPreviewer } from 'ZEPETO.Mannequin';
import { Coroutine, Object, WaitForSeconds } from 'UnityEngine';
import { mgLog } from '../Common/mgLog';

export default class MannequinScript extends ZepetoScriptBehaviour {

    private _previewer: MannequinPreviewer;

    private _sendCoroutine: Coroutine;

    Start() {
        this.mannequinStart();    
        //this._sendCoroutine = this.StartCoroutine(this.testCoroutine());
    }

    *testCoroutine() {


        mgLog.log(' start coroutine');
        yield new WaitForSeconds(3);


        mgLog.log(' coroutine wait end');
        this.mannequinStart();

        
        this._sendCoroutine = null;
    }

    

    mannequinStart()
    {
        // Code that creates a ZEPETO character based on the logged in ID  
        // ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId, SpawnInfo.Default, true);
      
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            const character = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;            
            character.gameObject.AddComponent<MannequinInteractable>();
        });

        // Find all Mannequin components
        const mannequins = Object.FindObjectsOfType<MannequinComponent>();

        mannequins.forEach(m => {
            // Enter the Collider
            m.onActive.AddListener(contents => {
                Mannequin.OpenUI(contents);
                const zepetoContext = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character.Context;
                this._previewer = new MannequinPreviewer(zepetoContext, contents);
                this._previewer.PreviewContents();
            });

            // Exit the Collider
            m.onCancel.AddListener(() => {
                Mannequin.CloseUI();
                this._previewer?.ResetContents();
            });
        });

    }


    
}