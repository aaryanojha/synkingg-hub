export default function LoginPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#111', color: 'white' }}>
      <h1>Welcome to SynKingg</h1>
      <p>Authentication is coming soon!</p>
      
      {/* We will replace this button with actual Google Auth soon */}
      <button 
        style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#E50914', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Sign in with Google
      </button>
    </div>
  );
}