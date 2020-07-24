const calc = new Vue({
    el: '#calculator',
    data: {
        render: ''
    },
    methods: {

        checkRender: function(val) {
            if (this.render.length <= 14) {
                this.render += `${val}`;
            }
        },

        n1: function() {
            this.checkRender('1');
        },

        n2: function() {
            this.checkRender('2');
        },

        n3: function() {
            this.checkRender('3');
        },

        plus: function() {
            this.checkRender('+');
        },

        n4: function() {
            this.checkRender('4');
        },

        n5: function() {
            this.checkRender('5');
        },

        n6: function() {
            this.checkRender('6');
        },

        less: function() {
            this.checkRender('-');
        },

        n7: function() {
            this.checkRender('7');
        },

        n8: function() {
            this.checkRender('8');
        },

        n9: function() {
            this.checkRender('9');
        },

        division: function() {
            this.checkRender('/');
        },

        n0: function() {
            this.checkRender('0');
        },

        equal: function() {
            
        },

        times: function() {
            this.checkRender('*');
        },
    }
})

