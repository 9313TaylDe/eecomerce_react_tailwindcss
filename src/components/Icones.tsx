const Icones = () => {
  return (
    <div className="flex justify-center items-center relative h-fit w-fit bg-sky-200">
      <div className="relative w-10 h-10">
        {/* Contêiner que gira tudo */}
        <div className="absolute border top-0">
          <div className="">
            <div
              id="cata"
              className="absolute w-6 h-6 bg-sky-900 rounded-ful top-0.5 animate-spin left-0.5"
            ></div>
          </div>
          {/* Pás */}
        </div>

        {/* Centro fixo da turbina */}
      </div>
    </div>
  );
};

export default Icones;
