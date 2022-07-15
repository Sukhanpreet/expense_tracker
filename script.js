
let expense = document.getElementById('expense');
let date = document.getElementById('date');
let amount = document.getElementById('amount');

let add_button = document.querySelector('#addExpense');

let table_body= document.querySelector('tbody');

add_button.addEventListener('click',addExpense);


function addExpense(){
    
    if(expense.value!=='' && date.value!=='' && amount.value!==''){

        let arr=[];

        arr[0]=expense.value;
        arr[1]=date.value;
        arr[2]=amount.value
        arr[3]="";

        table_body.firstElementChild.setAttribute('class','nodisplay');

        let tr=document.createElement('tr');

        table_body.append(tr);

        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);

        td1.innerText=expense.value;
        td2.innerText=date.value;
        td3.innerText=amount.value;

        let delete_button=document.createElement('input');

        table_body.append(tr);
       
        for(let i=0;i<4;i++){
            let td=document.createElement('td');
            tr.append(td);
            
            td.innerText=arr[i];
        
        }

        tr.lastChild.append(delete_button);
        
        delete_button.setAttribute('type','button');  
        delete_button.setAttribute('value','X');  
        delete_button.setAttribute('id','delete_button');  

        delete_button.addEventListener('click', deleteExpense);

        expense.value='';
        date.value='';
        amount.value='';

    }
    else{
        alert ('please fill the data');
    }

    
}


function deleteExpense(){

    if(this.parentElement.parentElement.previousElementSibling.classList.contains('nodisplay') && this.parentElement.parentElement.nextElementSibling ==null){
        this.parentElement.parentElement.previousElementSibling.classList.remove('nodisplay');
    }
    this.parentElement.parentElement.remove();

}


