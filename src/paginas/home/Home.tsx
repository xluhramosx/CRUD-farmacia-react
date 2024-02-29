function Home() {
  return (
    <>
      <div className="bg-emerald-700 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem-Vindo!</h2>
            <p className="text-xl">
              Encontre aqui os medicamentos que precisa!
            </p>

            <div className="flex justify-around gap-4">
              <button className="rounded bg-white text-emerald-700 py-2 px-4">
                Ver produtos
              </button>
            </div>
          </div>

          <div className="flex justify-center py-5">
            <img src="https://i.imgur.com/FTnJt7z.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
