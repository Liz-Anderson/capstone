
// ----------------- fish component --------------------

Vue.component('fish-card', {
    data: function () {
        return {
            showMore: false
        }
    },
    methods: {
        catchUncatchFish: function(fish) {
            if (!this.currentUser.caught_fish.includes(fish.id)) {
                this.currentUser.caught_fish.push(fish.id)
            } else {
                this.currentUser.caught_fish.splice(this.currentUser.caught_fish.indexOf(fish.id), 1)
            }
            axios({
                method: 'patch',
                url: 'api/v1/currentuser/',
                headers: {
                    'X-CSRFToken': this.csrf_token
                },
                data: {
                    'caught_fish' : this.currentUser.caught_fish
                }
            }).then(response => {
                this.$emit("after-catch")
            })
        }
    },
    props: ['fish', 'currentUser', 'csrf_token'],
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
        <div v-if="currentUser.id">
            <button @click="catchUncatchFish(fish)">[[ currentUser.caught_fish.includes(fish.id) ? "Uncatch" : "Catch" ]]</button>
        </div>

        <div v-if="showMore === true">

            <p>I am the details!!!!</p>

            <p v-if="fish.is_all_day === true">Available all day</p>

            <p v-else>[[ fish.time_info[0].hour_am_pm ]] through the [[ fish.time_info[fish.time_info.length - 1].hour_am_pm ]] hour</p>

            <p v-if="fish.is_all_year">Available all year</p>

            <p v-else>[[ fish.month_span ]]</p>
        </div>

        <div class="show-more">

            <p v-if="showMore === false" @click="showMore = true">Show more &or;</p>

            <p v-if="showMore === true" @click="showMore = false">Show less ^</p>
        </div>
    </div>
    `
})

// --------------------- bug component ------------------

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

            <p v-else>[[ bug.month_span ]]</p>

        </div>
        <div class="show-more">
            <p v-if="showMore === false" @click="showMore = true">Show more &or;</p>
            <p v-if="showMore === true" @click="showMore = false">Show less ^</p>
        </div>
                
    </div>
    `
})

// ------------ sea creature component -----------------

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

            <p v-else>[[ sea.month_span ]]</p>
        </div>

        <div class="show-more">
            <p v-if="showMore === false" @click="showMore = true">Show more &or;</p>
            <p v-if="showMore === true" @click="showMore = false">Show less ^</p>
        </div>
                
    </div>
    `
})

// ---------------- vue instance -------------------

const vm = new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    data: {
        fish: [],
        bugs: [],
        seaCreatures: [],
        users: [],
        currentUser: {},
        csrf_token: "",
        clicked: "fish",
        option: "all",
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
        },
        loadUsers: function() {
            axios({
                method: 'get',
                url: '/api/v1/users/'
            }).then(response => {
                this.users = response.data
            })
        },
        loadCurrentUser: function() {
            axios({
                method: 'get',
                url: '/api/v1/currentuser/'
            }).then(response => {
                this.currentUser = response.data
            })
        },
        
    },
    created: function() {
        this.loadFish()
        this.loadBugs()
        this.loadSeaCreatures()
        this.loadUsers()
        this.loadCurrentUser()
    },
    computed: {
        caughtFish: function() {
            return this.fish.filter(fish => {
                return this.currentUser.caught_fish.includes(fish.id)
            })
        },
        uncaughtFish: function() {
            return this.fish.filter(fish => {
                return !this.currentUser.caught_fish.includes(fish.id)
            })
        },
        caughtBugs: function() {
            return this.bugs.filter(bug => {
                return this.currentUser.caught_bugs.includes(bug.id)
            })
        },
        uncaughtBugs: function() {
            return this.bugs.filter(bug => {
                return !this.currentUser.caught_bugs.includes(bug.id)
            })
        },
        caughtSeaCreatures: function() {
            return this.seaCreatures.filter(sea => {
                return this.currentUser.caught_seacreatures.includes(sea.id)
            })
        },
        uncaughtSeaCreatures: function() {
            return this.seaCreatures.filter(sea => {
                return !this.currentUser.caught_seacreatures.includes(sea.id)
            })
        },
    }
})