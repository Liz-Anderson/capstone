// -----------------------------------------------------
// ----------------- fish component --------------------
// -----------------------------------------------------
Vue.component('fish-card', {
    data: function () {
        return {
            showMore: false,
            showHint: false
        }
    },
    props: ['fish', 'currentUser', 'csrf_token'],
    delimiters: ['[[', ']]'],
    methods: {
        catchUncatchFish: function(fish) {
            console.log(this.csrf_token)
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
    
    template: `
    <div class="fish-card">
        <div class="fish-icon">  
            <img :src="fish.icon">    
            <p v-if="currentUser.id">
                <button class="catch-btn" @click="catchUncatchFish(fish)">[[ currentUser.caught_fish.includes(fish.id) ? "uncatch" : "catch" ]]</button>
            </p>
        </div>
        <div class="fish-2">
            <p>[[ fish.name ]]</p>
            <div class="show-more">

                <p v-if="showMore === false" @click="showMore = true, showHint = false">availablilty &or;</p>

                <p v-if="showMore === true" @click="showMore = false">availability ^</p>
            </div>

            <div v-if="showMore === true">
                <p v-if="fish.is_all_day === true">time: <br>available all day</p>

                <p v-else>time: <br>[[ fish.time_info[0].hour_am_pm ]] through the [[ fish.time_info[fish.time_info.length - 1].hour_am_pm ]] hour</p>

                <p v-if="fish.is_all_year">season: <br>available all year</p>

                <p v-else>season: <br>[[ fish.month_span.toLowerCase() ]]</p>
            </div>
            <div class="show-hint" v-if="currentUser.id">
                <p v-if="showHint === false" @click="showHint = true, showMore = false">hints &or;</p>

                <p v-if="showHint === true" @click="showHint = false">hints ^</p>
            </div>
            <div v-if="showHint === true">
                <p>location: <br>[[ fish.location.toLowerCase() ]]</p>
                <p>rarity: <br>[[ fish.rarity.toLowerCase() ]]</p>
                <p>shadow size: <br>[[ fish.shadow_size.toLowerCase() ]]</p>
            </div>
        </div>
    </div>
    `,
    
})
// ------------------------------------------------------
// --------------------- bug component ------------------
// ------------------------------------------------------
Vue.component('bug-card', {
    data: function () {
        return {
            showMore: false,
            showHint: false
        }
    },
    props: ['bug', 'currentUser', 'csrf_token'],
    delimiters: ['[[', ']]'],
    methods: {
        catchUncatchBug: function(bug) {
            console.log(this.csrf_token)
            if (!this.currentUser.caught_bugs.includes(bug.id)) {
                this.currentUser.caught_bugs.push(bug.id)
            } else {
                this.currentUser.caught_bugs.splice(this.currentUser.caught_bugs.indexOf(bug.id), 1)
            }
            axios({
                method: 'patch',
                url: 'api/v1/currentuser/',
                headers: {
                    'X-CSRFToken': this.csrf_token
                },
                data: {
                    'caught_bugs' : this.currentUser.caught_bugs
                }
            }).then(response => {
                this.$emit("after-catch")
            })
        }
    },
    template: `
    <div class="bug-card">
        <div class="bug-icon">        
            <img :src="bug.icon">
            <div v-if="currentUser.id">
                <button class="catch-btn" @click="catchUncatchBug(bug)">[[ currentUser.caught_bugs.includes(bug.id) ? "uncatch" : "catch" ]]</button>
            </div>
        </div>
        <div class="bug-2">
            <p>[[ bug.name ]]</p>
            <div class="show-more">
                <p v-if="showMore === false" @click="showMore = true, showHint = false">show more &or;</p>
                <p v-if="showMore === true" @click="showMore = false">show less ^</p>
            </div>
            <div v-if="showMore === true">
                <p v-if="bug.is_all_day === true">time: <br>available all day</p>

                <p v-else>time: <br>[[ bug.time_info[0].hour_am_pm ]] through the [[ bug.time_info[bug.time_info.length - 1].hour_am_pm ]] hour</p>

                <p v-if="bug.is_all_year">season: <br>vailable all year</p>

                <p v-else>season: <br>[[ bug.month_span.toLowerCase() ]]</p>

            </div>
            <div class="show-hint" v-if="currentUser.id">
                <p v-if="showHint === false" @click="showHint = true, showMore = false">show hint &or;</p>

                <p v-if="showHint === true" @click="showHint = false">hide hint ^</p>
            </div>
            <div v-if="showHint === true">
                <p>location: <br>[[ bug.location.toLowerCase() ]]</p>
                <p>rarity: <br>[[ bug.rarity.toLowerCase() ]]</p>
            </div>
        </div>
                
    </div>
    `
})
// -----------------------------------------------------
// ------------ sea creature component -----------------
// -----------------------------------------------------
Vue.component('sea-card', {
    data: function () {
        return {
            showMore: false,
            showHint: false
        }
    },
    props: ['sea', 'currentUser', 'csrf_token'],
    delimiters: ['[[', ']]'],
    methods: {
        catchUncatchSea: function(sea) {
            console.log(this.csrf_token)
            if (!this.currentUser.caught_seacreatures.includes(sea.id)) {
                this.currentUser.caught_seacreatures.push(sea.id)
            } else {
                this.currentUser.caught_seacreatures.splice(this.currentUser.caught_seacreatures.indexOf(sea.id), 1)
            }
            axios({
                method: 'patch',
                url: 'api/v1/currentuser/',
                headers: {
                    'X-CSRFToken': this.csrf_token
                },
                data: {
                    'caught_seacreatures' : this.currentUser.caught_seacreatures
                }
            }).then(response => {
                this.$emit("after-catch")
            })
        }
    },
    template: `
    <div class="sea-card">
        <div class="sea-icon">  
            <img :src="sea.icon"> 
            <p v-if="currentUser.id">
                <button class="catch-btn" @click="catchUncatchSea(sea)">[[ currentUser.caught_seacreatures.includes(sea.id) ? "uncatch" : "catch" ]]</button>
            </p>        
        </div>
        <div class="sea-2">
            <p>[[ sea.name ]]</p>
            <div class="show-more">

                <p v-if="showMore === false" @click="showMore = true, showHint = false">availability &or;</p>

                <p v-if="showMore === true" @click="showMore = false">availability ^</p>
            </div>
            
            <div v-if="showMore === true">
                <p v-if="sea.is_all_day === true">time: <br>available all day</p>

                <p v-else>time: <br>[[ sea.time_info[0].hour_am_pm ]] through the [[ sea.time_info[sea.time_info.length - 1].hour_am_pm ]] hour</p>

                <p v-if="sea.is_all_year">season: <br>available all year</p>

                <p v-else>season: <br>[[ sea.month_span.toLowerCase() ]]</p>
            </div>
            <div class="show-hint" v-if="currentUser.id">
                <p v-if="showHint === false" @click="showHint = true, showMore = false">hints &or;</p>

                <p v-if="showHint === true" @click="showHint = false">hints ^</p>
            </div>
            <div v-if="showHint === true">
                <p>shadow size: <br>[[ sea.shadow_size.toLowerCase() ]]</p>
                <p>speed: <br>[[ sea.speed.toLowerCase() ]]</p>
            </div>
        </div>
    </div>
    `,
})
// --------------------------------------
// --------- friend component -----------
// --------------------------------------
Vue.component('friend-card', {
    data: function() {
        return {
            friendInfo: {},
            selectedId: "",
            compare: false,
        }
    },
    props: ['currentuser'],
    delimiters: ['[[', ']]'],
    methods: {
        loadFriendInfo: function(friendId) {
            axios({
                method: 'get',
                url: `http://127.0.0.1:8000/api/v1/users/${friendId}`
            }).then(response => {
                this.friendInfo = response.data
            })
        }
    },
    template: `
    <div>
        <label for="name">compare with a friend: </label>
        <select name="compare" v-model="selectedId" @change="loadFriendInfo(selectedId), compare = true">
            <option v-for="friend in currentuser.friends_details" :value="friend.id">[[ friend.username ]]</option>
        </select>
        <div class="compare-friend" v-if="compare === true">
            <div class="compare-fish">
                <h2>fish:</h2>
                <div class="my-list" v-for="fish in currentuser.caught_fish_details">
                    <p>[[ fish.name ]]</p>
                </div>
                <div class="compare-list" v-for="fish in friendInfo.caught_fish_details">
                    <p>[[ fish.name ]]</p>
                </div>
            </div>
            <div class="compare-bugs">
                <h2>bugs:</h2>
                <div v-for="bug in currentuser.caught_bugs_details">
                    <p>[[ bug.name ]]</p>
                </div>
                <div v-for="bug in friendInfo.caught_bugs_details">
                    <p>[[ bug.name ]]</p>
                </div>
            </div>
            <div class="compare-sea">
                <h2>sea creatures:</h2>
                <div v-for="sea in currentuser.caught_seacreatures_details">
                    <p>[[ sea.name ]]</p>
                </div>
                <div v-for="sea in friendInfo.caught_seacreatures_details">
                    <p>[[ sea.name ]]</p>
                </div>
            </div>
        </div>
    </div>
    `
})


// -------------------------------------------------
// ---------------- vue instance -------------------
// -------------------------------------------------
const vm = new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    data: {
        fish: [],
        bugs: [],
        seaCreatures: [],
        users: [],
        username: '',
        currentUser: {},
        csrf_token: "",
        clicked: "fish",
        option: "all",
        select: "",
        requests: false,
        catchNow: {
            'fish' : [],
            'bugs' : [],
            'sea' : []
        },
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
        availableNow: function() {
            if (!(this.option === 'available')) {
                return ''
            }
            let date = new Date()
            let monthNow = date.getMonth()
            let hourNow = date.getHours()

            let catchNowFish = this.fish.filter(fish => {
                if (this.uncaughtFish.includes(fish)){
                    let fish_times = []
                    for (object of fish.time_info){
                        fish_times.push(object.hour)
                    }
                    let fish_months = []
                    for (object of fish.month_info){
                        fish_months.push(object.month_num)
                    }
                    if (fish_times.includes(hourNow) && fish_months.includes(monthNow + 1)) {
                        return true
                    }
                }
            })
            
            let catchNowBugs = this.bugs.filter(bug => {
                if (this.uncaughtBugs.includes(bug)){
                    let bugs_times = []
                    for (object of bug.time_info){
                        bugs_times.push(object.hour)
                    }
                    let bugs_months = []
                    for (object of bug.month_info){
                        bugs_months.push(object.month_num)
                    }
                    if (bugs_times.includes(hourNow) && bugs_months.includes(monthNow + 1)) {
                        return true
                    }
                }
            })
            
            let catchNowSea = this.seaCreatures.filter(seaCreatures => {
                if (this.uncaughtSeaCreatures.includes(seaCreatures)){
                    let seaCreatures_times = []
                    for (object of seaCreatures.time_info){
                        seaCreatures_times.push(object.hour)
                    }
                    let seaCreatures_months = []
                    for (object of seaCreatures.month_info){
                        seaCreatures_months.push(object.month_num)
                    }
                    if (seaCreatures_times.includes(hourNow) && seaCreatures_months.includes(monthNow + 1)) {
                        return true
                    }
                }
            })
            this.catchNow = {
                'fish' : catchNowFish,
                'bugs' : catchNowBugs,
                'sea' : catchNowSea
            }
        },

        friendRequest: function(username) {
            // friendId = ''
            for(let user of this.users){
                if(username === user.username) {
                    // friendId.push(user.id)
                    this.currentUser.outbound_friend_requests.push(user.id)
                }
            }
            // this.currentUser.outbound_friend_requests.push(parseInt(friendId))
            axios({
                method: 'patch',
                url: '/api/v1/currentuser/',
                headers: {
                    'X-CSRFToken': this.csrf_token
                },
                data: {
                    'outbound_friend_requests' : this.currentUser.outbound_friend_requests
                }
            }).then(response => {
                this.loadCurrentUser()
                this.username = ''
            })
        },
        acceptFriend: function(friendId) {   
            if (this.currentUser.inbound_friend_requests.includes(friendId)){
            this.currentUser.inbound_friend_requests.splice(this.currentUser.inbound_friend_requests.indexOf(friendId), 1)
            console.log(this.currentUser.inbound_friend_requests)
            this.currentUser.friends.push(friendId)
                axios({
                    method: 'patch',
                    url: '/api/v1/currentuser/',
                    headers: {
                    'X-CSRFToken': this.csrf_token
                    },
                    data: {
                        'inbound_friend_requests': this.currentUser.inbound_friend_requests,
                        'friends': this.currentUser.friends
                    }
                }).then(response => {
                this.loadCurrentUser()
            })
            }
        },
        denyFriend: function(friendId) {
            if (this.currentUser.inbound_friend_requests.includes(friendId)){
                this.currentUser.inbound_friend_requests.splice(this.currentUser.inbound_friend_requests.indexOf(friendId), 1)
                axios({
                    method: 'patch',
                    url: '/api/v1/currentuser/',
                    headers: {
                    'X-CSRFToken': this.csrf_token
                    },
                    data: {
                        'inbound_friend_requests': this.currentUser.inbound_friend_requests
                    }
                }).then(response => {
                this.loadCurrentUser()
                })
            }
        },

        unfriend: function(friendId) {
            if(this.currentUser.friends.includes(friendId)){
                this.currentUser.friends.splice(this.currentUser.friends.indexOf(friendId), 1)
                axios({
                    method: 'patch',
                    url: '/api/v1/currentuser/',
                        headers: {
                        'X-CSRFToken': this.csrf_token
                        },
                        data: {
                            'friends': this.currentUser.friends
                        }
                }).then(response => {
                this.loadCurrentUser()
                })
            }
        }
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
        }
    },
    mounted: function() {
        this.csrf_token = document.querySelector("input[name=csrfmiddlewaretoken]").value;

       
    }
})