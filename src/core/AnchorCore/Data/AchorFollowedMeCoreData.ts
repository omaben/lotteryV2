import {AchorFollowedMeCoreModel} from "@/core/AnchorCore/Model/AchorFollowedMeCoreModel";
import {Application} from "@/lib/Application";
import {AchorFollowedMeInsertCoreMessage} from "@/core/AnchorCore/Message/AchorFollowedMeInsertCoreMessage";
import {AchorFollowedMeUpdateCoreMessage} from "@/core/AnchorCore/Message/AchorFollowedMeUpdateCoreMessage";
import {AchorFollowedMeSearchCoreMessage} from "@/core/AnchorCore/Message/AchorFollowedMeSearchCoreMessage";
import {AchorFollowedMeDeleteCoreMessage} from "@/core/AnchorCore/Message/AchorFollowedMeDeleteCoreMessage";
import {AchorFollowedMeCountCoreMessage} from "@/core/AnchorCore/Message/AchorFollowedMeCountCoreMessage";
export class AchorFollowedMeCoreData {
/**
     * 批量插入
     * @param AchorFollowedMeList Array<AchorFollowedMeInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AchorFollowedMeList : Array<AchorFollowedMeInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AchorFollowedMe/InsertBatch.action", {Data:JSON.stringify(AchorFollowedMeList)});
}
/**
     * 插入
     * @param AchorFollowedMe  AchorFollowedMeInsertCoreMessage
     * @constructor
     */
public static Insert(AchorFollowedMe : AchorFollowedMeInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AchorFollowedMe/Insert.action", AchorFollowedMe);
}
/**
     * 修改用户
     * @param AchorFollowedMe AchorFollowedMeUpdateCoreMessage
     * @constructor
     */
public static Update(AchorFollowedMe : AchorFollowedMeUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AchorFollowedMe/Update.action", AchorFollowedMe);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AchorFollowedMeCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AchorFollowedMe/Count.action", where);
}
/**
     * 搜索用户
     * @param where AchorFollowedMeSearchCoreMessage
     * @constructor
     */
public static Search(where : AchorFollowedMeSearchCoreMessage) : Promise<Array<AchorFollowedMeCoreModel>>{
return Application.Service.GetContent("Anchor/AchorFollowedMe/Search.action", where);
}
/**
     * 删除用户
     * @param where AchorFollowedMeDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AchorFollowedMeDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AchorFollowedMe/Delete.action", where);
}
}
