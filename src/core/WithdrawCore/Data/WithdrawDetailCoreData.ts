import {WithdrawDetailCoreModel} from "@/core/WithdrawCore/Model/WithdrawDetailCoreModel";
import {Application} from "@/lib/Application";
import {WithdrawDetailInsertCoreMessage} from "@/core/WithdrawCore/Message/WithdrawDetailInsertCoreMessage";
import {WithdrawDetailUpdateCoreMessage} from "@/core/WithdrawCore/Message/WithdrawDetailUpdateCoreMessage";
import {WithdrawDetailSearchCoreMessage} from "@/core/WithdrawCore/Message/WithdrawDetailSearchCoreMessage";
import {WithdrawDetailDeleteCoreMessage} from "@/core/WithdrawCore/Message/WithdrawDetailDeleteCoreMessage";
import {WithdrawDetailCountCoreMessage} from "@/core/WithdrawCore/Message/WithdrawDetailCountCoreMessage";
export class WithdrawDetailCoreData {
/**
     * 批量插入
     * @param WithdrawDetailList Array<WithdrawDetailInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(WithdrawDetailList : Array<WithdrawDetailInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Withdraw/WithdrawDetail/InsertBatch.action", {Data:JSON.stringify(WithdrawDetailList)});
}
/**
     * 插入
     * @param WithdrawDetail  WithdrawDetailInsertCoreMessage
     * @constructor
     */
public static Insert(WithdrawDetail : WithdrawDetailInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Withdraw/WithdrawDetail/Insert.action", WithdrawDetail);
}
/**
     * 修改用户
     * @param WithdrawDetail WithdrawDetailUpdateCoreMessage
     * @constructor
     */
public static Update(WithdrawDetail : WithdrawDetailUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Withdraw/WithdrawDetail/Update.action", WithdrawDetail);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : WithdrawDetailCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Withdraw/WithdrawDetail/Count.action", where);
}
/**
     * 搜索用户
     * @param where WithdrawDetailSearchCoreMessage
     * @constructor
     */
public static Search(where : WithdrawDetailSearchCoreMessage) : Promise<Array<WithdrawDetailCoreModel>>{
return Application.Service.GetContent("Withdraw/WithdrawDetail/Search.action", where);
}
/**
     * 删除用户
     * @param where WithdrawDetailDeleteCoreMessage
     * @constructor
     */
public static Delete(where : WithdrawDetailDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Withdraw/WithdrawDetail/Delete.action", where);
}
}
