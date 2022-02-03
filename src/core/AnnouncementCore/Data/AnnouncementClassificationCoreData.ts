import {AnnouncementClassificationCoreModel} from "@/core/AnnouncementCore/Model/AnnouncementClassificationCoreModel";
import {Application} from "@/lib/Application";
import {AnnouncementClassificationInsertCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementClassificationInsertCoreMessage";
import {AnnouncementClassificationUpdateCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementClassificationUpdateCoreMessage";
import {AnnouncementClassificationSearchCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementClassificationSearchCoreMessage";
import {AnnouncementClassificationDeleteCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementClassificationDeleteCoreMessage";
import {AnnouncementClassificationCountCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementClassificationCountCoreMessage";
export class AnnouncementClassificationCoreData {
/**
     * 批量插入
     * @param AnnouncementClassificationList Array<AnnouncementClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AnnouncementClassificationList : Array<AnnouncementClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Announcement/AnnouncementClassification/InsertBatch.action", {Data:JSON.stringify(AnnouncementClassificationList)});
}
/**
     * 插入
     * @param AnnouncementClassification  AnnouncementClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(AnnouncementClassification : AnnouncementClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Announcement/AnnouncementClassification/Insert.action", AnnouncementClassification);
}
/**
     * 修改用户
     * @param AnnouncementClassification AnnouncementClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(AnnouncementClassification : AnnouncementClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Announcement/AnnouncementClassification/Update.action", AnnouncementClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AnnouncementClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Announcement/AnnouncementClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where AnnouncementClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : AnnouncementClassificationSearchCoreMessage) : Promise<Array<AnnouncementClassificationCoreModel>>{
return Application.Service.GetContent("Announcement/AnnouncementClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where AnnouncementClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AnnouncementClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Announcement/AnnouncementClassification/Delete.action", where);
}
}
