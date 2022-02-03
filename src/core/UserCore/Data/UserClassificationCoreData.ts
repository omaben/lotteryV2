import {UserClassificationCoreModel} from "@/core/UserCore/Model/UserClassificationCoreModel";
import {Application} from "@/lib/Application";
import {UserClassificationInsertCoreMessage} from "@/core/UserCore/Message/UserClassificationInsertCoreMessage";
import {UserClassificationUpdateCoreMessage} from "@/core/UserCore/Message/UserClassificationUpdateCoreMessage";
import {UserClassificationSearchCoreMessage} from "@/core/UserCore/Message/UserClassificationSearchCoreMessage";
import {UserClassificationDeleteCoreMessage} from "@/core/UserCore/Message/UserClassificationDeleteCoreMessage";
import {UserClassificationCountCoreMessage} from "@/core/UserCore/Message/UserClassificationCountCoreMessage";
export class UserClassificationCoreData {
/**
     * 批量插入
     * @param UserClassificationList Array<UserClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(UserClassificationList : Array<UserClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("User/UserClassification/InsertBatch.action", {Data:JSON.stringify(UserClassificationList)});
}
/**
     * 插入
     * @param UserClassification  UserClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(UserClassification : UserClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("User/UserClassification/Insert.action", UserClassification);
}
/**
     * 修改用户
     * @param UserClassification UserClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(UserClassification : UserClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("User/UserClassification/Update.action", UserClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : UserClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("User/UserClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where UserClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : UserClassificationSearchCoreMessage) : Promise<Array<UserClassificationCoreModel>>{
return Application.Service.GetContent("User/UserClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where UserClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : UserClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("User/UserClassification/Delete.action", where);
}
}
