import BooksCard from "./BooksCard";


const TopGenerations = async () => {
    const res = await fetch('https://books-store-fawn.vercel.app/data.json',{cache: 'no-store'})
    const books = await res.json()
    const topBooks = books.slice(0, 4)




    return (
        <div>
             <div className="overflow-hidden bg-black mt-4 text-white py-2">
            <marquee>📚 New Arrivals: The Great Adventure | Mystery of the Night | Learn JavaScript Fast |
                    🎉 Special Discount on Memberships – Join Today & Save Big!</marquee>
                
            </div>
            <h1 className="text-2xl font-bold my-5">Top Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {topBooks.map(book => <BooksCard key={book.id} book={book} />)}
            </div>
        </div>
    );
};

export default TopGenerations;