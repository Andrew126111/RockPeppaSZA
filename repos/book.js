function books(title, author, total_pages, read){
    this.title = title;
    this.author = author;
    this.total_pages= total_pages;
    this.read = read;
    this.info = function(){
        if (read){
            console.log(title + "by " + author + ","+ total_pages + " pages, read ");
        }
        else{
            console.log(title + "by " + author + ","+ total_pages + " pages, not read yet");
        }
    }
}
console.log(books.info())
