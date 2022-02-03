import {GameCollectCoreModel} from "@/core/GameCore/Model/GameCollectCoreModel";
import {GameCollectCoreData} from "@/core/GameCore/Data/GameCollectCoreData";
import {GameCollectInsertCoreMessage} from "@/core/GameCore/Message/GameCollectInsertCoreMessage";
import {GameCollectUpdateCoreMessage} from "@/core/GameCore/Message/GameCollectUpdateCoreMessage";
import {GameCollectSearchCoreMessage} from "@/core/GameCore/Message/GameCollectSearchCoreMessage";
import {GameCollectDeleteCoreMessage} from "@/core/GameCore/Message/GameCollectDeleteCoreMessage";
import {GameCollectCountCoreMessage} from "@/core/GameCore/Message/GameCollectCountCoreMessage";
export class GameCollectCoreService {
/**
     * 批量插入
     * @constructor
	 * @param GameCollectList Array<GameCollectCoreModel>
     */
public static InsertBatch(GameCollectList : Array<GameCollectCoreModel>) : Promise<boolean> {
return GameCollectCoreData.InsertBatch(GameCollectList)
}
/**
     * 插入
     * @param GameCollect GameCollect : GameCollectInsertCoreMessage
     * @constructor
     */
public static Insert(GameCollect : GameCollectInsertCoreMessage) : Promise<boolean> {
return GameCollectCoreData.Insert(GameCollect)
}
/**
     * 修改用户
     * @param GameCollect GameCollectUpdateCoreMessage
     * @constructor
     */
public static Update(GameCollect : GameCollectUpdateCoreMessage) : Promise<number> {
return GameCollectCoreData.Update(GameCollect);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : GameCollectCountCoreMessage) : Promise<number>{
return GameCollectCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where GameCollectSearchCoreMessage
     * @constructor
     */
public static Search(where : GameCollectSearchCoreMessage) : Promise<Array<GameCollectCoreModel>>{
return GameCollectCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : GameCollectDeleteCoreMessage) : Promise<number>{
return GameCollectCoreData.Delete(where);
}
}
