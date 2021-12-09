


const vm = new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    data: {
        fish: {},
        bugs: {},
        seaCreatures: {},

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