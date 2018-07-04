// intialise github class
const github = new GitHub;
const ui= new UI;

// search input
const searchUser = document.getElementById('searchUser');

// searchUser input event lister
searchUser.addEventListener('keyup',(e) => {
    // get input
    const userText = e.target.value;

    if(userText !== ''){
        // console.log(userText);

        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // console.log('User Not available try again !')
                // showing alert
                ui.showAlert('User Not Found','alert alert-danger');
            } else{
                // show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
            
        } );
    } else{
        ui.clearProfile();
    }
});


