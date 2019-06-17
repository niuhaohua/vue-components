import Vue from 'vue'
import * as cvFilter from './cvFilter'


const filters = {
    cvFilter,
}

for(let item in filters){
    Object.keys(filters[item]).forEach(key => {
        Vue.filter(key, filters[item][key])
    })
}