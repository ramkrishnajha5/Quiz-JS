const ques = [
    {
        Q: 'In computer world, Trojan refer to',
        Options: ['Virus','Malware','Worm','Spywere']

    },
    {
        Q: 'Which of the following is not a web browser',
        Options: ['MOSAIC','WWW','Facebook','Netscape navigator']
    },
    {
        Q: 'Computer Hard Disk was first introduced in 1956 by',
        Options: ['Dell','Apple','Microsoft','IBM']
    },
    {
        Q: 'Who is the known as the father of Indian Supercomputing',
        Options: ['Raghunath Mashelkar','Vijay Bhatkar','Jayant narlikar','nandan Nilekani']
    },
    {
        Q: 'Which one is the first search engine on the internet',
        Options: ['Google','Archie','Altavisata','WAIS']
    },
    {
        Q: 'Pegasus is known as .......',
        Options: ['Virus','Spyware','Security Tool','Malware']
    },
    {
        Q: 'First computer virus is known as',
        Options: ['Rabbit','Creeper Virus','Elk Cloner','SCA Virus']
    },
    {
        Q: 'What is the binary value of "A"',
        Options: ['01000100','11000001','01100001','01000001']
    },
    {
        Q: 'Which company first developed the Java programming language',
        Options: ['Microsoft','Google','Sun Microsystems','IBM']
    },
    {
        Q: 'Who is the CEO of intel',
        Options: ['Satya Nadela','Lisa Su','Patrick Gelsinger','Shantanu Narayen']
    },
    {
        Q: 'You Have Comlete Sucessfully!',
        Options:[]
    }
]
const ans = ['Malware','Facebook','IBM','Vijay Bhatkar','Archie','Spyware','Creeper Virus','01000001','Sun Microsystems','Patrick Gelsinger'];
const question = document.querySelector('#ques');
const next = document.querySelector('#nxt');
const opt = document.querySelectorAll('.box2');
const tryagn = document.querySelector('.btn');


let m=0;

next.addEventListener('click',()=>{
    m+=1;
    myquiz();
    if(m == ques.length-1){
        document.querySelector('.ans').style.display = 'none';
        next.style.display = 'none';
        document.querySelector('.heading').style.display = 'none';
    }
})

function myquiz(){
    question.innerHTML = ques[m].Q;

    for (let i =0; i<opt.length; i++){
        opt[i].innerHTML= ques[m].Options[i];
        opt[i].parentElement.style.backgroundColor = 'gray';
        next.style.display = 'none';

    }
    for(item of opt){
        item.addEventListener('click',(e)=>{
            let value = e.target.innerText;

            if(value == ans[m]){
                e.target.parentElement.style.backgroundColor = 'green';
                next.style.display = 'flex';

            }
            else{
                document.querySelector('.box').style.display = 'none';
                e.target.parentElement.style.backgroundColor = 'red';
                document.querySelector('.win').style.display = 'block';
                document.querySelector('.btn').style.display = 'flex';
            }
        })
    }
}
tryagn.addEventListener('click',()=>{
    location.reload(true);
})

    myquiz();























