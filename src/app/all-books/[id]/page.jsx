import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";


const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('http://localhost:3000/data.json')
    const photos = await res.json()

    const photo = photos.find(p => p.id == id)



    return (
        <div className="w-sm mx-auto">

            {/* <h1>{photo?.title}</h1>
         <p>{photo.description}</p> */}
            <Card className="border rounded-xl">
                <div className="relative w-full aspect-square">
                    <Image
                        src={photo.image_url}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={photo.title}
                        className="object-cover rounded-xl"
                    />

                    <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip>
                </div>

                <div>
                    <h2 className="font-medium">{photo.title}</h2>
                </div>

                <div className="flex gap-5">
                    <div className="flex items-center gap-2">
                        <p>{photo.author}</p>
                        
                    </div>

                    <Separator orientation="vertical" />


                    <div className="flex items-center gap-2">
                        <p>{photo.description}</p>
                    </div>
                </div>

                

            </Card>
        </div>
    );
};

export default PhotoDetailsPage;