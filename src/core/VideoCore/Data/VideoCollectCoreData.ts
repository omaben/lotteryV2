import {VideoCollectCoreModel} from "@/core/VideoCore/Model/VideoCollectCoreModel";
import {Application} from "@/lib/Application";
import {VideoCollectInsertCoreMessage} from "@/core/VideoCore/Message/VideoCollectInsertCoreMessage";
import {VideoCollectUpdateCoreMessage} from "@/core/VideoCore/Message/VideoCollectUpdateCoreMessage";
import {VideoCollectSearchCoreMessage} from "@/core/VideoCore/Message/VideoCollectSearchCoreMessage";
import {VideoCollectDeleteCoreMessage} from "@/core/VideoCore/Message/VideoCollectDeleteCoreMessage";
import {VideoCollectCountCoreMessage} from "@/core/VideoCore/Message/VideoCollectCountCoreMessage";
export class VideoCollectCoreData {
/**
     * 批量插入
     * @param VideoCollectList Array<VideoCollectInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(VideoCollectList : Array<VideoCollectInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Video/VideoCollect/InsertBatch.action", {Data:JSON.stringify(VideoCollectList)});
}
/**
     * 插入
     * @param VideoCollect  VideoCollectInsertCoreMessage
     * @constructor
     */
public static Insert(VideoCollect : VideoCollectInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Video/VideoCollect/Insert.action", VideoCollect);
}
/**
     * 修改用户
     * @param VideoCollect VideoCollectUpdateCoreMessage
     * @constructor
     */
public static Update(VideoCollect : VideoCollectUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Video/VideoCollect/Update.action", VideoCollect);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : VideoCollectCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Video/VideoCollect/Count.action", where);
}
/**
     * 搜索用户
     * @param where VideoCollectSearchCoreMessage
     * @constructor
     */
public static Search(where : VideoCollectSearchCoreMessage) : Promise<Array<VideoCollectCoreModel>>{
return Application.Service.GetContent("Video/VideoCollect/Search.action", where);
}
/**
     * 删除用户
     * @param where VideoCollectDeleteCoreMessage
     * @constructor
     */
public static Delete(where : VideoCollectDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Video/VideoCollect/Delete.action", where);
}
}
