const s_quiz = [
  {
    question: "Which data structure follows LIFO?",
    option1: "Queue",
    option2: "Stack",
    option3: "Array",
    option4: "Linked List",
    answer: "Stack"
  },
  {
    question: "Which data structure follows FIFO?",
    option1: "Stack",
    option2: "Queue",
    option3: "Tree",
    option4: "Graph",
    answer: "Queue"
  },
  {
    question: "Time complexity of binary search?",
    option1: "O(n)",
    option2: "O(log n)",
    option3: "O(n log n)",
    option4: "O(1)",
    answer: "O(log n)"
  },
  {
    question: "Which data structure uses recursion internally?",
    option1: "Queue",
    option2: "Stack",
    option3: "Array",
    option4: "Heap",
    answer: "Stack"
  },
  {
    question: "Which traversal uses Root-Left-Right?",
    option1: "Inorder",
    option2: "Preorder",
    option3: "Postorder",
    option4: "Level order",
    answer: "Preorder"
  }
//   ,
//   {
//     question: "Which sorting algorithm is fastest on average?",
//     option1: "Bubble Sort",
//     option2: "Selection Sort",
//     option3: "Quick Sort",
//     option4: "Insertion Sort",
//     answer: "Quick Sort"
//   },
//   {
//     question: "Worst case time complexity of Quick Sort?",
//     option1: "O(n)",
//     option2: "O(n log n)",
//     option3: "O(log n)",
//     option4: "O(n²)",
//     answer: "O(n²)"
//   },
//   {
//     question: "Which data structure is used in BFS?",
//     option1: "Stack",
//     option2: "Queue",
//     option3: "Tree",
//     option4: "Set",
//     answer: "Queue"
//   }
//   ,
//   {
//     question: "Which data structure is used in DFS?",
//     option1: "Queue",
//     option2: "Heap",
//     option3: "Stack",
//     option4: "Array",
//     answer: "Stack"
//   },
//   {
//     question: "Which sorting algorithm is stable?",
//     option1: "Quick Sort",
//     option2: "Heap Sort",
//     option3: "Merge Sort",
//     option4: "Selection Sort",
//     answer: "Merge Sort"
//   },
//   {
//     question: "Which data structure allows duplicate values?",
//     option1: "Set",
//     option2: "Array",
//     option3: "Map",
//     option4: "Graph",
//     answer: "Array"
//   },
//   {
//     question: "Which tree has at most two children?",
//     option1: "Binary Tree",
//     option2: "AVL Tree",
//     option3: "B Tree",
//     option4: "Trie",
//     answer: "Binary Tree"
//   },
//   {
//     question: "Which algorithm is used to find shortest path?",
//     option1: "DFS",
//     option2: "BFS",
//     option3: "Dijkstra",
//     option4: "Prim",
//     answer: "Dijkstra"
//   },
//   {
//     question: "Which data structure is best for LRU cache?",
//     option1: "Array",
//     option2: "Stack",
//     option3: "HashMap + Doubly Linked List",
//     option4: "Queue",
//     answer: "HashMap + Doubly Linked List"
//   },
//   {
//     question: "Which operation is faster in Hash Table?",
//     option1: "Search",
//     option2: "Insert",
//     option3: "Delete",
//     option4: "All are O(1)",
//     answer: "All are O(1)"
//   },
//   {
//     question: "Which sorting algorithm works in O(n) time?",
//     option1: "Merge Sort",
//     option2: "Quick Sort",
//     option3: "Counting Sort",
//     option4: "Heap Sort",
//     answer: "Counting Sort"
//   },
//   {
//     question: "Which traversal uses Left-Root-Right?",
//     option1: "Preorder",
//     option2: "Postorder",
//     option3: "Inorder",
//     option4: "Level order",
//     answer: "Inorder"
//   },
//   {
//     question: "Which data structure is non-linear?",
//     option1: "Array",
//     option2: "Linked List",
//     option3: "Stack",
//     option4: "Graph",
//     answer: "Graph"
//   },
//   {
//     question: "Which algorithm uses divide and conquer?",
//     option1: "Bubble Sort",
//     option2: "Insertion Sort",
//     option3: "Merge Sort",
//     option4: "Selection Sort",
//     answer: "Merge Sort"
//   },
//   {
//     question: "Which data structure stores key-value pairs?",
//     option1: "Array",
//     option2: "Stack",
//     option3: "HashMap",
//     option4: "Queue",
//     answer: "HashMap"
//   },
//   {
//     question: "Height of a single node tree is?",
//     option1: "0",
//     option2: "1",
//     option3: "-1",
//     option4: "2",
//     answer: "0"
//   },
//   {
//     question: "Which data structure is used in recursion?",
//     option1: "Queue",
//     option2: "Stack",
//     option3: "Array",
//     option4: "Heap",
//     answer: "Stack"
//   },
//   {
//     question: "Which sorting algorithm is in-place?",
//     option1: "Merge Sort",
//     option2: "Quick Sort",
//     option3: "Counting Sort",
//     option4: "Radix Sort",
//     answer: "Quick Sort"
//   },
//   {
//     question: "Which graph traversal uses queue?",
//     option1: "DFS",
//     option2: "BFS",
//     option3: "Dijkstra",
//     option4: "Prim",
//     answer: "BFS"
//   },
//   {
//     question: "Which data structure is best for undo operation?",
//     option1: "Queue",
//     option2: "Stack",
//     option3: "Tree",
//     option4: "Graph",
//     answer: "Stack"
//   }
]

