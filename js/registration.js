const createTeamButton = document.getElementById("createTeamButton");
const joinTeamButton = document.getElementById("joinTeamButton");

createTeamButton.addEventListener('click', function(event){
    event.preventDefault();
    const createTeam = document.getElementById('createTeam');
    const joinTeam = document.getElementById('joinTeam');
    // const action = document.getElementById('action');
    // action.value = 'action2';
    createTeam.style.display = 'inline-block';
    joinTeam.style.display = 'none';
    createTeam.style.marginTop = '20px';
})

joinTeamButton.addEventListener('click', function(event){
    event.preventDefault();
    const createTeam = document.getElementById('createTeam');
    const joinTeam = document.getElementById('joinTeam');
    // const action = document.getElementById('action');
    // action.value = 'action2';
    createTeam.style.display = 'none';
    joinTeam.style.display = 'inline-block';
})