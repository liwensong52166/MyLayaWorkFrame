import ViewBase from "../ViewBase";
import RoleSkin from "./RoleSkin";
import User from "../../User/User";
import SoundMgr from "../../Mgr/SoundMgr";
import ViewMgr, { ViewDef } from "../../Mgr/ViewMgr";


export default class GameStart extends ViewBase{
    protected settingBtn : Laya.Sprite  = null;
    protected startBtn : Laya.Sprite  = null;
    protected selectSkinZone : Laya.Sprite  = null;

    protected leftBtn : Laya.Sprite  = null;
    protected rightBtn : Laya.Sprite  = null;
    protected role : Laya.Sprite  = null;

    protected roleSkin : RoleSkin = null;

    onAwake()
    {
        this.settingBtn = this.owner.getChildByName("SettingBtn") as Laya.Sprite;
        this.startBtn = this.owner.getChildByName("StartBtn") as Laya.Sprite;
        this.selectSkinZone = this.owner.getChildByName("SelectSkinZone") as Laya.Sprite;

        this.leftBtn = this.selectSkinZone.getChildByName("LeftBtn") as Laya.Sprite;
        this.rightBtn = this.selectSkinZone.getChildByName("RightBtn") as Laya.Sprite;
        this.role = this.selectSkinZone.getChildByName("Role") as Laya.Sprite;

        this.roleSkin = this.role.getComponent(RoleSkin);

        this.ShowSkinBtn();
        this.ShowSettingBtn();
    }

    AddEvent_CloudFlame(){
        this.settingBtn.on(Laya.Event.CLICK,this,this.OnSettingBtn);
        this.startBtn.on(Laya.Event.CLICK,this,this.OnStartBtn);
        this.leftBtn.on(Laya.Event.CLICK,this,this.OnSkinChangeBtn,[true]);
        this.rightBtn.on(Laya.Event.CLICK,this,this.OnSkinChangeBtn,[false]);
    }

    RemoveEvent_CloudFlame(){
        this.settingBtn.off(Laya.Event.CLICK,this,this.OnSettingBtn);
        this.startBtn.off(Laya.Event.CLICK,this,this.OnStartBtn);
        this.leftBtn.off(Laya.Event.CLICK,this,this.OnSkinChangeBtn);
        this.rightBtn.off(Laya.Event.CLICK,this,this.OnSkinChangeBtn);
    }

    private ShowSkinBtn(): void{
        this.leftBtn.visible = User.skinIndex > 0 ? true: false;
        this.rightBtn.visible = User.skinIndex < User.skinMax ? true: false;

    }

    private ShowSettingBtn(): void{
        (this.settingBtn as Laya.Clip).skin = SoundMgr.instance.Enabled_CloudFlame ? "GameCommon/Sound_Yes.png" : "GameCommon/Sound_No.png";
    }

    private OnSettingBtn(): void{
        SoundMgr.instance.Enabled_CloudFlame = !SoundMgr.instance.Enabled_CloudFlame;
        if(SoundMgr.instance.Enabled_CloudFlame){
            SoundMgr.instance.PlayBGM_CloudFlame("bgm");
        }
        this.ShowSettingBtn();
    }    

    private OnStartBtn(): void{
        ViewMgr.instance.OpenView_CloudFlame(ViewDef.Gaming,null,()=>{
            ViewMgr.instance.CloseView_CloudFlame(ViewDef.GameStart);
        });
    }

    private OnSkinChangeBtn(IsLeft: boolean): void{
        User.skinIndex = IsLeft ? User.skinIndex - 1 : User.skinIndex + 1;
        this.ShowSkinBtn();
        this.roleSkin.ChangeSkin();
    }
    
}