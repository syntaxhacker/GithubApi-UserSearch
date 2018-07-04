class GitHub{
    constructor(){
        this.client_id = 'd753890cef0028a3470d';
        this.client_secret = '78b55a67cf431212ff7dedeb9cbdf602a3576e63';
        this.repos_count = 5;
        this.repos_sort = 'created : asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,repos 
    }
    }
}