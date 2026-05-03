// import BorrowButton from "@/components/BorrowButton";
// import { Button, Card, Chip, Separator } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";


// const BooksDetailsPage = async ({ params }) => {

//     const { id } = await params;
//     const res = await fetch('http://localhost:3000/data.json')
//     const books = await res.json()

//     const book = books.find(p => p.id == id)



//     return (
//         <div className="w-sm mx-auto">

//             {/* <h1>{photo?.title}</h1>
//          <p>{photo.description}</p> */}
//             <Card className="border  ">
//                 <div className="flex gap-6">

//                     <div className="relative w-full aspect-square">
//                         <Image
//                             src={book?.image_url}
//                             fill
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                             alt={book?.title}
//                             className="object-cover rounded-xl"
//                         />

//                         <Chip size="sm" className="absolute right-2 top-2">{book?.category}</Chip>
//                     </div>


//                     <div className="">
//                         <div>
//                             <h2 className="font-medium">title:{book?.title}</h2>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <p>author: {book?.author}</p>

//                         </div>

//                         <Separator orientation="vertical" />


//                         <div className="flex items-center gap-2">
//                             <p>description: {book?.description}</p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <p>quantity: {book?.available_quantity}</p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <Link href={`/all-books/${book.id}`}>      <Button variant="outline" className={'w-full'}>Borrow This Book
//                 </Button></Link> */}
//                 <BorrowButton bookId={book?.id} availableQuantity={book?.available_quantity} />



//             </Card>
//         </div>
//     );
// };

// export default BooksDetailsPage;


'use client'

import BorrowButton from "@/components/BorrowButton";
import { authClient } from "@/lib/auth-client";
import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const BooksDetailsPage = ({ params }) => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const router = useRouter();

    const [book, setBook] = useState(null);

    const { id } = use(params);

    //  Redirect if not logged in
    useEffect(() => {
        if (!isPending && !user) {
            router.push("/signin");
        }
    }, [user, isPending, router]);

    //  Fetch book data
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://books-store-fawn.vercel.app/data.json',{cache: 'no-store'});
            const books = await res.json();
            const found = books.find(p => p.id == id);
            setBook(found);
        };

        fetchData();
    }, [id]);

    if (isPending || !book) {
        return <p className="flex justify-center items-center mt-8"><span className="loading loading-infinity loading-xl"></span></p>;
    }

    return (
        <div className="w-sm mx-auto">
            <Card className="border">
                <div className="flex gap-6">

                    <div className="relative w-full aspect-square">
                        <Image
                            src={book?.image_url}
                            fill
                            alt={book?.title}
                            className="object-cover rounded-xl"
                        />
                        <Chip size="sm" className="absolute right-2 top-2">
                            {book?.category}
                        </Chip>
                    </div>

                    <div>
                        <h2 className="font-medium">title: {book?.title}</h2>
                        <p>author: {book?.author}</p>

                        <Separator orientation="vertical" />

                        <p>description: {book?.description}</p>
                        <p>quantity: {book?.available_quantity}</p>
                    </div>
                </div>

                <BorrowButton
                    bookId={book?.id}
                    availableQuantity={book?.available_quantity}
                />
            </Card>
        </div>
    );
};

export default BooksDetailsPage;