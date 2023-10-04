async function showExpenditure(event)
{
    event.preventDefault();
    const amount =  event.target.expAmount.value;
    const expDesc =  event.target.Description.value; 
    const expCate =  event.target.categoryDetails.value;

    const obj = {
        amount,
        expDesc,
        expCate
    }

    try {
        const response = await axios.post('http://localhost:3000/post/expenses',obj);
            showItemsOnScreen(response.data);
        }
    
    catch(err) {
        console.log(err);
    }
}

window.addEventListener('DOMContentLoaded' , async() => {

    try {
        const response = await axios.get('http://localhost:3000/get/expenses')
        response.data.forEach((element) => {
            showItemsOnScreen(element);
        })
    }
    catch(err) {
        console.log(err);
    }
})

function showItemsOnScreen(list){

    document.getElementById('quant').value = '';
    document.getElementById('descrip').value = '';
    document.getElementById('cate').value = '';

    const parentElement = document.getElementById('listOfExpenditures');

    const childElement = `<li id=${list.id}> '${list.amount}'-'${list.expDesc}'-'${list.expCate}'
                        <button class="deletebutton" onclick=deleteUser(${list.id})>Delete</button>
                        <button class="editbutton" onclick=editUser(${list.id})>Edit</button>
                        </li>`

    parentElement.innerHTML += childElement;

}

      function deleteUser(id) {
        try {
          axios.delete(`http://localhost:3000/delete/expenses/${id}`)
        
            removeOnScreen(id);
        }
        catch(err) {
            console.log(err);
        }
    }

  async function editUser(id) {

        try {
             const response = await axios.get(`http://localhost:3000/edit/expenses/${id}`)


              document.getElementById('quant').value = response.data.amount;
              document.getElementById('descrip').value = response.data.expDesc;
              document.getElementById('cate').value = response.data.expCate;
              deleteUser(id);
            }
        catch(err) {
            console.log(err);
        }
    }
    
    function removeOnScreen(id){
    
        const parentElement = document.getElementById('listOfExpenditures');
    
        const childElement = document.getElementById(id);
    
        parentElement.removeChild(childElement);
    
    
    }

