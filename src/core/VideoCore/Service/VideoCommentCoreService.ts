import {VideoCommentCoreModel} from "@/core/VideoCore/Model/VideoCommentCoreModel";
import {VideoCommentCoreData} from "@/core/VideoCore/Data/VideoCommentCoreData";
import {VideoCommentInsertCoreMessage} from "@/core/VideoCore/Message/VideoCommentInsertCoreMessage";
import {VideoCommentUpdateCoreMessage} from "@/core/VideoCore/Message/VideoCommentUpdateCoreMessage";
import {VideoCommentSearchCoreMessage} from "@/core/VideoCore/Message/VideoCommentSearchCoreMessage";
import {VideoCommentDeleteCoreMessage} from "@/core/VideoCore/Message/VideoCommentDeleteCoreMessage";
import {VideoCommentCountCoreMessage} from "@/core/VideoCore/Message/VideoCommentCountCoreMessage";
export class VideoCommentCoreService {
/**
     * 批量插入
     * @constructor
	 * @param VideoCommentList Array<VideoCommentCoreModel>
     */
public static InsertBatch(VideoCommentList : Array<VideoCommentCoreModel>) : Promise<boolean> {
return VideoCommentCoreData.InsertBatch(VideoCommentList)
}
/**
     * 插入
     * @param VideoComment VideoComment : VideoCommentInsertCoreMessage
     * @constructor
     */
public static Insert(VideoComment : VideoCommentInsertCoreMessage) : Promise<boolean> {
return VideoCommentCoreData.Insert(VideoComment)
}
/**
     * 修改用户
     * @param VideoComment VideoCommentUpdateCoreMessage
     * @constructor
     */
public static Update(VideoComment : VideoCommentUpdateCoreMessage) : Promise<number> {
return VideoCommentCoreData.Update(VideoComment);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : VideoCommentCountCoreMessage) : Promise<number>{
return VideoCommentCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where VideoCommentSearchCoreMessage
     * @constructor
     */
public static Search(where : VideoCommentSearchCoreMessage) : Promise<Array<VideoCommentCoreModel>>{
return VideoCommentCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : VideoCommentDeleteCoreMessage) : Promise<number>{
return VideoCommentCoreData.Delete(where);
}
}
