const form = {
    images: [
        {
            image_id: 1,
            image_url: "https://memolition.com/wp-content/uploads/2015/07/stunning-photographs-from-the-2015-nat-geo-traveler-photo-contest-74600.jpg"
        },
        {
            image_id: 2,
            image_url: "http://51ranchoutfitters.com/wp-content/uploads/2016/11/IMG_1255.jpg"
        },
        {
            image_id: 3,
            image_url: "https://jooinn.com/images/dramatic-landscape-7.jpg"
        },
        {
            image_id: 4,
            image_url: "https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL2Jsb2ctaW1hZ2VzL0hvdy10by1FYXNpbHktRW5oYW5jZS1hLVN1bnNldC1QaG90by1pbi1QaG90b3Nob3AvcG9zdC1oZWFkZXIuanBnP210aW1lPTIwMTkwMjA1MTIwNTMz&q=85&enlarge=true&h=800&w=1200"
        },
        {
            image_id: 5,
            image_url: "https://tse2.mm.bing.net/th?id=OIP.1v-cM3DXEXxHWuXuv986xQHaE8&pid=Api&P=0&w=242&h=162"
        },
        {
            image_id: 6,
            image_url: "https://jooinn.com/images/hdr-landscape-5.jpg"},
        {
            image_id: 7,
            image_url: "https://jooinn.com/images/beautiful-lake-5.jpg"},
        {
            image_id: 8,
            image_url: "https://tse1.mm.bing.net/th?id=OIP.gPjiPB6AY0fiUVDRrOCR8wHaE7&pid=Api&P=0&w=242&h=162"
        },
        {
            image_id: 9,
            image_url: "https://www.shutterbug.com/images/photo_post/[uid]/DSC08084-001.jpg"
        },
        {
            image_id: 10,
            image_url: "https://cabar.asia/wp-content/uploads/2018/05/NOLX1284.jpg"
        },
    ],
    count: 1,
    movies:[
        {
        "id": 1,
        "movie_title": "First Knight",
        "director": "Biagi",
        "date": "5/3/2021",
        "movie_genre": "Action|Drama|Romance",
        "img_url": "https://www.cheatsheet.com/wp-content/uploads/2020/12/Robert-Pattinson-and-Kristen-Stewart-5-1024x682.jpg"
    }, {
        "id": 2,
        "movie_title": "Battlestar Galactica: The Plan",
        "director": "Vittle",
        "date": "11/4/2020",
        "movie_genre": "Action|Adventure|Drama|Sci-Fi",
        "img_url": "https://onettechnologiesindia.com/img/135057.jpg"
    }, {
        "id": 3,
        "movie_title": "Snipes",
        "director": "Bengle",
        "date": "8/23/2021",
        "movie_genre": "Drama|Thriller",
        "img_url": "https://static2.gamerantimages.com/wordpress/wp-content/uploads/2021/03/Features-6.jpg"
    }, {
        "id": 4,
        "movie_title": "It Follows",
        "director": "Burwood",
        "date": "4/30/2021",
        "movie_genre": "Horror",
        "img_url": "https://media.notthebee.com/articles/a1c60efc-3386-48b5-88bc-b3edf10d7a5d.jpg"
    }, {
        "id": 5,
        "movie_title": "The Fearmakers",
        "director": "Sarjeant",
        "date": "4/15/2021",
        "movie_genre": "Thriller",
        "img_url": "https://wallsdesk.com/wp-content/uploads/2016/05/Warcraft-Movie-Wallpapers-HD.jpg"
    }, {
        "id": 6,
        "movie_title": "Hudsucker Proxy, The",
        "director": "Borton",
        "date": "9/17/2021",
        "movie_genre": "Comedy",
        "img_url": "https://tse2.mm.bing.net/th?id=OIP.jCc185feuSf3FTxnd_5bcQHaLH&pid=Api&P=0&w=300&h=300"
    }, {
        "id": 7,
        "movie_title": "Black Ice (Musta jää)",
        "director": "Gleave",
        "date": "2/19/2021",
        "movie_genre": "Drama",
        "img_url": "https://tse3.mm.bing.net/th?id=OIP.EKpfgEH-fLg218dGq_1fagHaLH&pid=Api&P=0&w=300&h=300"
    }, {
        "id": 8,
        "movie_title": "Going to Pieces: The Rise and Fall of the Slasher Film",
        "director": "Trouncer",
        "date": "12/3/2020",
        "movie_genre": "Documentary",
        "img_url": "http://wallup.net/wp-content/uploads/2016/02/327725-movies-Deadpool.jpg"
    }, {
        "id": 9,
        "movie_title": "Something to Talk About",
        "director": "Larrett",
        "date": "9/13/2021",
        "movie_genre": "Comedy|Drama|Romance",
        "img_url": "https://wallpapershome.com/images/wallpapers/get-smurfy-1080x1920-best-animation-movies-of-2017-blue-11947.jpg"
    }, {
        "id": 10,
        "movie_title": "Can Go Through Skin (Kan door huid heen)",
        "director": "Hutcheon",
        "date": "8/30/2021",
        "movie_genre": "Drama",
        "img_url": "https://media.titanbooks.com/catalog/products/7651/noah.jpg"
    }
    ],
    movie:{
        id: 0,
        movie_title:"",
        director:"",
        date:new Date().toString().slice(0,24),
        movie_genre:"",
        image_url: ""
    },
};

export  const ACTIONS = {
    NEXT_SLIDE:"next-slide",
    PREV_SLIDE:"prev-sli6e",
    ADD_MOVIE:"add-movie",
    CHANGE_MOVIE:"change-movie",
    DELETE_ONE:"delete-one",
};

export default form;