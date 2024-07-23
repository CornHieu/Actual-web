// Import React
import React from 'react';


// Import the CommentForm and CommentList components we created
import CommentForm from './components/commentForm';
import CommentList from './components/commentList';

// Define the main App component
function App() {
  // Render the app layout
  return (
    <div className="App">
      <CommentList />
      {/* Include the CommentForm component */}
      <CommentForm />
      
    </div>
  );
}

// Export the App component so it can be used as the root component
export default App;