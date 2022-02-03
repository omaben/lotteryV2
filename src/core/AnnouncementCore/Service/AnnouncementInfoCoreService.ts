import {AnnouncementInfoCoreModel} from "@/core/AnnouncementCore/Model/AnnouncementInfoCoreModel";
import {AnnouncementInfoCoreData} from "@/core/AnnouncementCore/Data/AnnouncementInfoCoreData";
import {AnnouncementInfoInsertCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementInfoInsertCoreMessage";
import {AnnouncementInfoUpdateCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementInfoUpdateCoreMessage";
import {AnnouncementInfoSearchCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementInfoSearchCoreMessage";
import {AnnouncementInfoDeleteCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementInfoDeleteCoreMessage";
import {AnnouncementInfoCountCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementInfoCountCoreMessage";
export class AnnouncementInfoCoreService {
/**
     * 批量插入
     * @constructor
	 * @param AnnouncementInfoList Array<AnnouncementInfoCoreModel>
     */
public static InsertBatch(AnnouncementInfoList : Array<AnnouncementInfoCoreModel>) : Promise<boolean> {
return AnnouncementInfoCoreData.InsertBatch(AnnouncementInfoList)
}
/**
     * 插入
     * @param AnnouncementInfo AnnouncementInfo : AnnouncementInfoInsertCoreMessage
     * @constructor
     */
public static Insert(AnnouncementInfo : AnnouncementInfoInsertCoreMessage) : Promise<boolean> {
return AnnouncementInfoCoreData.Insert(AnnouncementInfo)
}
/**
     * 修改用户
     * @param AnnouncementInfo AnnouncementInfoUpdateCoreMessage
     * @constructor
     */
public static Update(AnnouncementInfo : AnnouncementInfoUpdateCoreMessage) : Promise<number> {
return AnnouncementInfoCoreData.Update(AnnouncementInfo);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : AnnouncementInfoCountCoreMessage) : Promise<number>{
return AnnouncementInfoCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where AnnouncementInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : AnnouncementInfoSearchCoreMessage) : Promise<Array<AnnouncementInfoCoreModel>>{
return AnnouncementInfoCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : AnnouncementInfoDeleteCoreMessage) : Promise<number>{
return AnnouncementInfoCoreData.Delete(where);
}
}
