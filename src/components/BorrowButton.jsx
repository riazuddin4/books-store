// "use client";

// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// const BorrowButton = ({ user, book }) => {
//     const router = useRouter();

//     const handleBorrow = () => {
//         if (!user) {
//             toast.error("Please login to borrow books!");
//             router.push("/signin");
//             return;
//         }

//         toast.success(`You borrowed "${book.title}" successfully!`);
//     };

//     return (
//         <button
//             onClick={handleBorrow}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//             Borrow This Book
//         </button>
//     );
// };

// export default BorrowButton;
'use client'

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { toast } from "react-toastify";

const BorrowButton = ({ bookId, availableQuantity }) => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const router = useRouter();

    const handleBorrow = () => {
        //Not logged in
        if (!user) {
            toast.error("Please login to borrow books!");
            router.push("/signin");
            return;
        }

        //No stock
        if (availableQuantity <= 0) {
            toast.error("Book is not available");
            return;
        }

        //Success case
        toast.success(`Book borrowed successfully!`);

        
    };

    return (
        <Button
            onClick={handleBorrow}
            className="w-full"
            disabled={isPending}
        >
            Borrow This Book
        </Button>
    );
};

export default BorrowButton;