import {VideoClassificationCoreModel} from "@/core/VideoCore/Model/VideoClassificationCoreModel";
import {Application} from "@/lib/Application";
import {VideoClassificationInsertCoreMessage} from "@/core/VideoCore/Message/VideoClassificationInsertCoreMessage";
import {VideoClassificationUpdateCoreMessage} from "@/core/VideoCore/Message/VideoClassificationUpdateCoreMessage";
import {VideoClassificationSearchCoreMessage} from "@/core/VideoCore/Message/VideoClassificationSearchCoreMessage";
import {VideoClassificationDeleteCoreMessage} from "@/core/VideoCore/Message/VideoClassificationDeleteCoreMessage";
import {VideoClassificationCountCoreMessage} from "@/core/VideoCore/Message/VideoClassificationCountCoreMessage";
export class VideoClassificationCoreData {
/**
     * 批量插入
     * @param VideoClassificationList Array<VideoClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(VideoClassificationList : Array<VideoClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Video/VideoClassification/InsertBatch.action", {Data:JSON.stringify(VideoClassificationList)});
}
/**
     * 插入
     * @param VideoClassification  VideoClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(VideoClassification : VideoClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Video/VideoClassification/Insert.action", VideoClassification);
}
/**
     * 修改用户
     * @param VideoClassification VideoClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(VideoClassification : VideoClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Video/VideoClassification/Update.action", VideoClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : VideoClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Video/VideoClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where VideoClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : VideoClassificationSearchCoreMessage) : Promise<Array<VideoClassificationCoreModel>>{
return Application.Service.GetContent("Video/VideoClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where VideoClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : VideoClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Video/VideoClassification/Delete.action", where);
}
}
