Vue.component('fish-card', {
    data: function () {
        return {
            showMore: false
        }
    },
    props: ['fish'],
    delimiters: ['[[', ']]'],
    template: `
    <div v-bind:class="{
        'fish-card': !showMore,
        'fish-card-expanded': showMore,
    }">
        <div class="fish-icon">        
            <p>[[ fish.name ]]</p>
            <img :src="fish.icon">
        </div>

        <div v-if="showMore === true">

            <p>I am the details!!!!</p>

            <p v-if="fish.is_all_day === true">Available all day</p>

            <p v-else>[[ fish.time_info[0].hour_am_pm ]] through the [[ fish.time_info[fish.time_info.length - 1].hour_am_pm ]] hour</p>

            <p v-if="fish.is_all_year">Available all year</p>

            <p v-else>[[ fish.month_info[0].month_name ]] through the month of [[ fish.month_info[fish.month_info.length - 1].month_name ]]</p>
        </div>

        <div class="show-more">

            <p v-if="showMore === false" @click="showMore = true">Show more &or;</p>

            <p v-if="showMore === true" @click="showMore = false">Show less ^</p>
        </div>
    </div>
    `
})

Vue.component('bug-card', {
    data: function () {
        return {
            showMore: false
        }
    },
    props: ['bug'],
    delimiters: ['[[', ']]'],
    template: `
    <div v-bind:class="{
        'bug-card': !showMore,
        'bug-card-expanded': showMore,
    }">
        <div class="bug-icon">        
            <p>[[ bug.name ]]</p>
            <img :src="bug.icon">
        </div>
        <div v-if="showMore === true">
            <p>I am the details!!!!</p>

            <p v-if="bug.is_all_day === true">Available all day</p>

            <p v-else>[[ bug.time_info[0].hour_am_pm ]] through the [[ bug.time_info[bug.time_info.length - 1].hour_am_pm ]] hour</p>

            <p v-if="bug.is_all_year">Available all year</p>

            <p v-else>[[ bug.month_info[0].month_name ]] through the month of [[ bug.month_info[bug.month_info.length - 1].month_name ]]</p>

        </div>
        <div class="show-more">
            <p v-if="showMore === false" @click="showMore = true">Show more &or;</p>
            <p v-if="showMore === true" @click="showMore = false">Show less ^</p>
        </div>
                
    </div>
    `
})

Vue.component('sea-card', {
    data: function () {
        return {
            showMore: false
        }
    },
    props: ['sea'],
    delimiters: ['[[', ']]'],
    template: `
    <div v-bind:class="{
        'sea-card': !showMore,
        'sea-card-expanded': showMore,
    }">
        <div class="sea-icon">        
            <p>[[ sea.name ]]</p>
            <img :src="sea.icon">
        </div>
        <div v-if="showMore === true">
            <p>I am the details!!!!</p>

            <p v-if="sea.is_all_day === true">Available all day</p>

            <p v-else>[[ sea.time_info[0].hour_am_pm ]] through the [[ sea.time_info[sea.time_info.length - 1].hour_am_pm ]] hour</p>

            <p v-if="sea.is_all_year">Available all year</p>

            <p v-else>[[ sea.month_info[0].month_name ]] through the month of [[ sea.month_info[sea.month_info.length - 1].month_name ]]</p>
        </div>
        <div class="show-more">
            <p v-if="showMore === false" @click="showMore = true">Show more &or;</p>
            <p v-if="showMore === true" @click="showMore = false">Show less ^</p>
        </div>
                
    </div>
    `
})


const vm = new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    data: {
        fish: {},
        bugs: {},
        seaCreatures: {},
        clicked: "fish",
    },
    methods: {
        loadFish: function() {
            axios({
                method: 'get',
                url: '/api/v1/fish/'
            }).then(response => {
                this.fish = response.data
            })
        },
        loadBugs: function() {
            axios({
                method: 'get',
                url: '/api/v1/bugs/'
            }).then(response => {
                this.bugs = response.data
            })
        },
        loadSeaCreatures: function() {
            axios({
                method: 'get',
                url: '/api/v1/seacreatures/'
            }).then(response => {
                this.seaCreatures = response.data
            })
        }
    },
    created: function() {
        this.loadFish()
        this.loadBugs()
        this.loadSeaCreatures()
    }
})