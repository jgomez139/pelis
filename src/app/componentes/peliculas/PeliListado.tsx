export const PeliListado = () => {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="col-md-11 mt-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr className="table-danger">
                  <th style={{ width: "10%" }}>Nro</th>
                  <th style={{ width: "30%" }}>Nombre</th>
                  <th style={{ width: "20%" }}>Genero</th>
                  <th style={{ width: "30%" }}>Protagonista</th>
                  <th style={{ width: "10%" }}> </th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td>1</td>
                  <td>Top Gun</td>
                  <td>1</td>
                  <td>Tom Cruise</td>
                  <td className="text-center">
                    <div>
                      <a href="/#">
                        <img alt="" className="imagenListado" />
                      </a>
                      <br />
                      <small>fotico.png</small>
                    </div>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>2</td>
                  <td>Jason vs Freddy</td>
                  <td>4</td>
                  <td>Jason krugeur</td>
                  <td className="text-center">
                    <div>--</div>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>3</td>
                  <td>Dragon Ball GT</td>
                  <td>1</td>
                  <td>Goku</td>
                  <td className="text-center">
                    <div>--</div>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>4</td>
                  <td>Matanza en Texas</td>
                  <td>2</td>
                  <td>KIll perro</td>
                  <td className="text-center">
                    <div>
                      <a href="/#">
                        <img alt="" className="imagenListado" />
                      </a>
                      <br />
                      <small>matanza.jpg</small>
                    </div>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>5</td>
                  <td>Tiburón IV</td>
                  <td>3</td>
                  <td>El shark</td>
                  <td className="text-center">
                    <div>--</div>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>6</td>
                  <td>Start trek</td>
                  <td>1</td>
                  <td>Capitan Kirk</td>
                  <td className="text-center">
                    <div>--</div>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>7</td>
                  <td>Dioses del olimpo</td>
                  <td>2</td>
                  <td>Zeus dos</td>
                  <td className="text-center">
                    <div>--</div>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>8</td>
                  <td>Un pistolero rudo</td>
                  <td>1</td>
                  <td>Balitas</td>
                  <td className="text-center">
                    <div>--</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };
  