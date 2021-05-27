var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",
        articles: [
            {
                "title": "27 сайтов с задачками для оттачивания навыков программирования",
            },
            {
                "title": "Готовимся к собеседованию в Google: 8 месяцев непрерывной работы",  
            },
            {
                "title": "15 материалов по разработке игр", 
            },
            {
                "title": "10 лучших видеокурсов для изучения Linux",  
            },
            {
                "title": "Учебный план по осваиванию современного JavaScript",
            },
            {
                "title": "Учебный план по осваиванию современного JavaScript",
            },
            {
                "title": "Учебный план по осваиванию современного JavaScript",
            },
        ]
    },
    computed: {
       
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if(!searchString){
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            return articles_array;;
        }
    }
});