const m_quiz = [
  {
    question: "Which of the following are linear data structures?",
    option1: "Array",
    option2: "Stack",
    option3: "Tree",
    option4: "Queue",
    answer: ["Array", "Stack", "Queue"]
  },
  {
    question: "Which data structures use LIFO principle?",
    option1: "Queue",
    option2: "Stack",
    option3: "Recursion",
    option4: "Array",
    answer: ["Stack", "Recursion"]
  },
  {
    question: "Which of the following are non-linear data structures?",
    option1: "Tree",
    option2: "Graph",
    option3: "Array",
    option4: "Linked List",
    answer: ["Tree", "Graph"]
  },
  {
    question: "Which sorting algorithms are stable?",
    option1: "Merge Sort",
    option2: "Bubble Sort",
    option3: "Insertion Sort",
    option4: "Quick Sort",
    answer: ["Merge Sort", "Bubble Sort", "Insertion Sort"]
  },
  {
    question: "Which operations can be performed on a stack?",
    option1: "Push",
    option2: "Pop",
    option3: "Peek",
    option4: "Insert at middle",
    answer: ["Push", "Pop", "Peek"]
  },
  {
    question: "Which algorithms use divide and conquer technique?",
    option1: "Merge Sort",
    option2: "Quick Sort",
    option3: "Binary Search",
    option4: "Bubble Sort",
    answer: ["Merge Sort", "Quick Sort", "Binary Search"]
  },
  {
    question: "Which of the following are applications of stack?",
    option1: "Undo operation",
    option2: "Function calls",
    option3: "Expression evaluation",
    option4: "Level order traversal",
    answer: ["Undo operation", "Function calls", "Expression evaluation"]
  },
  {
    question: "Which are tree traversal techniques?",
    option1: "Inorder",
    option2: "Preorder",
    option3: "Postorder",
    option4: "Hashing",
    answer: ["Inorder", "Preorder", "Postorder"]
  },
  {
    question: "Which data structures allow dynamic size?",
    option1: "Array",
    option2: "Linked List",
    option3: "Tree",
    option4: "Graph",
    answer: ["Linked List", "Tree", "Graph"]
  },
  {
    question: "Which are graph traversal algorithms?",
    option1: "BFS",
    option2: "DFS",
    option3: "Dijkstra",
    option4: "Binary Search",
    answer: ["BFS", "DFS"]
  },
  {
    question: "Which are advantages of linked list over array?",
    option1: "Dynamic size",
    option2: "Random access",
    option3: "Efficient insertion/deletion",
    option4: "No memory wastage",
    answer: ["Dynamic size", "Efficient insertion/deletion"]
  },
  {
    question: "Which sorting algorithms are comparison based?",
    option1: "Merge Sort",
    option2: "Quick Sort",
    option3: "Heap Sort",
    option4: "Counting Sort",
    answer: ["Merge Sort", "Quick Sort", "Heap Sort"]
  },
  {
    question: "Which operations are O(1) in stack?",
    option1: "Push",
    option2: "Pop",
    option3: "Peek",
    option4: "Search",
    answer: ["Push", "Pop", "Peek"]
  },
  {
    question: "Which data structures use pointers?",
    option1: "Linked List",
    option2: "Tree",
    option3: "Graph",
    option4: "Array",
    answer: ["Linked List", "Tree", "Graph"]
  },
  {
    question: "Which algorithms are greedy algorithms?",
    option1: "Dijkstra",
    option2: "Prim",
    option3: "Kruskal",
    option4: "Merge Sort",
    answer: ["Dijkstra", "Prim", "Kruskal"]
  },
  {
    question: "Which are properties of Binary Search Tree?",
    option1: "Left child < Root",
    option2: "Right child > Root",
    option3: "Balanced always",
    option4: "No duplicate keys",
    answer: ["Left child < Root", "Right child > Root"]
  },
  {
    question: "Which hashing collision techniques exist?",
    option1: "Linear probing",
    option2: "Quadratic probing",
    option3: "Double hashing",
    option4: "Binary search",
    answer: ["Linear probing", "Quadratic probing", "Double hashing"]
  },
  {
    question: "Which are applications of queue?",
    option1: "CPU scheduling",
    option2: "Printer queue",
    option3: "BFS traversal",
    option4: "Recursion",
    answer: ["CPU scheduling", "Printer queue", "BFS traversal"]
  },
  {
    question: "Which data structures are used to implement recursion?",
    option1: "Stack",
    option2: "Call stack",
    option3: "Heap",
    option4: "Queue",
    answer: ["Stack", "Call stack"]
  },
  {
    question: "Which are characteristics of AVL tree?",
    option1: "Self-balancing",
    option2: "Binary Search Tree",
    option3: "Height balanced",
    option4: "Allows duplicates",
    answer: ["Self-balancing", "Binary Search Tree", "Height balanced"]
  },
  {
    question: "Which sorting algorithms are in-place?",
    option1: "Quick Sort",
    option2: "Heap Sort",
    option3: "Insertion Sort",
    option4: "Merge Sort",
    answer: ["Quick Sort", "Heap Sort", "Insertion Sort"]
  },
  {
    question: "Which are graph representations?",
    option1: "Adjacency matrix",
    option2: "Adjacency list",
    option3: "Edge list",
    option4: "Binary tree",
    answer: ["Adjacency matrix", "Adjacency list", "Edge list"]
  },
  {
    question: "Which data structures store key-value pairs?",
    option1: "HashMap",
    option2: "Dictionary",
    option3: "Map",
    option4: "Array",
    answer: ["HashMap", "Dictionary", "Map"]
  },
  {
    question: "Which problems can be solved using stack?",
    option1: "Balanced parentheses",
    option2: "Undo operation",
    option3: "Next greater element",
    option4: "Level order traversal",
    answer: ["Balanced parentheses", "Undo operation", "Next greater element"]
  },
  {
    question: "Which are applications of graph data structure?",
    option1: "Social networks",
    option2: "Maps & routing",
    option3: "Network topology",
    option4: "Stack memory",
    answer: ["Social networks", "Maps & routing", "Network topology"]
  }
]
let time = 30;
let timer

