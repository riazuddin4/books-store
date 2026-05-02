import Category from "@/components/Category";

import BooksCard from "@/components/BooksCard";

const AllBooksPage = async ({ searchParams }) => {
    const { category, search } = await searchParams;
    console.log(category)
    const res = await fetch('http://localhost:3000/data.json')
    const books = await res.json()

    // const filteredBooks = category ? books.filter(book => book.category.toLowerCase() == category.toLowerCase()) : books

    // const filteredBooks = filteredBooks.filter(book =>
    //     book.title.toLowerCase().includes(search.toLowerCase())
    // );
    let filteredBooks = books;

    // Filter by category
    if (category) {
        filteredBooks = filteredBooks.filter(book =>
            book.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Filter by search (title)
    if (search) {
        filteredBooks = filteredBooks.filter(book =>
            book.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold m-4">All Books</h1>
                <form className="m-4 ">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search books..."
                        defaultValue={search || ""}
                        className="w-md p-3 border rounded-lg"
                    />
                </form>
            </div>

            <Category />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredBooks.map(book => <BooksCard key={book.id} book={book} />)}
            </div>


        </div>
    );
};

export default AllBooksPage;