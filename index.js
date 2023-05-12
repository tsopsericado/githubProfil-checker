// fetching data from github api
const fetchGithubUser = async () => {
  let username = document.getElementById("search-input").value;

  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  // returned message when a githib username is searched
  if (data.messsage == "Not Found") {
    alert(data.messsage);
  } else {
    //Display data fetched 
    document.getElementById("user-details").innerHTML = `
           <div class="profile">
            <div class="profile-image">
                <img class="profile-image-icon" src="${data.avatar_url}" />
            </div>
            <div class="profile-details">
                <h2 class="name"><a href="https://github.com/${data.login}" target="_blanc">${data.name}</a></h2>
                <p class="username">@${data.login}</p>
                <p class="bio">${
                  data.bio ? data.bio : "This account don't have bio"
                }</p>
                <div class="stats">
                    <div>
                        <div class="stats-name">Public Repos</div>
                        <div class="stats-name">${data.public_repos}</div>
                    </div>
                    <div>
                        <div class="stats-name">Followers</div>
                        <div class="stats-name">${data.followers}</div>
                    </div>
                    <div>
                        <div class="stats-name">Following</div>
                        <div class="stats-name">${data.following}</div>
                    </div>
                </div>
                <div class="media">
                    <p>
                        <span class="media-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </span>
                        <span class="media-name">${
                          data.location ? data.location : "Not Available"
                        }</span>
                    </p>
                    <p>
                        <span class="media-icon">
                            <i class="fas fa-link"></i>
                        </span>
                        <span class="media-name">${
                          data.blog ? data.blog : "Not Available"
                        }</span>
                    </p>
                    <p>
                        <span class="media-icon">
                            <i class="fab fa-twitter"></i>
                        </span>
                        <span class="media-name">${
                          data.twitter_username
                            ? data.twitter_username
                            : "Not Available"
                        }</span>
                    </p>
                    <p>
                        <span class="media-icon">
                            <i class="fas fa-building"></i>
                        </span>
                        <span class="media-name">${
                          data.company ? data.company : "Not Available"
                        }</span>
                    </p>
                </div>
            </div>
        </div>
    `;
  }
};
