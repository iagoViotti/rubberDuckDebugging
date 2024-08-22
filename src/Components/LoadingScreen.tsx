const LoadingScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.loader}></div>
      <p>Loading...</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    flexDirection: 'column' as 'column',
  },
  loader: {
    width: '50px',
    height: '50px',
    border: '5px solid #ccc',
    borderTop: '5px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
}

export default LoadingScreen;
