import {AnchorClassficationCoreModel} from "@/core/AnchorCore/Model/AnchorClassficationCoreModel";
import {Application} from "@/lib/Application";
import {AnchorClassficationInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorClassficationInsertCoreMessage";
import {AnchorClassficationUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorClassficationUpdateCoreMessage";
import {AnchorClassficationSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorClassficationSearchCoreMessage";
import {AnchorClassficationDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorClassficationDeleteCoreMessage";
import {AnchorClassficationCountCoreMessage} from "@/core/AnchorCore/Message/AnchorClassficationCountCoreMessage";
export class AnchorClassficationCoreData {
/**
     * 批量插入
     * @param AnchorClassficationList Array<AnchorClassficationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AnchorClassficationList : Array<AnchorClassficationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorClassfication/InsertBatch.action", {Data:JSON.stringify(AnchorClassficationList)});
}
/**
     * 插入
     * @param AnchorClassfication  AnchorClassficationInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorClassfication : AnchorClassficationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorClassfication/Insert.action", AnchorClassfication);
}
/**
     * 修改用户
     * @param AnchorClassfication AnchorClassficationUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorClassfication : AnchorClassficationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorClassfication/Update.action", AnchorClassfication);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AnchorClassficationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorClassfication/Count.action", where);
}
/**
     * 搜索用户
     * @param where AnchorClassficationSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorClassficationSearchCoreMessage) : Promise<Array<AnchorClassficationCoreModel>>{
return Application.Service.GetContent("Anchor/AnchorClassfication/Search.action", where);
}
/**
     * 删除用户
     * @param where AnchorClassficationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AnchorClassficationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorClassfication/Delete.action", where);
}
}
