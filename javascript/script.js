const calc = new Vue({
    el: '#calculator',
    data: {
        render: ''
    },
    methods: {

        n1: function() {
            console.log('n1');
            this.render = this.render + '1';
        },

        n2: function() {
            console.log('n2');
            this.render = this.render + '2';
        },

        n3: function() {
            console.log('n3');
            this.render = this.render + '3';
        },

        plus: function() {
            console.log('plus');
            this.render = this.render + '+';
        },

        n4: function() {
            console.log('n4');
        },

        n5: function() {
            console.log('n5');
        },

        n6: function() {
            console.log('n6');
        },

        less: function() {
            console.log('less');
        },

        n7: function() {
            console.log('n7');
        },

        n8: function() {
            console.log('n8');
        },

        n9: function() {
            console.log('n9');
        },

        division: function() {
            console.log('division');
        },

        n0: function() {
            console.log('n0');
        },

        equal: function() {
            console.log('equal');
        },

        times: function() {
            console.log('times');
        },

        // -------------------------
    }
})