function startTimer(){
    clearInterval(timer); // stop
    time=30
    document.getElementById("timer").innerText=time;
    timer = setInterval(()=>{
        time--;
        document.getElementById("timer").innerText=time;

        if(time === 0){
            clearInterval(timer);
            alert("Time Up!")
            next();
        }
    },1000)
}
const question = document.querySelector("#question")

// console.log(question.textContent)

const text_opt_a = document.querySelector("#text_opt_a");
const text_opt_b = document.querySelector("#text_opt_b");
const text_opt_c = document.querySelector("#text_opt_c");
const text_opt_d = document.querySelector("#text_opt_d");
// console.log(text_opt_a.textContent)
const que_id = document.querySelector('#que_id');


const selected_ans = document.querySelector(".answer");

// console.log(selected_ans.id);

const btn = document.querySelector("#btn");

let cur_que = 0;
let score = 0;
let qi= cur_que+1;
que_id.textContent = qi;
startTimer();
question.textContent = s_quiz[cur_que].question;
text_opt_a.textContent = s_quiz[cur_que].option1;
text_opt_b.textContent = s_quiz[cur_que].option2;
text_opt_c.textContent = s_quiz[cur_que].option3;
text_opt_d.textContent = s_quiz[cur_que].option4;


// btn.addEventListener('click',()=>{
//     check_ans = document.querySelector('input[type="radio"]:checked');
//     // console.log(check_ans.nextSibling.textContent)

