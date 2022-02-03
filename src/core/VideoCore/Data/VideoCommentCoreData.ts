import {VideoCommentCoreModel} from "@/core/VideoCore/Model/VideoCommentCoreModel";
import {Application} from "@/lib/Application";
import {VideoCommentInsertCoreMessage} from "@/core/VideoCore/Message/VideoCommentInsertCoreMessage";
import {VideoCommentUpdateCoreMessage} from "@/core/VideoCore/Message/VideoCommentUpdateCoreMessage";
import {VideoCommentSearchCoreMessage} from "@/core/VideoCore/Message/VideoCommentSearchCoreMessage";
import {VideoCommentDeleteCoreMessage} from "@/core/VideoCore/Message/VideoCommentDeleteCoreMessage";
import {VideoCommentCountCoreMessage} from "@/core/VideoCore/Message/VideoCommentCountCoreMessage";
export class VideoCommentCoreData {
/**
     * 批量插入
     * @param VideoCommentList Array<VideoCommentInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(VideoCommentList : Array<VideoCommentInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Video/VideoComment/InsertBatch.action", {Data:JSON.stringify(VideoCommentList)});
}
/**
     * 插入
     * @param VideoComment  VideoCommentInsertCoreMessage
     * @constructor
     */
public static Insert(VideoComment : VideoCommentInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Video/VideoComment/Insert.action", VideoComment);
}
/**
     * 修改用户
     * @param VideoComment VideoCommentUpdateCoreMessage
     * @constructor
     */
public static Update(VideoComment : VideoCommentUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Video/VideoComment/Update.action", VideoComment);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : VideoCommentCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Video/VideoComment/Count.action", where);
}
/**
     * 搜索用户
     * @param where VideoCommentSearchCoreMessage
     * @constructor
     */
public static Search(where : VideoCommentSearchCoreMessage) : Promise<Array<VideoCommentCoreModel>>{
return Application.Service.GetContent("Video/VideoComment/Search.action", where);
}
/**
     * 删除用户
     * @param where VideoCommentDeleteCoreMessage
     * @constructor
     */
public static Delete(where : VideoCommentDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Video/VideoComment/Delete.action", where);
}
}
