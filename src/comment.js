// Import React
import React from 'react';


// Import the CommentForm and CommentList components we created
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

// Define the main App component
function App() {
  // Render the app layout
  return (
    <div className="App">
      <h1>My Comment App</h1>
      {/* Include the CommentForm component */}
      <CommentForm />
      {/* Include the CommentList component */}
      <CommentList />
    </div>
  );
}

// Export the App component so it can be used as the root component
export default App;