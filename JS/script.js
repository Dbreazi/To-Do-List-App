function newItem () {


// Adding a new item

// Version 1

//   let li = $('<li></li>');
//   let inputValue = $('#input').val();
//   li.append(inputValue);

//   if (inputValue === '') {
//       alert("You MUST write something");
//   } else {
//       $('#list').append(li);
//   }


// Version 2

let inputValue = $('input').val();
if (inputValue === '') {
  aleert("You MUST write something");
return;
}
let li = $('<li></li>').text(inputValue);
$('#list').append(li);


// Crossing out an item

  li.on('dblclick', function() {
    li.addClass('strike');
  });



// Adding the delete button 

  let crossOutButton = $('<button>X</button>');
  li.append(crossOutButton);

//Adding CLASS DELETE (DISPLAY: NONE)

crossOutButton.on('click', function () {
    li.addClass('delete');
    li.css('display','none');
  });

  //4. Reordering the list
  $('#list').sortable();
}


