import {AnnouncementClassificationCoreModel} from "@/core/AnnouncementCore/Model/AnnouncementClassificationCoreModel";
import {AnnouncementClassificationCoreData} from "@/core/AnnouncementCore/Data/AnnouncementClassificationCoreData";
import {AnnouncementClassificationInsertCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementClassificationInsertCoreMessage";
import {AnnouncementClassificationUpdateCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementClassificationUpdateCoreMessage";
import {AnnouncementClassificationSearchCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementClassificationSearchCoreMessage";
import {AnnouncementClassificationDeleteCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementClassificationDeleteCoreMessage";
import {AnnouncementClassificationCountCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementClassificationCountCoreMessage";
export class AnnouncementClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AnnouncementClassificationList Array<AnnouncementClassificationCoreModel>
     */
public static InsertBatch(AnnouncementClassificationList : Array<AnnouncementClassificationCoreModel>) : Promise<boolean> {
return AnnouncementClassificationCoreData.InsertBatch(AnnouncementClassificationList)
}
/**
     * 插入
     * @param AnnouncementClassification AnnouncementClassification : AnnouncementClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(AnnouncementClassification : AnnouncementClassificationInsertCoreMessage) : Promise<boolean> {
return AnnouncementClassificationCoreData.Insert(AnnouncementClassification)
}
/**
     * 修改用户
     * @param AnnouncementClassification AnnouncementClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(AnnouncementClassification : AnnouncementClassificationUpdateCoreMessage) : Promise<number> {
return AnnouncementClassificationCoreData.Update(AnnouncementClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AnnouncementClassificationCountCoreMessage) : Promise<number>{
return AnnouncementClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AnnouncementClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : AnnouncementClassificationSearchCoreMessage) : Promise<Array<AnnouncementClassificationCoreModel>>{
return AnnouncementClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AnnouncementClassificationDeleteCoreMessage) : Promise<number>{
return AnnouncementClassificationCoreData.Delete(where);
}
}