// //     if(check_ans === null){
// //     // alert("re BSDK phele Answer to select kr bkl")

// //     cur_que++;
// //      qi= cur_que+1;
    
// // }
// // else {
// //     
// // console.log(check_ans.nextElementSibling.innerText)
//  if(check_ans.nextElementSibling.innerText === s_quiz[cur_que].answer){
//     score++;
//     console.log(score);
//  }
// cur_que++;
//  qi= cur_que+1;

// if(cur_que<s_quiz.length){
//     que_id.textContent = qi;
//     startTimer();
//     question.textContent = s_quiz[cur_que].question;
// text_opt_a.textContent = s_quiz[cur_que].option1;
// text_opt_b.textContent = s_quiz[cur_que].option2;
// text_opt_c.textContent = s_quiz[cur_que].option3;
// text_opt_d.textContent = s_quiz[cur_que].option4;

// check_ans.checked = false;
// }
// else{
//       alert(`your score is : ${score} out of ${s_quiz.length}`);
//     location.reload();

// }
// // }
// });

function next(){
    
    check_ans = document.querySelector('input[type="radio"]:checked');

    if(check_ans === null){
     alert("Tukka hi mar le !!")
}
 if(check_ans.nextElementSibling.innerText === s_quiz[cur_que].answer){
    score++;
    //console.log(score);
 }
cur_que++;
 qi= cur_que+1;

if(cur_que<s_quiz.length){
    que_id.textContent = qi;
    startTimer();
    question.textContent = s_quiz[cur_que].question;
text_opt_a.textContent = s_quiz[cur_que].option1;
text_opt_b.textContent = s_quiz[cur_que].option2;
text_opt_c.textContent = s_quiz[cur_que].option3;
text_opt_d.textContent = s_quiz[cur_que].option4;

check_ans.checked = false;
}
else{
      alert(`your score is : ${score} out of ${s_quiz.length}`);
    location.reload();

}


}

function pre(){
    if(cur_que<=0){
        alert("go next bro !!");
        return;
    }
cur_que--;
qi = cur_que-1;
 que_id.textContent = qi;
 startTimer();
    question.textContent = s_quiz[cur_que].question;
text_opt_a.textContent = s_quiz[cur_que].option1;
text_opt_b.textContent = s_quiz[cur_que].option2;
text_opt_c.textContent = s_quiz[cur_que].option3;
text_opt_d.textContent = s_quiz[cur_que].option4;
}