import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/live/:id",
    name: "live",

    component: () => import("../views/live/index.vue"),
  },
  {
    path: "/User",
    name: "User",

    component: () => import("../views/User/User.vue"),
  },
  {
    path: "/User/DetailUser",
    name: "DetailUser",

    component: () => import("../views/User/DetailUser.vue"),
  },
  {
    path: "/User/PhoneNumber",
    name: "PhoneNumber",

    component: () => import("../views/User/PhoneNumber.vue"),
  },
  {
    path: "/User/Theme",
    name: "Theme",

    component: () => import("../views/User/Theme.vue"),
  },
  {
    path: "/User/Installation",
    name: "Installation",

    component: () => import("../views/User/Installation.vue"),
  },
  {
    path: "/User/Vip",
    name: "Vip",

    component: () => import("../views/User/Vip.vue"),
  },
  {
    path: "/Recharge",
    name: "Recharge",

    component: () => import("../views/Recharge/Index.vue"),
  },
  {
    path: "/Deposit",
    name: "Deposit",

    component: () => import("../views/Deposit/Deposit.vue"),
  },
  {
    path: "/DepositDetails",
    name: "DepositDetails",

    component: () => import("../views/Deposit/DepositDetails.vue"),
  },
  {
    path: "/Recharge/DetailRecharge/:bankid",
    name: "DetailRecharge",

    component: () => import("../views/Recharge/DetailRecharge.vue"),
  },
  {
    path: "/Recharge/RechargeBank",
    name: "RechargeBank",

    component: () => import("../views/Recharge/RechargeBank.vue"),
  },
  {
    path: "/Agent",
    name: "Agent",
    component: () => import("../views/Agent/Agent.vue"),
  },
  {
    path: "/AgentUnreg",
    name: "AgentUnreg",
    component: () => import("../views/Agent/AgentUnreg.vue"),
  },
  {
    path: "/RegisterAgent",
    name: "RegisterAgent",
    component: () => import("../views/RegisterAgent/RegisterAgent.vue"),
  },
  {
    path: "/Live",
    name: "Promotion",
    component: () => import("../views/Promotion/Promotion.vue"),
  },
  {
    path: "/GameLobby",
    name: "GameLobby",
    component: () => import("../views/GameLobby/GameLobby.vue"),
  },
  {
    path: "/Lucky/:gameclass/:gameid",
    name: "Lucky",
    component: () => import("../views/Lucky/index.vue"),
  },
  {
    path: "/Bet/BetRecord",
    name: "BetRecord",
    component: () => import("../views/Bet/BetRecord.vue"),
  },
  {
    path: "/Pinces",
    name: "Pinces",
    component: () => import("../views/Pinces/Pinces.vue"),
  },
  {
    path: "/Wallet",
    name: "Wallet",
    component: () => import("../views/Wallet/Wallet.vue"),
  },
  {
    path: "/Setting",
    name: "Setting",
    component: () => import("../views/Settings/Setting.vue"),
  },
  {
    path: "/QuotaConversion",
    name: "QuotaConversion",

    component: () => import("../views/QuotaConversion/index.vue"),
  },
  {
    path: "/DailyCheck",
    name: "DailyCheck",

    component: () => import("../views/DailyCheck/index.vue"),
  },
  {
    path: "/GameIframe/:gameid/:gamename",
    name: "GameIframe",
    component: () => import("../views/GameIframe/GameIframe.vue"),
  },
  {
    path: "/Bet/BetList",
    name: "BetList",
    component: () => import("../views/Bet/BetList.vue"),
  },
  {
    path: "/PushLink",
    name: "PushLink",
    component: () => import("../views/PushLink/PushLink.vue"),
  },
  {
    path: "/NewPromotion",
    name: "NewPromotion",
    component: () => import("../views/PushLink/NewPromotion.vue"),
  },
  {
    path: "/Redeem",
    name: "Redeem",

    component: () => import("../views/Redeem/index.vue"),
  },
  {
    path: "/Redeem/pointHistory",
    name: "pointHistory",

    component: () => import("../views/Redeem/pointHistory.vue"),
  },
  {
    path: "/Bet/AllBetRecord",
    name: "AllBetRecord",
    component: () => import("../views/Bet/AllBetRecord.vue"),
  },
  {
    path: "/CustomerService",
    name: "CustomerService",
    component: () => import("../views/CustomerService/CustomerService.vue"),
  },
  {
    path: "/CustomerService/FeedBack",
    name: "FeedBack",
    component: () => import("../views/CustomerService/FeedBack.vue"),
  },
  {
    path: "/CustomerService/ChatSupport",
    name: "ChatSupport",
    component: () => import("../views/CustomerService/ChatSupport.vue"),
  },
  {
    path: "/CustomerService/DeviceInfo",
    name: "DeviceInfo",
    component: () => import("../views/CustomerService/DeviceInfo.vue"),
  },
  {
    path: "/FundRecords",
    name: "FundRecords",
    component: () => import("../views/FundRecords/FundRecords.vue"),
  },
  {
    path: "/ProxyReview",
    name: "ProxyReview",

    component: () => import("../views/ProxyReview/ProxyReview.vue"),
  },
  {
    path: "/SingleAgent",
    name: "SingleAgent",

    component: () => import("../views/Agent/SingleAgent.vue"),
  },
  {
    path: "/TeamMember",
    name: "TeamMember",

    component: () => import("../views/TeamMember/TeamMember.vue"),
  },
  {
    path: "/TrackingNumQuery",
    name: "TrackingNumQuery",

    component: () =>
      import("../views/TrackingNumberQuery/TrackingNumberQuery.vue"),
  },
  {
    path: "/TeamMember/TeamOverview",
    name: "TeamOverview",

    component: () => import("../views/TeamMember/TeamOverview.vue"),
  },
  {
    path: "/Withdraw",
    name: "Withdraw",

    component: () => import("../views/Withdraw/Withdraw.vue"),
  },
  {
    path: "/Recharge/OnlineRecharge",
    name: "OnlineRecharge",

    component: () => import("../views/Recharge/OnlineRecharge.vue"),
  },
  {
    path: "/AccountChange/PurchasedRecord",
    name: "AccountChange",

    component: () => import("../views/AccountChange/PurchasedRecord.vue"),
  },
  {
    path: "/AccountChange/AccountChangeHome",
    name: "AccountChangeHome",

    component: () => import("../views/AccountChange/AccountChangeHome.vue"),
  },
  {
    path: "/Withdraw/UserInfo",
    name: "UserInfo",
    component: () => import("../views/Withdraw/UserInfo.vue"),
  },
  {
    path: "/LotteryRecord",
    name: "LotteryRecord",
    component: () => import("../views/LotteryRecord/LotteryRecord.vue"),
  },
  {
    path: "/GestionPromotion",
    name: "GestionPromotion",

    component: () => import("../views/GestionPromotion/index.vue"),
  },
  {
    path: "/ChangeLanguage",
    name: "ChangeLanguage",

    component: () => import("../views/User/ChangeLanguage.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register/Register.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login/Login.vue"),
  },
  {
    path: "/MyCollection",
    name: "MyCollection",
    component: () => import("../views/MyCollection/MyCollection.vue"),
  },
  {
    path: "/MyPresent",
    name: "MyPresent",
    component: () => import("../views/MyPresent/MyPresent.vue"),
  },
  {
    path: "/MyComments",
    name: "MyComments",
    component: () => import("../views/MyComments/index.vue"),
  },
  {
    path: "/newBank",
    name: "newBank",
    component: () => import("../views/Recharge/newBank.vue"),
  },
  {
    path: "/AccountManagement",
    name: "AccountManagement",

    component: () => import("../views/User/AccountManagement.vue"),
  },
  {
    path: "/ChangePassword",
    name: "ChangePassword",

    component: () => import("../views/User/ChangePassword.vue"),
  },
  {
    path: "/ChangeWithdrawPassword",
    name: "ChangeWithdrawPassword",

    component: () => import("../views/User/ChangeWithdrawPassword.vue"),
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.NODE_ENV === "production" ? "/" : process.env.BASE_URL,
  routes,
})

let notLogin = [
  "Home",
  "Promotion",
  "Lucky",
  "Register",
  // "User",
  // "Theme",
  "Login",
  "ChangeLanguage",
];

router.beforeEach((to: any, from: any, next) => {
  let isUser = localStorage.getItem('UserInfo') ? true : false;
  if (!isUser) {
    if (from.name == "Login") {
      if (notLogin.includes(to.name)) {
        next();
      } else {
        next({ name: "Home" });
      }
    } else if (from.name == "Home") {
      if (notLogin.includes(to.name)) {
        next();
      } else {
        next({ name: "Login" });
      }
    } else {
      if (notLogin.includes(to.name)) {
        next();
      } else {
        next({ name: "Login" });
      }
    }
  } else {
    next();
  }

});

export default router
