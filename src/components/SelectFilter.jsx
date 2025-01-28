const generi = [
  { id: 1, nome: "Azione" },
  { id: 2, nome: "Avventura" },
  { id: 3, nome: "Animazione" },
  { id: 4, nome: "Commedia" },
  { id: 5, nome: "Crime" },
  { id: 6, nome: "Documentario" },
  { id: 7, nome: "Drammatico" },
  { id: 8, nome: "Famiglia" },
  { id: 9, nome: "Fantasy" },
  { id: 10, nome: "Storico" },
  { id: 11, nome: "Horror" },
  { id: 12, nome: "Musicale" },
  { id: 13, nome: "Mistero" },
  { id: 14, nome: "Romantico" },
  { id: 15, nome: "Fantascienza" },
  { id: 16, nome: "Film TV" },
  { id: 17, nome: "Thriller" },
  { id: 18, nome: "Guerra" },
  { id: 19, nome: "Western" },
];

const SelectFilter = () => {
  return (
    <div className="mx-3">
      <select className="form-select" defaultValue="Seleziona un genere">
        <option value="0">Seleziona un genere</option>
        {generi.map((genere) => (
          <option key={genere.id}>{genere.nome}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
