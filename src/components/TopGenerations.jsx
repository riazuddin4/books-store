import BooksCard from "./BooksCard";


const TopGenerations = async () => {
    const res = await fetch('http://localhost:3000/data.json')
    const photos = await res.json()
    const topPhotos = photos.slice(0, 8)




    return (
        <div>
            <h1 className="text-2xl font-bold my-5">Top Books</h1>

            <div className="grid grid-cols-4 gap-5">
                {topPhotos.map(photo => <BooksCard key={photo.id} photo={photo} />)}
            </div>
        </div>
    );
};

export default TopGenerations;