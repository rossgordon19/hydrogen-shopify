export default function Welcome({ onEnter }) {
    console.log('onEnter prop is defined:', typeof onEnter !== 'undefined'); // Log the check
  
    return (
      <div>
        <h1>Welcome to Our Store!</h1>
        <p>Click below to enter:</p>
        <button onClick={onEnter}>Click to Enter</button> {/* Use the onEnter prop here */}
      </div>
    );
  }
  