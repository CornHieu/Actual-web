// Import React and hooks for managing component state and side effects
import React, { useState, useEffect } from "react";

// Import Firebase functions for querying the database
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

// Import the Firestore database instance we set up
import { db } from "../firebase";

// Define the CommentList component
function CommentList() {
  // Create a state variable to hold the list of comments
  const [comments, setComments] = useState([]);

  // Use the useEffect hook to fetch comments when the component mounts
  useEffect(() => {
    // Create a query to get comments from Firestore, ordered by creation time
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));

    // Set up a real-time listener for the query
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsList = [];
      // Iterate through the query results
      querySnapshot.forEach((doc) => {
        // Add each comment to the list, including its ID and data
        commentsList.push({ id: doc.id, ...doc.data() });
      });
      // Update the state with the new list of comments
      setComments(commentsList);
    });

    // Return a cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []); // The empty array means this effect runs once when the component mounts

  // Render the list of comments
  return (
    <div className="comment-list">
      <h2 className="comment-list-title">Comments</h2>
      {/* Map through the comments and render each one */}
      {comments.map((comment) => (
        <div key={comment.id} className="total-comment">
          <h3 className="comment-name">{comment.name}</h3>
          <p className="comment-content">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

// Export the component so it can be used in other files
export default CommentList;
