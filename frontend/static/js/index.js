console.log("JS is loaded"); 

const router = async () => {
    const routes = [
        {path: "/", view: () => console.log("viewing Dashboard")},
        {path: "/posts", view: () => console.log("viewing posts")},
        {path: "/settings", view: () => console.log("viewing settings")},
        
    ];


    // test each route for potential matches

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0], 
            isMatch: true
        };
    
    }
    console.log(match)
};

document.addEventListener("DOMContentLoaded", () => {
    router();
});