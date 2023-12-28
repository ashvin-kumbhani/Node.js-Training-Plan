/* 
Create a function that fetches user data from an API. 
If the API call fails, retry it twice with a delay of 2 seconds between retries. 
If all retries fail, return a default user object with a message indicating the error.
*/

// Solution
function fetchUserDataWithRetries() {
    let retries = 2;
    return fetchUserData()
        .catch((error) => {
            if (retries > 0) {
                setTimeout(() => {
                    retries--;
                    return fetchUserDataWithRetries();
                }, 2000);
            } else {
                return { error: "Failed to fetch user data" };
            }
        });
}
