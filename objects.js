let myImages = [
    {
        title: 'Mona Lisa',
        artist: 'Leonardo da Vinci',
        date: 1503
    },
    {
        title: 'The Last Supper',
        artist: 'Leonardo da Vinci',
        date: 1495
    },
    {
        title: 'The Starry Night',
        artist: 'Vincent van Gogh',
        date: 1889
    },
    {
        title: 'The Scream',
        artist: 'Edvard Munch',
        date: 1893
    },
    {
        title: 'Guernica',
        artist: 'Pablo Picasso',
        date: 1937
    },
    {
        title: 'The Kiss',
        artist: 'Gustav Klimt',
        date: 1907
    },
    {
        title: 'Girl With a Pearl Earring',
        artist: 'Johannes Vermeer',
        date: 1665
    },
    {
        title: 'The Birth of Venus',
        artist: 'Sandro Botticelli',
        date: 1485
    },
    {
        title: 'Las Meninas',
        artist: 'Diego Velázquez',
        date: 1656
    },
    {
        title: 'Creation of Adam',
        artist: 'Michelangelo',
        date: 1512
    }
];
//Factory
let getImage = function(artist, title, date){
    return {
        artist,
        title,
        date
    }
}


//Constructor
let Image = function(artist, title, date){
    this.title = title;
    this.artist = artist;
    this.date = date;
}

Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
}


let images = {
    list : [],
    contains(title){
        let isFound = false;
        this.list.forEach(function(v){
            if(v.title === title){
                isFound = true;   
            }
        }
        );
        return isFound;
    },
    clear(){
        this.list = []
    },
    show(){
        if (this.list.length == 0) return;
        for(let ima of this.list){
            ima.show();
        }
    },
    add(title, artist, date){
        if(this.contains(title)){

            return;
        }
        this.list.push(new Image(artist,title,date));
    },
    edit(title, artist, date){
        for(let i of this.list){
            if(i.title == title){
                i.artist = artist;
                i.date = date
                return;
            }
        }
    },
    delete(title){
        for(let i = 0 ; i < this.list.length ; i++){
            if(this.list[i].title === title){
                this.list.splice(i,1);
                return;
            }
        }
    },

}




images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();