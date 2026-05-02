"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BorrowButton = ({ user, book }) => {
    const router = useRouter();

    const handleBorrow = () => {
        if (!user) {
            toast.error("Please login to borrow books!");
            router.push("/signin");
            return;
        }

        toast.success(`You borrowed "${book.title}" successfully!`);
    };

    return (
        <button
            onClick={handleBorrow}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
            Borrow This Book
        </button>
    );
};

export default BorrowButton;