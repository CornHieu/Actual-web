// Import React and the useState hook for managing component state
import React, { useState } from "react";

// Import Firebase functions for adding documents to a collection
import { collection, addDoc } from "firebase/firestore";

// Import the Firestore database instance we set up
import { db } from "../firebase";

// Define the CommentForm component
function CommentForm() {
  // Create state variables for the name and comment inputs
  // useState returns an array with the current state value and a function to update it
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // This function handles the form submission
  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    try {
      // Add a new document to the 'comments' collection in Firestore
      // The document contains the name, comment, and current timestamp
      await addDoc(collection(db, "comments"), {
        name: name,
        comment: comment,
        createdAt: new Date(),
      });
      // Clear the input fields after successful submission
      setName("");
      setComment("");
      // Show a success message to the user
      alert("Comment submitted successfully!");
    } catch (error) {
      // Log any errors that occur during submission
      console.error("Error adding comment: ", error);
    }
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit} className="comment-form">
      {/* Input field for the name */}
      <input
        className="author-input"
        type="text"
        value={name}
        // Update the name state when the input changes
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      />
      {/* Textarea for the comment */}
      <textarea
        className="comment-input"
        value={comment}
        // Update the comment state when the textarea changes
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your Comment"
        required
      ></textarea>
      {/* Submit button for the form */}
      <button className="comment-button" type="submit">Submit Comment</button>
    </form>
  );
}

// Export the component so it can be used in other files
export default CommentForm;
