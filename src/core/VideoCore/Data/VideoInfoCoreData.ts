import {VideoInfoCoreModel} from "@/core/VideoCore/Model/VideoInfoCoreModel";
import {Application} from "@/lib/Application";
import {VideoInfoInsertCoreMessage} from "@/core/VideoCore/Message/VideoInfoInsertCoreMessage";
import {VideoInfoUpdateCoreMessage} from "@/core/VideoCore/Message/VideoInfoUpdateCoreMessage";
import {VideoInfoSearchCoreMessage} from "@/core/VideoCore/Message/VideoInfoSearchCoreMessage";
import {VideoInfoDeleteCoreMessage} from "@/core/VideoCore/Message/VideoInfoDeleteCoreMessage";
import {VideoInfoCountCoreMessage} from "@/core/VideoCore/Message/VideoInfoCountCoreMessage";
export class VideoInfoCoreData {
/**
     * 批量插入
     * @param VideoInfoList Array<VideoInfoInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(VideoInfoList : Array<VideoInfoInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Video/VideoInfo/InsertBatch.action", {Data:JSON.stringify(VideoInfoList)});
}
/**
     * 插入
     * @param VideoInfo  VideoInfoInsertCoreMessage
     * @constructor
     */
public static Insert(VideoInfo : VideoInfoInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Video/VideoInfo/Insert.action", VideoInfo);
}
/**
     * 修改用户
     * @param VideoInfo VideoInfoUpdateCoreMessage
     * @constructor
     */
public static Update(VideoInfo : VideoInfoUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Video/VideoInfo/Update.action", VideoInfo);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : VideoInfoCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Video/VideoInfo/Count.action", where);
}
/**
     * 搜索用户
     * @param where VideoInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : VideoInfoSearchCoreMessage) : Promise<Array<VideoInfoCoreModel>>{
return Application.Service.GetContent("Video/VideoInfo/Search.action", where);
}
/**
     * 删除用户
     * @param where VideoInfoDeleteCoreMessage
     * @constructor
     */
public static Delete(where : VideoInfoDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Video/VideoInfo/Delete.action", where);
}
}
