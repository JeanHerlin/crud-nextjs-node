import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import HeaderCard from "@/components/header-card"
import AddButton from "@/components/actions/add-button";
import axios from "axios";
import EditButton from "@/components/actions/edit-button";
import DeleteButton from "@/components/actions/delete-button";

export default async function Home() {

  const students = await axios.get('http://localhost:5000/')

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-20 py-10">
      <div className="card-wrapper flex gap-6">
      <HeaderCard cardLabel={"Etudiants Totaux"} cardContent={students?.data.students.length} bg={"bg-[#5E1675]"}/>
      <HeaderCard cardLabel={"Moyenne de classe"} cardContent={students?.data.stats.avgMoyenne.toFixed(2)} bg={"bg-[#337357]"}/>
      <HeaderCard cardLabel={"Moyenne maximale"} cardContent={students?.data.stats.maxMoyenne.toFixed(2)} bg={"bg-[#333A73]"}/>
      <HeaderCard cardLabel={"Moyenne minimale"} cardContent={students?.data.stats.minMoyenne.toFixed(2)} bg={"bg-[#EE4266]"}/>
      </div>
      <div className="table-container w-[800px] mx-auto">
        <AddButton/>
        <Table className="text-zinc-300 mt-5">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-zinc-50 text-center text-lg">N°</TableHead>
              <TableHead className="text-zinc-50 text-center text-lg">Nom</TableHead>
              <TableHead className="text-zinc-50 text-center text-lg">Moyenne</TableHead>
              <TableHead className="text-zinc-50 text-center text-lg">Observation</TableHead>
              <TableHead className="text-zinc-50 text-center text-lg">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students?.data.students.map((student,i)=><TableRow>
              <TableCell className="font-medium text-center" key={i}>{i+1}</TableCell>
              <TableCell className="text-center">{student.nom}</TableCell>
              <TableCell className="text-center">{student.moyenne.toFixed(2)}</TableCell>
              <TableCell className="text-center">{student.observation}</TableCell>
              <TableCell className="flex gap-3 justify-center">
                <EditButton data={student}/>
                <DeleteButton data={student}/>
              </TableCell>
            </TableRow>)}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
