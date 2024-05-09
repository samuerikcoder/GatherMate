import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-ui/core";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export function EventsPage() {
  return (
    <section className="flex align-middle min-h-dvh w-screen p-4">
      <div className="grid place-items-center w-screen">
        <div style={{ maxWidth: "1500px", width: "100%" }}>
          <div className="flex align-middle justify-end w-full mb-8">
            <Button
              style={{
                background: "#333333",
                color: "#fff",
                height: "42px",
                maxWidth: "fit-content",
              }}
              variant="contained"
              type="submit"
            >
              Criar Evento
            </Button>
          </div>
          <TableContainer component={Paper} sx={{ maxWidth: "1500px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "600" }}>
                    Nome do evento
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "600" }}>
                    Categoria
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "600" }}>
                    Data do Evento
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "600" }}>
                    Valor do ingresso
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "600" }}>
                    Descrição
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "600" }}>
                    Editar
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "600" }}>
                    Excluir
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">
                      <PencilSquareIcon
                        className="mx-0-auto"
                        width={30}
                        height={30}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TrashIcon width={30} height={30} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </section>
  );
}
