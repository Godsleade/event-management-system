let names = !localStorage.getItem('attendeeRecords') ? [] : JSON.parse(localStorage.getItem('attendeeRecords'));

let btnAdd = document.getElementById('new_attendee_btn');
let btnFind = document.getElementById("findAttendeeBtn");
let nameInput = document.getElementById('attendee-name');
let nameInput2 = document.getElementById("findAttendee");
let resultMessage = document.getElementById('result');
let listBtn = document.getElementById('listAllAttendee_btn');
let nameInput3 = document.getElementById('removeAttendeeName');
let btnRemove = document.getElementById('removeAttendee_btn');

btnAdd.addEventListener('click', () => {
    let name = nameInput.value.trim().toUpperCase();
    if (name === '') {
        alert('Name is empty');
    } else {
        addName(name);
    }
});

function addName(name) {
    if (names.includes(name)) {
        alert(`${name} already exists`);
    } else {
        names.push(name);
        updateLocalStorage();
        alert(`${name} added successfully`);
        nameInput.value = '';
        nameInput.focus();
    }
}

function updateLocalStorage() {
    localStorage.setItem('attendeeRecords', JSON.stringify(names));
}

btnFind.addEventListener('click', () => {
    let findName = nameInput2.value.trim().toUpperCase();
    if (findName === "") {
        alert("Please enter a name to search.");
        nameInput2.focus();
        return;
    }

    const index = names.indexOf(findName);
    if (index !== -1) {
        resultMessage.textContent = `Attendee found at position: ${index + 1} with index no: ${index}`;
    } else {
        resultMessage.textContent = 'Attendee not found.';
    }
    nameInput2.value = '';
    nameInput2.focus();
});

listBtn.addEventListener('click', () => {
    const resultMessage2 = document.getElementById('result2');
    if (names.length > 0) {
        resultMessage2.innerHTML = "Attendees: " + names.join(', ');
    } else {
        resultMessage2.innerHTML = "No attendees found.";
    }
});

btnRemove.addEventListener('click', () => {
    let removedName = nameInput3.value.trim().toUpperCase();
    if (removedName === "") {
        alert("Please enter a name to be removed.");
        return;
    }
    const index = names.indexOf(removedName);
    if (index === -1) {
        alert(`${removedName} not found`);
    } else {
        names.splice(index, 1);
        updateLocalStorage();
        alert(`${removedName} removed successfully`);
        nameInput3.value = '';
        nameInput3.focus();
    }
});
