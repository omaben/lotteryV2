import {VideoCollectCoreModel} from "@/core/VideoCore/Model/VideoCollectCoreModel";
import {VideoCollectCoreData} from "@/core/VideoCore/Data/VideoCollectCoreData";
import {VideoCollectInsertCoreMessage} from "@/core/VideoCore/Message/VideoCollectInsertCoreMessage";
import {VideoCollectUpdateCoreMessage} from "@/core/VideoCore/Message/VideoCollectUpdateCoreMessage";
import {VideoCollectSearchCoreMessage} from "@/core/VideoCore/Message/VideoCollectSearchCoreMessage";
import {VideoCollectDeleteCoreMessage} from "@/core/VideoCore/Message/VideoCollectDeleteCoreMessage";
import {VideoCollectCountCoreMessage} from "@/core/VideoCore/Message/VideoCollectCountCoreMessage";
export class VideoCollectCoreService {
/**
     * 批量插入
     * @constructor
	 * @param VideoCollectList Array<VideoCollectCoreModel>
     */
public static InsertBatch(VideoCollectList : Array<VideoCollectCoreModel>) : Promise<boolean> {
return VideoCollectCoreData.InsertBatch(VideoCollectList)
}
/**
     * 插入
     * @param VideoCollect VideoCollect : VideoCollectInsertCoreMessage
     * @constructor
     */
public static Insert(VideoCollect : VideoCollectInsertCoreMessage) : Promise<boolean> {
return VideoCollectCoreData.Insert(VideoCollect)
}
/**
     * 修改用户
     * @param VideoCollect VideoCollectUpdateCoreMessage
     * @constructor
     */
public static Update(VideoCollect : VideoCollectUpdateCoreMessage) : Promise<number> {
return VideoCollectCoreData.Update(VideoCollect);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : VideoCollectCountCoreMessage) : Promise<number>{
return VideoCollectCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where VideoCollectSearchCoreMessage
     * @constructor
     */
public static Search(where : VideoCollectSearchCoreMessage) : Promise<Array<VideoCollectCoreModel>>{
return VideoCollectCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : VideoCollectDeleteCoreMessage) : Promise<number>{
return VideoCollectCoreData.Delete(where);
}
}
