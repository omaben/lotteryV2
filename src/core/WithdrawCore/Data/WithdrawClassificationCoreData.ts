import {WithdrawClassificationCoreModel} from "@/core/WithdrawCore/Model/WithdrawClassificationCoreModel";
import {Application} from "@/lib/Application";
import {WithdrawClassificationInsertCoreMessage} from "@/core/WithdrawCore/Message/WithdrawClassificationInsertCoreMessage";
import {WithdrawClassificationUpdateCoreMessage} from "@/core/WithdrawCore/Message/WithdrawClassificationUpdateCoreMessage";
import {WithdrawClassificationSearchCoreMessage} from "@/core/WithdrawCore/Message/WithdrawClassificationSearchCoreMessage";
import {WithdrawClassificationDeleteCoreMessage} from "@/core/WithdrawCore/Message/WithdrawClassificationDeleteCoreMessage";
import {WithdrawClassificationCountCoreMessage} from "@/core/WithdrawCore/Message/WithdrawClassificationCountCoreMessage";
export class WithdrawClassificationCoreData {
/**
     * 批量插入
     * @param WithdrawClassificationList Array<WithdrawClassificationInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(WithdrawClassificationList : Array<WithdrawClassificationInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Withdraw/WithdrawClassification/InsertBatch.action", {Data:JSON.stringify(WithdrawClassificationList)});
}
/**
     * 插入
     * @param WithdrawClassification  WithdrawClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(WithdrawClassification : WithdrawClassificationInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Withdraw/WithdrawClassification/Insert.action", WithdrawClassification);
}
/**
     * 修改用户
     * @param WithdrawClassification WithdrawClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(WithdrawClassification : WithdrawClassificationUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Withdraw/WithdrawClassification/Update.action", WithdrawClassification);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : WithdrawClassificationCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Withdraw/WithdrawClassification/Count.action", where);
}
/**
     * 搜索用户
     * @param where WithdrawClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : WithdrawClassificationSearchCoreMessage) : Promise<Array<WithdrawClassificationCoreModel>>{
return Application.Service.GetContent("Withdraw/WithdrawClassification/Search.action", where);
}
/**
     * 删除用户
     * @param where WithdrawClassificationDeleteCoreMessage
     * @constructor
     */
public static Delete(where : WithdrawClassificationDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Withdraw/WithdrawClassification/Delete.action", where);
}
}
