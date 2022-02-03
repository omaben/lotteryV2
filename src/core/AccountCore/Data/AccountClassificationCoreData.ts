import {AccountClassificationCoreModel} from "@/core/AccountCore/Model/AccountClassificationCoreModel";
import {Application} from "@/lib/Application";
import {AccountClassificationInsertCoreMessage} from "@/core/AccountCore/Message/AccountClassificationInsertCoreMessage";
import {AccountClassificationUpdateCoreMessage} from "@/core/AccountCore/Message/AccountClassificationUpdateCoreMessage";
import {AccountClassificationSearchCoreMessage} from "@/core/AccountCore/Message/AccountClassificationSearchCoreMessage";
import {AccountClassificationDeleteCoreMessage} from "@/core/AccountCore/Message/AccountClassificationDeleteCoreMessage";
import {AccountClassificationCountCoreMessage} from "@/core/AccountCore/Message/AccountClassificationCountCoreMessage";
export class AccountClassificationCoreData {
/**
     * 批量插入
     * @param AccountClassificationList Array<AccountClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AccountClassificationList : Array<AccountClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Account/AccountClassification/InsertBatch.action", {Data:JSON.stringify(AccountClassificationList)});
}
/**
     * 插入
     * @param AccountClassification  AccountClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(AccountClassification : AccountClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Account/AccountClassification/Insert.action", AccountClassification);
}
/**
     * 修改用户
     * @param AccountClassification AccountClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(AccountClassification : AccountClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Account/AccountClassification/Update.action", AccountClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AccountClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Account/AccountClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where AccountClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : AccountClassificationSearchCoreMessage) : Promise<Array<AccountClassificationCoreModel>>{
return Application.Service.GetContent("Account/AccountClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where AccountClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AccountClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Account/AccountClassification/Delete.action", where);
}
}
