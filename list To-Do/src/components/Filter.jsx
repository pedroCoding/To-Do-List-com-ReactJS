const Filter = () => {
  return (
    <div className="filter">
        <h2>Filtrar</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incompolete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfavética</p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
        </div> 
    </div>
  );
};

export default Filter