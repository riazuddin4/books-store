import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
const BooksCard = ({ book }) => {
    return (
        <Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
                <Image
                    src={book.image_url}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={book.title}
                    className="object-cover rounded-xl"
                />

                <Chip size="sm" className="absolute right-2 top-2">{book.category}</Chip>
            </div>

            <div>
                <h2 className="font-medium">{book.title}</h2>
            </div>

            {/* <div className="flex gap-5">
                <div className="flex items-center gap-2">
                    <p><FaHeart /></p>
                    <p>{book.likes}</p>
                </div>

                <Separator orientation="vertical" />


                <div className="flex items-center gap-2">
                    <p><BiDownload /></p>
                    <p>{book.downloads}</p>
                </div>
            </div> */}

            <Link href={`/all-books/${book.id}`}>      <Button variant="outline" className={'w-full'}>View Details</Button></Link>

        </Card>
    );
};

export default BooksCard;