import {AnnouncementInfoCoreModel} from "@/core/AnnouncementCore/Model/AnnouncementInfoCoreModel";
import {Application} from "@/lib/Application";
import {AnnouncementInfoInsertCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementInfoInsertCoreMessage";
import {AnnouncementInfoUpdateCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementInfoUpdateCoreMessage";
import {AnnouncementInfoSearchCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementInfoSearchCoreMessage";
import {AnnouncementInfoDeleteCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementInfoDeleteCoreMessage";
import {AnnouncementInfoCountCoreMessage} from "@/core/AnnouncementCore/Message/AnnouncementInfoCountCoreMessage";
export class AnnouncementInfoCoreData {
/**
     * 批量插入
     * @param AnnouncementInfoList Array<AnnouncementInfoInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AnnouncementInfoList : Array<AnnouncementInfoInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Announcement/AnnouncementInfo/InsertBatch.action", {Data:JSON.stringify(AnnouncementInfoList)});
}
/**
     * 插入
     * @param AnnouncementInfo  AnnouncementInfoInsertCoreMessage
     * @constructor
     */
public static Insert(AnnouncementInfo : AnnouncementInfoInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Announcement/AnnouncementInfo/Insert.action", AnnouncementInfo);
}
/**
     * 修改用户
     * @param AnnouncementInfo AnnouncementInfoUpdateCoreMessage
     * @constructor
     */
public static Update(AnnouncementInfo : AnnouncementInfoUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Announcement/AnnouncementInfo/Update.action", AnnouncementInfo);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AnnouncementInfoCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Announcement/AnnouncementInfo/Count.action", where);
}
/**
     * 搜索用户
     * @param where AnnouncementInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : AnnouncementInfoSearchCoreMessage) : Promise<Array<AnnouncementInfoCoreModel>>{
return Application.Service.GetContent("Announcement/AnnouncementInfo/Search.action", where);
}
/**
     * 删除用户
     * @param where AnnouncementInfoDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AnnouncementInfoDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Announcement/AnnouncementInfo/Delete.action", where);
}
}
