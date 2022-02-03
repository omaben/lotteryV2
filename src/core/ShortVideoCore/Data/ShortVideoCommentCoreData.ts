import {ShortVideoCommentCoreModel} from "@/core/ShortVideoCore/Model/ShortVideoCommentCoreModel";
import {Application} from "@/lib/Application";
import {ShortVideoCommentInsertCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCommentInsertCoreMessage";
import {ShortVideoCommentUpdateCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCommentUpdateCoreMessage";
import {ShortVideoCommentSearchCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCommentSearchCoreMessage";
import {ShortVideoCommentDeleteCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCommentDeleteCoreMessage";
import {ShortVideoCommentCountCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCommentCountCoreMessage";
export class ShortVideoCommentCoreData {
/**
     * 批量插入
     * @param ShortVideoCommentList Array<ShortVideoCommentInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(ShortVideoCommentList : Array<ShortVideoCommentInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("ShortVideo/ShortVideoComment/InsertBatch.action", {Data:JSON.stringify(ShortVideoCommentList)});
}
/**
     * 插入
     * @param ShortVideoComment  ShortVideoCommentInsertCoreMessage
     * @constructor
     */
public static Insert(ShortVideoComment : ShortVideoCommentInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("ShortVideo/ShortVideoComment/Insert.action", ShortVideoComment);
}
/**
     * 修改用户
     * @param ShortVideoComment ShortVideoCommentUpdateCoreMessage
     * @constructor
     */
public static Update(ShortVideoComment : ShortVideoCommentUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("ShortVideo/ShortVideoComment/Update.action", ShortVideoComment);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : ShortVideoCommentCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("ShortVideo/ShortVideoComment/Count.action", where);
}
/**
     * 搜索用户
     * @param where ShortVideoCommentSearchCoreMessage
     * @constructor
     */
public static Search(where : ShortVideoCommentSearchCoreMessage) : Promise<Array<ShortVideoCommentCoreModel>>{
return Application.Service.GetContent("ShortVideo/ShortVideoComment/Search.action", where);
}
/**
     * 删除用户
     * @param where ShortVideoCommentDeleteCoreMessage
     * @constructor
     */
public static Delete(where : ShortVideoCommentDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("ShortVideo/ShortVideoComment/Delete.action", where);
}
}
