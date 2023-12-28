/* 
Simulate fetching data from multiple APIs with different dependencies. 
Fetch a list of user IDs, then fetch profile details for each user, and finally, fetch their recent posts. 
Combine all the fetched data into a single object with user information and posts.
*/

// Solution
function fetchAllUserDetails() {
    return fetchUserIds()
        .then((userIds) =>
            Promise.all(
                userIds.map((userId) =>
                    fetchUserProfile(userId)
                        .then((profile) => ({ userId, profile }))
                )
            )
        )
        .then((users) =>
            Promise.all(
                users.map((user) =>
                    fetchUserPosts(user.userId).then((posts) => ({ ...user, posts }))
                )
            )
        );
}
