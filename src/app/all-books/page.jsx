import Category from "@/components/Category";

import BooksCard from "@/components/BooksCard";


export const metadata = {
  title: "All Books",
};

const AllBooksPage = async ({ searchParams }) => {
    const { category, search } = await searchParams;
    console.log(category)
    const res = await fetch('https://books-store-fawn.vercel.app/data.json',{cache: 'no-store'})
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
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
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

            <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
            <div className="col-span-2 ">
            <Category />           
            </div>

            <div className="grid col-span-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredBooks.map(book => <BooksCard key={book.id} book={book} />)}
            </div>
            </div>


        </div>
    );
};

export default AllBooksPage;