const app = new Vue({
    el: '#app',

    data: {
        title: 'Lista de Actividades',
        task: [],
        newTask: '',
        date: '',
    },

    methods: {
        addTask: function(){
            this.task.push({
                name: this.$refs.voice.value,
                date: this.$refs.datepicker.value,
                status: false
            });
            localStorage.setItem('task-vue', JSON.stringify(this.task));
            this.newTask = '';
            this.date = '';
            this.$refs.voice.value = ''
            this.$refs.datepicker.value = ''
        },

        changeStatus: function(index){
            this.task[index].status = true;
            localStorage.setItem('task-vue', JSON.stringify(this.task));
        },

        delTask: function(index){
            this.task.splice(index, 1);
            localStorage.setItem('task-vue', JSON.stringify(this.task));
        },
    },

    created:function(){
        let dataDB = JSON.parse(localStorage.getItem('task-vue')).sort( (a,b) => a.date > b.date ? 1 : -1);
        if(dataDB === null){
            this.task = [];
        } else {
            this.task = dataDB;
        }
    },
    
});