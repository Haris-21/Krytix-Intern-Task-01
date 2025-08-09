


const Home  = () => {


  const storedUsername = localStorage.getItem("username");
  

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="flex items-center gap-2">
      <h1 className="text-4xl font-bold font-roboto">Welcome,</h1>
        {storedUsername ? (
        <div>
          <h1 className="text-4xl font-bold font-roboto">{storedUsername}</h1>
          
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
      </div>

      
    </div>
  );
}

export default Home;