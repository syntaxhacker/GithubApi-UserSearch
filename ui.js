class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="profile pic" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public repos : ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gits : ${user.public_gists}</span>
                    <span class="badge badge-success">followers : ${user.followers}</span>
                    <span class="badge badge-info">Followers : ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company : ${user.company}</li>
                        <li class="list-group-item">Website/Blog : ${user.blog}</li>
                        <li class="list-group-item">Location : ${user.location}</li>
                        <li class="list-group-item">Member Since : ${user.created_at}</li>
                    </ul>
                </div>
            </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        
        `;
    }

    // show repos
    showRepos(repos){
        let output = '';

        repos.forEach(function(repo){

            output += `
            
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-mb-6">
                        <a href="${repo.html_url}" target="_blank" >${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">watchers : ${repo.watchers}</span>
                        <span class="badge badge-success">Forks : ${repo.forms_count}</span>
                    </div>
                </div>
            </div>
            `
        });

        document.getElementById('repos').innerHTML = output;
    }


// show alert message not found
    showAlert(message ,  className){
        // clear previous alerts
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // add classes
        div.className = className;
        // add msg
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.searchContainer');
        // get search box

        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div , search);

        //   alert  timeout after 2sec
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }
// clear profile space
    clearProfile(){
        this.profile.innerHTML = '';
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }
}