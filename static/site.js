Vue.component('fish-card', {
    
    props: ['fish'],
    delimiters: ['[[', ']]'],
    template: `
    <div class="fish-card">
                
        <p>[[ fish.name ]]</p>
        <img :src="fish.icon">
                
    </div>
    `
})

Vue.component('bug-card', {
    
    props: ['bug'],
    delimiters: ['[[', ']]'],
    template: `
    <div class="bug-card">
                
        <p>[[ bug.name ]]</p>
        <img :src="bug.icon">
                
    </div>
    `
})

Vue.component('sea-card', {
    
    props: ['sea'],
    delimiters: ['[[', ']]'],
    template: `
    <div class="sea-card">
                
        <p>[[ sea.name ]]</p>
        <img :src="sea.icon">
                
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