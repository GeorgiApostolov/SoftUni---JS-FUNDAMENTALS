function solve(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        songs() {
            console.log(this.name);
        }
    }


    let count = arr.shift();
    let typeListOnly = arr.pop();

    for (let el of arr) {
        let [typeList, name, time] = el.split(`_`);

        let newSong = new Song(typeList, name, time);
        if (typeList === typeListOnly || typeListOnly === `all`) {
            newSong.songs();
        }
        
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    );
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    );