import { createStore } from 'vuex';
import { UserModule } from "./modules/user";

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user: UserModule
    }
})