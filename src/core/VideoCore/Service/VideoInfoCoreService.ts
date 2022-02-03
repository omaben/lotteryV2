import {VideoInfoCoreModel} from "@/core/VideoCore/Model/VideoInfoCoreModel";
import {VideoInfoCoreData} from "@/core/VideoCore/Data/VideoInfoCoreData";
import {VideoInfoInsertCoreMessage} from "@/core/VideoCore/Message/VideoInfoInsertCoreMessage";
import {VideoInfoUpdateCoreMessage} from "@/core/VideoCore/Message/VideoInfoUpdateCoreMessage";
import {VideoInfoSearchCoreMessage} from "@/core/VideoCore/Message/VideoInfoSearchCoreMessage";
import {VideoInfoDeleteCoreMessage} from "@/core/VideoCore/Message/VideoInfoDeleteCoreMessage";
import {VideoInfoCountCoreMessage} from "@/core/VideoCore/Message/VideoInfoCountCoreMessage";
export class VideoInfoCoreService {
/**
     * 批量插入
     * @constructor
	 * @param VideoInfoList Array<VideoInfoCoreModel>
     */
public static InsertBatch(VideoInfoList : Array<VideoInfoCoreModel>) : Promise<boolean> {
return VideoInfoCoreData.InsertBatch(VideoInfoList)
}
/**
     * 插入
     * @param VideoInfo VideoInfo : VideoInfoInsertCoreMessage
     * @constructor
     */
public static Insert(VideoInfo : VideoInfoInsertCoreMessage) : Promise<boolean> {
return VideoInfoCoreData.Insert(VideoInfo)
}
/**
     * 修改用户
     * @param VideoInfo VideoInfoUpdateCoreMessage
     * @constructor
     */
public static Update(VideoInfo : VideoInfoUpdateCoreMessage) : Promise<number> {
return VideoInfoCoreData.Update(VideoInfo);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : VideoInfoCountCoreMessage) : Promise<number>{
return VideoInfoCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where VideoInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : VideoInfoSearchCoreMessage) : Promise<Array<VideoInfoCoreModel>>{
return VideoInfoCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : VideoInfoDeleteCoreMessage) : Promise<number>{
return VideoInfoCoreData.Delete(where);
}
}
