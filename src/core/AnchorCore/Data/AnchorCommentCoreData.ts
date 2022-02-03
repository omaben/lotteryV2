import {AnchorCommentCoreModel} from "@/core/AnchorCore/Model/AnchorCommentCoreModel";
import {Application} from "@/lib/Application";
import {AnchorCommentInsertCoreMessage} from "@/core/AnchorCore/Message/AnchorCommentInsertCoreMessage";
import {AnchorCommentUpdateCoreMessage} from "@/core/AnchorCore/Message/AnchorCommentUpdateCoreMessage";
import {AnchorCommentSearchCoreMessage} from "@/core/AnchorCore/Message/AnchorCommentSearchCoreMessage";
import {AnchorCommentDeleteCoreMessage} from "@/core/AnchorCore/Message/AnchorCommentDeleteCoreMessage";
import {AnchorCommentCountCoreMessage} from "@/core/AnchorCore/Message/AnchorCommentCountCoreMessage";
export class AnchorCommentCoreData {
/**
     * 批量插入
     * @param AnchorCommentList Array<AnchorCommentInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AnchorCommentList : Array<AnchorCommentInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorComment/InsertBatch.action", {Data:JSON.stringify(AnchorCommentList)});
}
/**
     * 插入
     * @param AnchorComment  AnchorCommentInsertCoreMessage
     * @constructor
     */
public static Insert(AnchorComment : AnchorCommentInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Anchor/AnchorComment/Insert.action", AnchorComment);
}
/**
     * 修改用户
     * @param AnchorComment AnchorCommentUpdateCoreMessage
     * @constructor
     */
public static Update(AnchorComment : AnchorCommentUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorComment/Update.action", AnchorComment);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AnchorCommentCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorComment/Count.action", where);
}
/**
     * 搜索用户
     * @param where AnchorCommentSearchCoreMessage
     * @constructor
     */
public static Search(where : AnchorCommentSearchCoreMessage) : Promise<Array<AnchorCommentCoreModel>>{
return Application.Service.GetContent("Anchor/AnchorComment/Search.action", where);
}
/**
     * 删除用户
     * @param where AnchorCommentDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AnchorCommentDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Anchor/AnchorComment/Delete.action", where);
}
}
