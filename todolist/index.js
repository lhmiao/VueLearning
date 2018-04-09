var vm = new Vue({
    el: "#toDoList",
    data: {
        newItem: "",
        todoList: [],
        doneList: []
    },
    methods: {
        addNewItem: function () {
            if(this.newItem==="") {
                alert("您未输入事件内容，请输入后再添加！！！");
                return;
            }
            this.todoList.push(this.newItem);
            this.newItem = "";
        },
        finishItem: function (index) {
            var doneItem = this.todoList.splice(index, 1)[0];
            this.doneList.push(doneItem);
        },
        deleteTodoItem: function (index) {
            this.todoList.splice(index, 1);
        },
        revokeDoneItem: function (index) {
            var backItem = this.doneList.splice(index, 1)[0];
            this.todoList.push(backItem);
        },
        deleteDoneItem: function (index) {
            this.doneList.splice(index, 1);
        }
    },
    created: function () {
        if (typeof localStorage.todoData === "string") {
            this.todoList = JSON.parse(localStorage.todoData).todoList;

        }
        if (typeof localStorage.doneData === "string") {
            this.doneList = JSON.parse(localStorage.doneData).doneList;
        }
    }
});

function saveData() {
    var todoData = {
        todoList: vm.todoList
    };
    localStorage.todoData = JSON.stringify(todoData);
    var doneData = {
        doneList: vm.doneList
    };
    localStorage.doneData = JSON.stringify(doneData);
}

window.addEventListener("beforeunload", saveData, false);