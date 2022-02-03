import {VideoClassificationCoreModel} from "@/core/VideoCore/Model/VideoClassificationCoreModel";
import {VideoClassificationCoreData} from "@/core/VideoCore/Data/VideoClassificationCoreData";
import {VideoClassificationInsertCoreMessage} from "@/core/VideoCore/Message/VideoClassificationInsertCoreMessage";
import {VideoClassificationUpdateCoreMessage} from "@/core/VideoCore/Message/VideoClassificationUpdateCoreMessage";
import {VideoClassificationSearchCoreMessage} from "@/core/VideoCore/Message/VideoClassificationSearchCoreMessage";
import {VideoClassificationDeleteCoreMessage} from "@/core/VideoCore/Message/VideoClassificationDeleteCoreMessage";
import {VideoClassificationCountCoreMessage} from "@/core/VideoCore/Message/VideoClassificationCountCoreMessage";
export class VideoClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param VideoClassificationList Array<VideoClassificationCoreModel>
     */
public static InsertBatch(VideoClassificationList : Array<VideoClassificationCoreModel>) : Promise<boolean> {
return VideoClassificationCoreData.InsertBatch(VideoClassificationList)
}
/**
     * 插入
     * @param VideoClassification VideoClassification : VideoClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(VideoClassification : VideoClassificationInsertCoreMessage) : Promise<boolean> {
return VideoClassificationCoreData.Insert(VideoClassification)
}
/**
     * 修改用户
     * @param VideoClassification VideoClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(VideoClassification : VideoClassificationUpdateCoreMessage) : Promise<number> {
return VideoClassificationCoreData.Update(VideoClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : VideoClassificationCountCoreMessage) : Promise<number>{
return VideoClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where VideoClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : VideoClassificationSearchCoreMessage) : Promise<Array<VideoClassificationCoreModel>>{
return VideoClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : VideoClassificationDeleteCoreMessage) : Promise<number>{
return VideoClassificationCoreData.Delete(where);
}
}
