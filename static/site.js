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
            <p>[[ fish.month_info[0] ]]</p>
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