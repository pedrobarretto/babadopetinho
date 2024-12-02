import ElencoBaguncado from '../../assets/elenco-baguncado.jpg';

export function Home() {
  return (
    <div className="h-screen w-screen bg-gray-900 flex items-center justify-center">
      <div className="relative w-3/4 max-w-4xl h-1/2 rounded-2xl overflow-hidden shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${ElencoBaguncado})`,
            filter: 'blur(2px)',
          }}
        ></div>

        <div className="relative z-10 flex h-full items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-white text-2xl md:text-4xl font-semibold">
            Elenco
          </h1>
        </div>
      </div>
    </div>
  );
}
