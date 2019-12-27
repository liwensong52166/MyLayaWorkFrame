/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import GameMgr from "./Mgr/GameMgr"
import GameOver from "./View/GameOver/GameOver"
import GameStart from "./View/GameStart/GameStart"
import Gaming from "./View/Gaming/Gaming"
import LoadingView from "./View/LoadingView"
import Rule from "./View/Rule/Rule"
import Setting from "./View/Setting/Setting"
import TipsView from "./View/TipsView/TipsView"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=640;
    static height:number=1136;
    static scaleMode:string="fixedwidth";
    static screenMode:string="none";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="GameMain.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("Mgr/GameMgr.ts",GameMgr);
        reg("View/GameOver/GameOver.ts",GameOver);
        reg("View/GameStart/GameStart.ts",GameStart);
        reg("View/Gaming/Gaming.ts",Gaming);
        reg("View/LoadingView.ts",LoadingView);
        reg("View/Rule/Rule.ts",Rule);
        reg("View/Setting/Setting.ts",Setting);
        reg("View/TipsView/TipsView.ts",TipsView);
    }
}
GameConfig.init();