class BookService {
    constructor(){
        this.URI = '/api/books'
    }

    async getBooks(){
        const res = await fetch(this.URI);
        const books = await res.json();
        return books;
    }

    async postBook(book){
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
        console.log(data);
        
    }

    async deleteBook(bookId){
        const res = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',

        });
        await res.json();
    }
}

export default BookService;