'use client'

import { useState } from "react";
import { Card, Button, Input } from "@heroui/react";
import { toast } from "react-hot-toast";

const ReviewSection = ({ user }) => {
    const [reviews, setReviews] = useState([
        { id: 1, name: "John", rating: 5, text: "Amazing book!" },
        { id: 2, name: "Sara", rating: 4, text: "Very helpful read." },
    ]);

    const [rating, setRating] = useState(0);
    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (!user) {
            toast.error("Please login to add a review");
            return;
        }

        if (!rating || !text) {
            toast.error("Please give rating and review");
            return;
        }

        const newReview = {
            id: Date.now(),
            name: user.name || "Anonymous",
            rating,
            text,
        };

        setReviews([newReview, ...reviews]);
        setRating(0);
        setText("");

        toast.success("Review added!");
    };

    return (
        <Card className="mt-6 p-4">
            <h3 className="font-semibold text-lg mb-3">Reviews</h3>

            {/* Add Review */}
            <div className="space-y-2 mb-4">
                <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onClick={() => setRating(star)}
                            className={star <= rating ? "text-yellow-500" : "text-gray-400"}
                        >
                            ★
                        </button>
                    ))}
                </div>

                <Input
                    placeholder="Write your review..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <Button onClick={handleSubmit}>Submit Review</Button>
            </div>

            {/* Review List */}
            <div className="space-y-3">
                {reviews.map((r) => (
                    <div key={r.id} className="border p-3 rounded-lg">
                        <p className="font-medium">{r.name}</p>
                        <p className="text-yellow-500">
                            {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                        </p>
                        <p className="text-sm">{r.text}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default ReviewSection;