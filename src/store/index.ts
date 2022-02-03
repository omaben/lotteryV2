import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: false,
        activeTabs: 0,
        gamePlayType: localStorage.getItem('currLang') ?
            (localStorage.getItem('currLang') == 'en' ? 'Official gameplay' : '官方玩法') : '官方玩法', //game play type `官方玩法 || 信用玩法`,
        gameBet: {
            bet: [] as any,
            amount: '',
            playGroup: {
                code: '', // example: PK10
                name: '', // example: 分赛车
                playName: '', // exmample: 单选
            } as any,
        } as any,
        gameBetOfficial: [] as any,
        betRecords: [] as any,
        userBalance: localStorage.getItem('userBalance')
            ? Number(localStorage.getItem('userBalance'))
            : 1000000,
        themeColor: localStorage.getItem('setThemeSkin') ? localStorage.getItem('setThemeSkin') : 'classic-red', // current theme color `经典红`
        currLang: localStorage.getItem('currLang') ? localStorage.getItem('currLang') : 'zn', // current language color `zn`
    },
    mutations: {
        setLoginStatus(state, status) {
            state.isLogin = status;
        },
        setGamePlayType(state, status) {
            state.gamePlayType = status
        },
        setActiveTabs(state, status) {
            state.activeTabs = status
        },
        setBet(state, status) {
            state.gameBet.bet.push(status)
        },
        setBetOfficial(state, status) {
            state.gameBetOfficial[status.key] = status.arr;
        },
        removeBetOfficial(state, status) {
            state.gameBetOfficial[status.key].splice(status.arrIndex, 1);
        },
        removeAllBets(state) {
            state.gameBetOfficial = [];
        },
        removeBet(state, status) {
            state.gameBet.bet.splice(status, 1)
        },
        setBetAmount(state, status) {
            state.gameBet.amount = status
        },
        setPlayGroupCode(state, status) {
            state.gameBet.playGroup.code = status
        },
        setPlayGroupName(state, status) {
            state.gameBet.playGroup.name = status
        },
        setPlayGroupPlayName(state, status) {
            state.gameBet.playGroup.playName = status
        },
        setBetInfo(state, status) {
            state.gameBet.bet.map((val: any, index: any) => {
                val.amount = status.amount
                val.betTime = status.betTime
                val.playGroup = status.playGroup
            })
            state.betRecords = [...state.betRecords, ...state.gameBet.bet]
        },
        resetGameBet(state) {
            state.gameBet.bet = []
            state.gameBet.amount = ''
            state.gameBet.playGroup.playName = ''
        },
        setThemeSkin(state, status) {
            state.themeColor = status
            localStorage.setItem('setThemeSkin', status);
        },
        addToBalance(state, depositValue) {
            localStorage.setItem(
                'userBalance',
                (state.userBalance + depositValue).toString()
            )
            state.userBalance = state.userBalance + depositValue
        },
        setLangauge(state, status) {
            state.currLang = status
            localStorage.setItem('currLang', status);
        },
    },
    actions: {
        setLoginStatus({commit}, payload) {
            commit("setLoginStatus", payload)
        },
        setGamePlayType({commit}, payload) {
            commit('setGamePlayType', payload)
        },
        setActiveTabs({commit}, payload) {
            commit('setActiveTabs', payload)
        },
        setBet({commit}, payload) {
            commit('setBet', payload)
        },
        setBetOfficial({commit}, payload) {
            commit('setBetOfficial', payload)
        },
        removeBetOfficial({commit}, payload) {
            commit('removeBetOfficial', payload)
        },
        removeAllBets({commit}) {
            commit('removeAllBets')
        },
        removeBet({commit}, payload) {
            commit('removeBet', payload)
        },
        setBetAmount({commit}, payload) {
            commit('setBetAmount', payload)
        },
        setPlayGroupCode({commit}, payload) {
            commit('setPlayGroupCode', payload)
        },
        setPlayGroupName({commit}, payload) {
            commit('setPlayGroupName', payload)
        },
        setPlayGroupPlayName({commit}, payload) {
            commit('setPlayGroupPlayName', payload)
        },
        setBetInfo({commit, dispatch}, payload) {
            commit('setBetInfo', payload)
            dispatch('resetGameBet')
        },
        resetGameBet({commit}) {
            commit('resetGameBet')
        },
        setThemeSkin({commit}, payload) {
            commit('setThemeSkin', payload)
        },
        addToBalanace({commit}, payload) {
            commit('addToBalance', payload)
        },
        setLangauge({commit}, payload) {
            commit('setLangauge', payload)
        },
    },
    getters: {},
    modules: {},
})
