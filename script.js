

const audioBtn = document.querySelector("#audioBtn");
const audioInput = document.querySelector("#audioInput");
const addTaskBtn = document.querySelector("#addTask");
const addInput = document.querySelector("input");
const TodaysCompletion = document.querySelector("#TodaysCompletion");
const appt = document.querySelector("#appt");
const taskList = document.querySelector(".list");
const taskListCurrent = document.querySelector(".listCurrent");
let link = "";


const inputHandler = function () {
    // click -> value get
     console.log("Input is clicked");
    const newTask = addInput.value;
    // console.log("Input is clicked,newTask",newTask);
    const aTime = appt.value;
    // console.log("Input is clicked,newTask",aTime);
    // const aAudio = audioInput.value;
    
    // let link = audioInput.value;
    // const a = link.target.value;
    // const aAudio = URL.createObjectURL(a);

    // const aAudio = obj.target.files[0];
    const aAudio = link;
    // console.log("Input is clicked,newTask",aAudio);
    if (newTask.length == 0)
        return;

    /*****addTask******/
    const taskElem = createTask(newTask, aTime , aAudio);
    // append 
    taskList.appendChild(taskElem);
    // console.log("taskElem=",taskElem);
    // console.log("Input task list",taskList);
    // console.log("*******************************");
    // console.log("innertext",taskList.innerText);
    // clear the input
    addInput.value = "";
    appt.value = "";
    audioBtn.value = "";

    functionCurrentTask(taskList);
}


const taskElem = document.querySelector(".task");
const timeElem = document.querySelector(".time");
const audioElem = document.querySelector(".audio");

// function updateDOM(data) {
//     /***********************filter required data*********************/
//     console.log("i will update the dom", taskList);

    
//     const task = taskList[0].task;
//     const time = taskList[0].time;
//     // const [date, time] = timeData.split(" ");
//     // const iconLink = data.current.condition.icon;
//     // const condition = data.current.condition.text;
//     /*********************update the dom*************************/
//     taskElem.textContent = task;
//     // audioElem.src = iconLink;
//     audioElem.innerText = audio;
//     timeElem.innerText = time;
// }

function functionCurrentTask(taskList){
    console.log("taskList",taskList);
    const a = taskList;
    // console.log("taskname and time", a);
    // let time= taskList.children[0].aTime.innerText;
    // a= taskList.children[0].task.innerText;
    // console.log("///////////////taskname and time", a);

    /***********************filter required data*********************/
    console.log("i will update the dom", taskList);

    
    const data = a.children[0];
    const data1 = a.children[1];
    const data2 = a.children[2];

    const div = document.createElement("div");
    // div= taskList;
    console.log(div);
    const name = document.createElement("name");
    const ttime = document.createElement("ttime");
    const audio = document.createElement("audio");
    name.innerText="Study";
    ttime.innerText="07:00";
    audio.textContent="Music";
    div.appendChild(name);
    div.appendChild(ttime);
    div.appendChild(audio);

    // div.name = taskList.children[0].name;
    // console.log(div);
    // console.log(div.name);
    // console.log(taskList.children[0].name);

    // div.name.innerText = data.name;
    // div.ttime.innerText = data.time;
    // div.audio.textContent = data.audio;
    // console.log(div);
    // var x = document.getElementById("taskList");
    // console.log(div);
    // console.log(x);


    const task=  taskList.children[0].name;
    const time = data.time;
    // const audio = data.audio;
    console.log("a",div[0]);
    console.log("task",task);
    // const ttime = taskList.children[0];
    // const [date, time] = timeData.split(" ");
    // const iconLink = data.current.condition.icon;
    // const condition = data.current.condition.text;
    /*********************update the dom*************************/
    // taskElem.innerText = data.children[0][0];
    // audioElem.src = iconLink;
    // audioElem.textcontent = audio;
    taskElem.innerText = task;
    timeElem.innerText = time;
    console.log("taskEle and time",taskElem, timeElem);

}

function createTask(newTask,aTime , aAudio ) {
    const div = document.createElement("div");
    const name = document.createElement("name");
    const time = document.createElement("time");
    const audio = document.createElement("audio");
    // let a = aAudio.target.files[0];
    // const audio = URL.createObjectURL(a);
    
    name.textContent = newTask;
    time.textContent = aTime;
    //  src -> base64
    audio.src = aAudio;
    
    div.appendChild(name);
    div.appendChild(time);
    div.appendChild(audio);
    return div;

}

const TodaysCompletionF =function(){

}

const acceptInputHandler = (obj) => {
    let selectedAudio;
    // console.log(obj);
    // if (obj.type == "drop") {
    //     selectedVideo = obj.dataTransfer.files[0]

    // } else {
        selectedAudio = obj.target.files[0];

    // }
    //  src -> base64 
    link = URL.createObjectURL(selectedAudio);
    // return link;
    // console.log(link);
}

audioInput.addEventListener("change",acceptInputHandler);
addTaskBtn.addEventListener("click", inputHandler );
  
// addTaskBtn.addEventListener("click", function() {
//     inputHandler(link);
//   } );
TodaysCompletion.addEventListener("click", TodaysCompletionF);