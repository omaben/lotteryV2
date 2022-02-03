import {AnchorFollowCoreModel} from "@/core/AnchorCore/Model/AnchorFollowCoreModel";
import {Application} from "@/lib/Application";
import {AnchorFollowInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorFollowInsertCoreMessage";
import {AnchorFollowUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorFollowUpdateCoreMessage";
import {AnchorFollowSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorFollowSearchCoreMessage";
import {AnchorFollowDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorFollowDeleteCoreMessage";
import {AnchorFollowCountCoreMessage} from "@/core/AnchorCore/Message/AnchorFollowCountCoreMessage";
export class AnchorFollowCoreData {
/**
     * 批量插入
     * @param AnchorFollowList Array<AnchorFollowInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AnchorFollowList : Array<AnchorFollowInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorFollow/InsertBatch.action", {Data:JSON.stringify(AnchorFollowList)});
}
/**
     * 插入
     * @param AnchorFollow  AnchorFollowInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorFollow : AnchorFollowInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorFollow/Insert.action", AnchorFollow);
}
/**
     * 修改用户
     * @param AnchorFollow AnchorFollowUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorFollow : AnchorFollowUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorFollow/Update.action", AnchorFollow);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AnchorFollowCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorFollow/Count.action", where);
}
/**
     * 搜索用户
     * @param where AnchorFollowSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorFollowSearchCoreMessage) : Promise<Array<AnchorFollowCoreModel>>{
return Application.Service.GetContent("Anchor/AnchorFollow/Search.action", where);
}
/**
     * 删除用户
     * @param where AnchorFollowDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AnchorFollowDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorFollow/Delete.action", where);
}
}
