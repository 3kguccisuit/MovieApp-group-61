import { ref, set, child, get, getDatabase, update, remove } from "firebase/database";
import { db } from './firebase';


export const updateFirebaseAdd = (movies, user) => {
    if (user) {
        const reference = ref(db, 'users/' + user.uid)
        set(reference, {
            ID: user.uid,
            Movies: movies
        });
    }
}


export const updateFirebaseRemove = async (movieId, user, movieArray) => {
    if (user) {
        const reference2 = ref(db, 'users/' + user.uid )

        const index = movieArray.indexOf(movieId);
        if (index > -1) {
            movieArray.splice(index, 1);
        }

        if (movieArray.length === 0) {
            // Delete the Movies field from the database
            remove(reference2);
        } else {
            // Update the value of the Movies field in the database
            update(reference2, { Movies: movieArray });  // pass an object containing the children to replace
        }
    }

}


export async function updateModelfromFirebase(user, model) {
    //model.addObserver(updateModelfromFirebase);

    if(!user){
        return;
    }
    return new Promise((resolve, reject) => {
        // if (!user) { 
        //     reject(new Error("user is null or undefined"));
        //     return;
        // }

        //const reference = ref(db, 'users/' + user.uid + '/Movies/');
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${user.uid}` + '/Movies/')).then((snapshot) => {
            if (snapshot.exists()) {
                const movies = snapshot.val();
                model.updateMovieList(movies);
                resolve(movies);
            } else {
                //console.log("No data available");
                resolve([]);
            }
        }).catch((error) => {
            console.error(error);
            reject(error);
        });
    });
}
